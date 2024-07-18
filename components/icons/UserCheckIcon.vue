<template>
    <svg :width="size" :height="size" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0332 15.8741L13.2999 17.1408L15.8332 14.6074" stroke="#13293D" :class="strokeClass" stroke-width="1"
            stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M10.1332 9.05768C10.0498 9.04935 9.94984 9.04935 9.85817 9.05768C7.87484 8.99102 6.29984 7.36602 6.29984 5.36602C6.2915 3.32435 7.94984 1.66602 9.9915 1.66602C12.0332 1.66602 13.6915 3.32435 13.6915 5.36602C13.6915 7.36602 12.1082 8.99102 10.1332 9.05768Z"
            stroke="#13293D" :class="strokeClass" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M9.9917 18.1741C8.47503 18.1741 6.9667 17.7908 5.8167 17.0241C3.80003 15.6741 3.80003 13.4741 5.8167 12.1324C8.10837 10.5991 11.8667 10.5991 14.1584 12.1324"
            stroke="#13293D" :class="strokeClass" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    size: string,
    strokeClass?: string,
}>()
</script>