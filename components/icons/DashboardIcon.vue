<template>
    <svg :width="size" :height="size" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :class="strokeClass" d="M10 15V12.5" stroke="#13293D" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path :class="strokeClass"
            d="M8.39172 2.35053L2.61672 6.97553C1.96672 7.49219 1.55006 8.58386 1.69172 9.40053L2.80006 16.0339C3.00006 17.2172 4.13339 18.1755 5.33339 18.1755H14.6667C15.8584 18.1755 17.0001 17.2089 17.2001 16.0339L18.3084 9.40053C18.4417 8.58386 18.0251 7.49219 17.3834 6.97553L11.6084 2.35886C10.7167 1.64219 9.27506 1.64219 8.39172 2.35053Z"
            stroke="#13293D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    size: string,
    strokeClass?: string,
}>()
</script>