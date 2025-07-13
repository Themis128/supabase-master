<script setup lang="ts">
import ImageCarousel from '~/components/Carousels/ImageCarousel.vue'
import SectionContainer from '~/components/Layouts/SectionContainer.vue'
import AdminAccessData from 'data/home/admin-access.json'
</script>
<template>
    <SectionContainer>
        <div class="mb-16">
            <h2 class="h3">Build your app without leaving the dashboard</h2>
        </div>
        <ImageCarousel :content="AdminAccessData" :altTabView="true" />
    </SectionContainer>
</template>
