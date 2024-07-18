<template>
    <div class="relative w-full min-h-screen overflow-x-clip">
        <Sidebar :is-collapsed="isSidebarCollapsed" @toggleSidebar="isSidebarCollapsed = !isSidebarCollapsed" />
        <main class="relative w-full" :class="isSidebarCollapsed ? 'sm:pl-24' : 'sm:pl-56'">
            <Navbar @toggleChatbot="showChatbot = !showChatbot" :title="title" :tabs="tabs" :is-collapsed="isSidebarCollapsed" @toggleSidebar="isSidebarCollapsed = !isSidebarCollapsed" />
            <div class="flex items-start w-full">
                <div class="w-full">
                    <slot></slot>
                </div>
                <ChatBot v-if="showChatbot" />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const showChatbot = ref(false)

defineProps<{
    tabs: { title: string, link: string }[],
    title: string
}>()

const isSidebarCollapsed = ref(false)
onMounted(() => {
    isSidebarCollapsed.value = window.innerWidth < 768
})
</script>