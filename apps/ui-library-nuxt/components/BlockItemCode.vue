<template>
    <div class="flex mt-4 border rounded-lg overflow-hidden h-[652px] not-prose">
        <!-- File browser sidebar -->
        <div class="w-64 grow-0 shrink-0 flex-0 py-2 border-r bg-muted/30 overflow-y-auto">
            <TreeView :data="flattenedData" aria-label="file browser" class="w-full"
                :defaultExpandedIds="flattenedData.filter(n => n.children?.length).map(n => n.id)"
                :defaultSelectedIds="flattenedData.filter(n => n.metadata?.path === selectedFile?.path).map(n => n.id)"
                @nodeSelect="handleNodeSelect"
                v-slot="{ element, isBranch, isExpanded, getNodeProps, level, isSelected }">
                <TreeViewItem v-bind="getNodeProps()" :isExpanded="isExpanded" :isBranch="isBranch"
                    :isSelected="isSelected" :level="level" :icon="FileIcon" :name="element.name" class="gap-1.5" />
            </TreeView>
        </div>
        <!-- Code display area -->
        <CodeBlock v-if="selectedFile && selectedFile.content" wrapperClassName="w-full"
            class="h-full max-w-none !w-full flex-1 font-mono text-xs rounded-none border-none" language="ts">
            {{ selectedFile.content }}
        </CodeBlock>
        <div v-else class="flex items-center justify-center h-full text-muted-foreground">
            <div class="flex flex-col items-center gap-2">
                <p>No file selected or file content unavailable</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
// TODO: Replace with Vue equivalents or wrappers for TreeView, TreeViewItem, CodeBlock, FileIcon
// import { TreeView, TreeViewItem, CodeBlock } from 'ui'
// import { File as FileIcon } from 'lucide-vue-next' (or similar)

defineProps<{ files: any[] }>()

const props = defineProps<{ files: any[] }>()

function flattenChildren(files: any[]): any[] {
    return files.map((node: any) => ({
        name: node.name,
        children: node.children ? flattenChildren(node.children) : [],
        metadata: { path: node.path },
    }))
}

function findFirstFile(nodes: any[]): any | null {
    for (const node of nodes) {
        if (node.type === 'file') return node
        if (node.children) {
            const foundFile = findFirstFile(node.children)
            if (foundFile) return foundFile
        }
    }
    return null
}

const selectedFile = ref(findFirstFile(props.files))
const flattenedData = computed(() => {
    // You may need to implement flattenTree in Vue or import a utility
    return { name: '', children: flattenChildren(props.files) }
})

function handleNodeSelect({ element }: any) {
    function findFileByPath(nodes: any[], path: string): any | null {
        for (const node of nodes) {
            if (node.path === path) return node
            if (node.children) {
                const found = findFileByPath(node.children, path)
                if (found) return found
            }
        }
        return null
    }
    const filePath = element.metadata.path
    const foundFile = findFileByPath(props.files, filePath)
    if (foundFile?.type === 'directory') return
    selectedFile.value = foundFile || null
}

// Placeholder for FileIcon
const FileIcon = {}
</script>
