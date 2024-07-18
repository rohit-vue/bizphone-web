<template>
    <svg :width="size" :height="size" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.63363 9.05768C7.55029 9.04935 7.45029 9.04935 7.35863 9.05768C5.37529 8.99101 3.80029 7.36602 3.80029 5.36602C3.80029 3.32435 5.45029 1.66602 7.50029 1.66602C9.54196 1.66602 11.2003 3.32435 11.2003 5.36602C11.192 7.36602 9.61696 8.99101 7.63363 9.05768Z"
            :class="strokeClass" stroke="#13293D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M13.6752 3.33203C15.2919 3.33203 16.5919 4.64036 16.5919 6.2487C16.5919 7.8237 15.3419 9.10703 13.7836 9.16536C13.7169 9.15703 13.6419 9.15703 13.5669 9.16536"
            :class="strokeClass" stroke="#13293D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M3.4666 12.132C1.44993 13.482 1.44993 15.682 3.4666 17.0237C5.75827 18.557 9.5166 18.557 11.8083 17.0237C13.8249 15.6737 13.8249 13.4737 11.8083 12.132C9.52493 10.607 5.7666 10.607 3.4666 12.132Z"
            :class="strokeClass" stroke="#13293D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M15.2837 16.666C15.8837 16.541 16.4504 16.2993 16.917 15.941C18.217 14.966 18.217 13.3577 16.917 12.3827C16.4587 12.0327 15.9004 11.7993 15.3087 11.666"
            :class="strokeClass" stroke="#13293D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    size: string,
    strokeClass?: string,
}>()
</script>