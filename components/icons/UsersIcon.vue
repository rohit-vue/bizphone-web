<template>
    <svg :width="size" :height="size" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.9999 5.96797C14.9499 5.95964 14.8916 5.95964 14.8416 5.96797C13.6916 5.92631 12.7749 4.98464 12.7749 3.81797C12.7749 2.6263 13.7332 1.66797 14.9249 1.66797C16.1166 1.66797 17.0749 2.63464 17.0749 3.81797C17.0666 4.98464 16.1499 5.92631 14.9999 5.96797Z"
            stroke="#13293D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
        <path
            d="M14.1417 12.0348C15.2834 12.2264 16.5417 12.0264 17.425 11.4348C18.6 10.6514 18.6 9.3681 17.425 8.58477C16.5334 7.9931 15.2584 7.7931 14.1167 7.9931"
            stroke="#13293D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
        <path
            d="M4.9749 5.96797C5.0249 5.95964 5.08324 5.95964 5.13324 5.96797C6.28324 5.92631 7.1999 4.98464 7.1999 3.81797C7.1999 2.6263 6.24157 1.66797 5.0499 1.66797C3.85824 1.66797 2.8999 2.63464 2.8999 3.81797C2.90824 4.98464 3.8249 5.92631 4.9749 5.96797Z"
            stroke="#13293D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
        <path
            d="M5.83353 12.0348C4.69186 12.2264 3.43353 12.0264 2.5502 11.4348C1.3752 10.6514 1.3752 9.3681 2.5502 8.58477C3.44186 7.9931 4.71686 7.7931 5.85853 7.9931"
            stroke="#13293D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
        <path
            d="M10.0004 12.1926C9.95039 12.1842 9.89206 12.1842 9.84206 12.1926C8.69206 12.1509 7.77539 11.2092 7.77539 10.0426C7.77539 8.85091 8.73372 7.89258 9.92539 7.89258C11.1171 7.89258 12.0754 8.85925 12.0754 10.0426C12.0671 11.2092 11.1504 12.1592 10.0004 12.1926Z"
            stroke="#13293D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
        <path
            d="M7.5751 14.8168C6.4001 15.6001 6.4001 16.8835 7.5751 17.6668C8.90843 18.5585 11.0918 18.5585 12.4251 17.6668C13.6001 16.8835 13.6001 15.6001 12.4251 14.8168C11.1001 13.9335 8.90843 13.9335 7.5751 14.8168Z"
            stroke="#13293D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" :class="strokeClass" />
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    size: string,
    strokeClass?: string,
}>()
</script>