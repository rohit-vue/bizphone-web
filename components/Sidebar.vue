<template>
    <aside :class="[
        'flex flex-col bg-[#F9F9F9] fixed top-0 z-40 left-0 h-full bottom-0 overflow-y-auto overflow-x-visible transition-all w-56',
        isCollapsed ? 'translate-x-[-100%] sm:w-24 sm:translate-x-0' : ''
    ]" aria-label="Sidebar">
        <div :class="['flex items-center py-4 mx-4 border-b justify-between', isCollapsed ? 'sm:justify-center' : '']">
            <img src="/images/logo-sm.png" alt="Small Logo"
                :class="['pointer-events-none size-5', isCollapsed ? 'hidden sm:block' : 'sm:hidden']" />
            <img alt="Logo" src="/images/logo.png"
                :class="['h-5 pointer-events-none', isCollapsed ? 'sm:hidden' : '']" />

            <Button variant="secondary" @click="$emit('toggleSidebar')" size="lg" title="Toggle Sidebar"
                class="w-8 min-w-8 h-8 !p-0 justify-center" :aria-expanded="!isCollapsed"
                aria-controls="sidebar-content" :class="{ 'sm:ml-5': isCollapsed }">
                <RxCross1 :size="18" class="block text-neutral-400 size-4 sm:hidden" />
                <PiCodeSimpleBold :size="20" class="hidden text-neutral-400 size-4 sm:block" />
            </Button>
        </div>

        <ul :id="'sidebar-content'" :class="['w-full mt-2', isCollapsed ? 'sm:flex sm:flex-col sm:items-center' : '']">
            <li v-for="item in SIDEBAR_DATA" :key="item.title">
                <NuxtLink to="/"
                    :class="['flex items-center px-4 py-3 transition-colors cursor-pointer hover:bg-slate-100', isCollapsed ? 'sm:justify-center' : '']"
                    :aria-label="item.title">
                    <component :is="item.icon" size="24" class="w-6 h-6"
                        :class="isCollapsed ? 'mr-2.5 sm:mr-0' : 'mr-2.5'" stroke-class="stroke-[#39404F]" />
                    <span
                        :class="['text-sm font-medium text-[#39404F] font-manrope', isCollapsed ? 'sm:hidden' : '']">{{
                            item.title }}</span>
                </NuxtLink>
            </li>
        </ul>

        <div class="flex-1 mx-auto border-b max-h-[400px]">
            <!-- MAX HEIGHT -->
        </div>

        <NuxtLink to="/"
            :class="['flex items-center mx-4 py-3 relative transition-colors cursor-pointer hover:bg-slate-100', isCollapsed ? 'sm:justify-center' : '']"
            aria-label="Notifications">
            <HiOutlineBell class="w-8 h-8" :class="['stroke-[#39404F]', isCollapsed ? 'mr-2.5 sm:mr-0' : 'mr-2.5']" />
            <span
                :class="['text-sm font-medium text-[#39404F] font-manrope', isCollapsed ? 'sm:hidden' : '']">Notifications</span>

            <span
                class="absolute top-2 left-4 text-xs font-medium text-white font-manrope px-1.5 py-0.5 bg-danger rounded-full">4</span>
        </NuxtLink>
        <div :class="['relative flex items-center px-1 py-3 mx-3 border-t transition-transform cursor-pointer hover:bg-slate-100', isCollapsed ? 'sm:justify-center' : '']"
            aria-label="User Profile">
            <div class="overflow-hidden rounded-full pointer-events-none size-10">
                <img src="/images/avatar.png" alt="User Avatar" />
            </div>

            <div :class="['ml-2', isCollapsed ? 'sm:hidden' : 'block']">
                <h5 class="text-sm font-semibold text-neutral-600 font-manrope">Adedayo Ayeni</h5>
                <p class="text-sm font-medium text-neutral-400 font-manrope">myemail@mail.cim</p>
            </div>
            <div @click="showProfileList" class="absolute top-0 left-0 w-full h-full"></div>
        </div>

        <Teleport to="body">
            <Transition name="fade">
                <div v-if="showProfileOptions" class="fixed z-50 w-56 bg-white rounded-lg base-shadow"
                    :style="{ bottom: location.top, left: location.left }">
                    <div class="relative block w-full h-full p-3 py-2">
                        <buttton
                            class="absolute flex items-center justify-center w-8 h-8 cursor-pointer top-1 right-1 hover:opacity-75"
                            type="button" @click="showProfileOptions = false">
                            <RxCross1 :size="18" class="text-neutral-400 size-4" />
                        </buttton>
                        <div class="flex items-center w-full py-3" aria-label="User Profile">
                            <div class="overflow-hidden rounded-full pointer-events-none size-10">
                                <img src="/images/avatar.png" alt="User Avatar" />
                            </div>

                            <div class="ml-2">
                                <h5 class="text-sm font-semibold text-neutral-600 font-manrope">Adedayo Ayeni</h5>
                                <p class="text-sm font-medium text-neutral-400 font-manrope">myemail@mail.cim</p>
                            </div>
                        </div>

                        <ul :id="'sidebar-content'" class="w-full">
                            <li v-for="item in PROFILE_MENU_DATA" :key="item.title"
                                class="first:border-b first:mb-2 last:mt-4">
                                <NuxtLink to="/"
                                    :class="['flex items-center px-1.5 py-3 transition-colors cursor-pointer hover:bg-slate-100']"
                                    :aria-label="item.title">
                                    <component :is="item.icon" size="12" class="w-5 h-5 mr-3"
                                        stroke-class="stroke-[#39404F]" />
                                    <span class="text-sm font-medium text-[#39404F] font-manrope">{{ item.title
                                        }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </aside>
</template>

<script setup lang="ts">
import { PiCodeSimpleBold } from "vue3-icons/pi";
import { HiOutlineBell } from "vue3-icons/hi2";
import { RxCross1 } from "vue3-icons/rx";
import Button from './common/Button.vue';

import DoubleUserIcon from "./icons/DoubleUserIcon.vue";
import DashboardIcon from "./icons/DashboardIcon.vue";
import MessageIcon from "./icons/MessageIcon.vue";
import UsersIcon from "./icons/UsersIcon.vue";
import CallIcon from "./icons/CallIcon.vue";
import UserIcon from "./icons/UserIcon.vue";
import WalletIcon from "./icons/WalletIcon.vue";
import ListIcon from "./icons/ListIcon.vue";
import GlobeIcon from "./icons/GlobeIcon.vue";
import LogoutIcon from "./icons/LogoutIcon.vue";

const props =defineProps<{ isCollapsed: boolean }>()
defineEmits(['toggleSidebar']);

const location = ref({
    top: '0px',
    left: '0px'
})

const showProfileOptions = ref(false)

const SIDEBAR_DATA = [
    {
        title: 'Dashboard',
        icon: DashboardIcon,
    },
    {
        title: 'Teams',
        icon: UsersIcon,
    },
    {
        title: 'Calls',
        icon: CallIcon,
    },
    {
        title: 'Contact',
        icon: DoubleUserIcon,
    },
    {
        title: 'Message',
        icon: MessageIcon,
    },
]

const PROFILE_MENU_DATA = [
    {
        title: 'Account Setting',
        icon: UserIcon
    },
    {
        title: 'Billing',
        icon: WalletIcon
    },
    {
        title: 'Numbers',
        icon: ListIcon
    },
    {
        title: 'Registration',
        icon: GlobeIcon
    },
    {
        title: 'Log Out',
        icon: LogoutIcon
    }
]

const showProfileList = (event: MouseEvent) => {
    const top = (event.target as HTMLElement).getBoundingClientRect().top;
    const left = (event.target as HTMLElement).getBoundingClientRect().left;
    const fromBottom = (window.innerHeight - top) + 20;

    location.value = {
        top: `${fromBottom}px`,
        left: `${left}px`
    }

    showProfileOptions.value = true
}

watch(() => props.isCollapsed, () => {
    showProfileOptions.value = false
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translate(0, -10px);
}
</style>