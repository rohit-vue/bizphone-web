<template>
    <svg :width="size" :height="size" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.00016 14.6673C11.6821 14.6673 14.6668 11.6825 14.6668 8.00065C14.6668 4.31875 11.6821 1.33398 8.00016 1.33398C4.31826 1.33398 1.3335 4.31875 1.3335 8.00065C1.3335 11.6825 4.31826 14.6673 8.00016 14.6673Z"
            stroke="#13293D" :class="strokeClass" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.33324 2H5.9999C4.6999 5.89333 4.6999 10.1067 5.9999 14H5.33324" stroke="#13293D" :class="strokeClass" stroke-width="1"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 2C11.3 5.89333 11.3 10.1067 10 14" stroke="#13293D" :class="strokeClass" stroke-width="1" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M2 10.6667V10C5.89333 11.3 10.1067 11.3 14 10V10.6667" stroke="#13293D" :class="strokeClass" stroke-width="1"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2 6.00039C5.89333 4.70039 10.1067 4.70039 14 6.00039" stroke="#13293D" :class="strokeClass" stroke-width="1"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    size: string,
    strokeClass?: string,
}>()
</script>