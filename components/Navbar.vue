<template>
    <div class="sticky top-0 flex items-center flex-1 w-full p-4 bg-white base-shadow">
        <Button variant="secondary" @click="$emit('toggleSidebar')" size="sm" title="Toggle Sidebar"
            class="min-w-8 h-8 !p-0 justify-center mr-3 sm:hidden" :aria-expanded="!isCollapsed"
            aria-controls="sidebar-content">
            <PiCodeSimpleBold :size="20" class="text-neutral-400 size-4" />
        </Button>
        <h2 class="text-lg font-bold text-center text-neutral-600 font-manrope whitespace-nowrap">{{title}}</h2>

        <ul
            class="flex items-center w-full h-full pl-3 mx-3 overflow-x-auto overflow-y-visible border-l hide-scrollbar sm:pl-4 sm:ml-4">
            <li v-for="tab in tabs" :key="tab.title" class="pb-1.5 mx-1">
                <NuxtLink :to="tab.link"
                    active-class="border-b-2 border-b-[#B2B8BD] !text-neutral-600 opacity-100"
                    class="flex-shrink-0 p-2 py-1.5 whitespace-nowrap transition text-sm font-medium text-neutral-400 hover:text-neutral-600 font-manrope hover:bg-slate-50">
                    {{ tab.title }}
                </NuxtLink>
            </li>
        </ul>
        <button @click="$emit('toggleChatbot')" class="ml-auto cursor-pointer hover:opacity-75" type="button">
            <img alt="Menu" src="/images/ai-bot.png" class="min-w-6 sm:min-w-8" />
        </button>
    </div>
</template>

<script setup lang="ts">
import Button from "./common/Button.vue";
import { PiCodeSimpleBold } from "vue3-icons/pi";

defineProps<{
    isCollapsed: boolean,
    tabs: { title: string, link: string }[],
    title: string
}>()

defineEmits(['toggleSidebar', 'toggleChatbot'])
</script>