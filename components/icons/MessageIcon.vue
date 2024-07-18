<template>
    <svg :width="size" :height="size" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.08301 8.75H12.9163" stroke="#13293D" stroke-width="1.125" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
        <path
            d="M5.83317 15.3587H9.1665L12.8748 17.8254C13.4248 18.1921 14.1665 17.8004 14.1665 17.1337V15.3587C16.6665 15.3587 18.3332 13.6921 18.3332 11.1921V6.19206C18.3332 3.69206 16.6665 2.02539 14.1665 2.02539H5.83317C3.33317 2.02539 1.6665 3.69206 1.6665 6.19206V11.1921C1.6665 13.6921 3.33317 15.3587 5.83317 15.3587Z"
            stroke="#13293D" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" :class="strokeClass" />
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    size: string,
    strokeClass?: string,
}>()
</script>