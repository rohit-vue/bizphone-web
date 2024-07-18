<template>
    <svg :width="size" :height="size" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.2749 13.2318L13.2332 3.27344" stroke="#13293D" stroke-width="1" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
        <path d="M9.25098 15.2324L10.251 14.2324" stroke="#13293D" stroke-width="1" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
        <path d="M11.4941 12.9897L13.4858 10.998" stroke="#13293D" stroke-width="1" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
        <path
            d="M3.0009 8.53258L8.53423 2.99925C10.3009 1.23258 11.1842 1.22425 12.9342 2.97425L17.0259 7.06591C18.7759 8.81591 18.7676 9.69925 17.0009 11.4659L11.4676 16.9992C9.7009 18.7659 8.81756 18.7742 7.06756 17.0242L2.9759 12.9326C1.2259 11.1826 1.2259 10.3076 3.0009 8.53258Z"
            stroke="#13293D" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
        <path d="M1.6665 18.332H18.3332" stroke="#13293D" stroke-width="1" stroke-linecap="round" :class="strokeClass"
            stroke-linejoin="round" />
    </svg>
</template>
<script setup lang="ts">
defineProps<{
    size: string,
    strokeClass?: string,
}>()
</script>