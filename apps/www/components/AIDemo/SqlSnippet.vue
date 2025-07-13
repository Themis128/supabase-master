<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Import or implement your own Button, CodeBlock, Chart, etc. for Vue
// import { Button, CodeBlock, ChartContainer, SQL_ICON } from 'ui'
const props = defineProps({
    id: String,
    sql: String,
    title: { type: String, default: 'SQL Query' },
    resultType: { type: String, default: 'table' },
    mockData: Object,
})
const showCode = ref(!props.mockData)
const isExecuting = ref(false)
const showResults = ref(false)
const results = ref<any>(null)
const MOCK_TABLE_DATA = {
    rows: [
        { id: 1, name: 'John Doe', email: 'john@example.com', created_at: '2024-01-15T10:00:00Z', status: 'active', metadata: { role: 'admin', last_login: '2024-01-14' } },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', created_at: '2024-01-14T15:30:00Z', status: 'pending', metadata: null },
        { id: 3, name: 'Bob Wilson', email: 'bob@example.com', created_at: '2024-01-13T09:15:00Z', status: 'active', metadata: { role: 'user', last_login: '2024-01-12' } },
    ],
}
const MOCK_CHART_DATA = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 700 },
]
function handleExecute() {
    isExecuting.value = true
    showResults.value = false
    setTimeout(() => {
        isExecuting.value = false
        showResults.value = true
        results.value = props.resultType === 'chart'
            ? props.mockData || MOCK_CHART_DATA
            : (props.mockData?.rows || MOCK_TABLE_DATA.rows)
    }, 1000)
}
onMounted(() => {
    handleExecute()
})
</script>
<template>
    <div class="my-3 mt-2 border rounded bg-surface-100 overflow-hidden">
        <div>
            <div class="flex items-center gap-2 px-4 py-1">
                <!-- SQL_ICON -->
                <h3 class="text-xs font-medium flex-1">{{ props.title }}</h3>
                <div class="flex">
                    <button type="button" class="w-7 h-7" @click="showCode = !showCode">Code</button>
                    <button type="button" class="w-7 h-7" :disabled="isExecuting" @click="handleExecute">Run</button>
                </div>
            </div>
            <div v-if="showCode" class="border-t">
                <!-- Replace with your CodeBlock component -->
                <pre class="border-0 rounded-none"><code>{{ props.sql }}</code></pre>
            </div>
            <div v-if="isExecuting" class="text-foreground-lighter text-sm flex gap-1.5 items-center p-5">
                <span>Executing query</span>
                <span class="animate-pulse">...</span>
            </div>
            <div v-else-if="showResults && results" class="border-t">
                <div v-if="props.resultType === 'chart'">
                    <!-- Chart rendering placeholder -->
                    <pre>{{ JSON.stringify(results, null, 2) }}</pre>
                </div>
                <div v-else>
                    <table class="w-full m-0 p-0">
                        <thead>
                            <tr class="bg-surface-100 border-b">
                                <th v-for="(key, i) in Object.keys(results[0] || {})" :key="i"
                                    class="p-2 px-5 text-left text-xs font-mono">{{ key }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in results" :key="i" class="border-b">
                                <td v-for="(value, j) in Object.values(row)" :key="j"
                                    class="p-2 px-5 text-left text-xs font-mono">
                                    <span v-if="value === null">NULL</span>
                                    <span v-else-if="typeof value === 'object'">{{ JSON.stringify(value) }}</span>
                                    <span v-else>{{ value }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex items-center justify-between bg-surface-100 py-2 px-4">
                        <p class="text-xs text-foreground-light">
                            {{ results.length }} rows
                            <span v-if="results.length >= 100"> (Limited to only 100 rows)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
