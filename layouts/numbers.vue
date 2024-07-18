<template>
    <CommonLayout :tabs="tabs"  title="Numbers" />
</template>

<script setup lang="ts">
const tabs = [
    {
        title: 'My Numbers',
        link: '/numbers',
    },
    {
        title: 'New Registration',
        link: '/numbers/registration',
    }
]
</script>