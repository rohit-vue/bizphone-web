<template>
    <CommonLayout :tabs="tabs"  title="BizPhone Nuxt 3" />
</template>

<script setup lang="ts">
const tabs = [
    {
        title: 'My Numbers',
        link: '/',
    },
    {
        title: 'New Registration',
        link: '/auth/signin',
    }
]
</script>