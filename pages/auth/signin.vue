<template>
    <div class="w-full min-h-screen pb-8 overflow-y-auto" :style="'background-image: url('+ BackgroundImage +')'">
        <header class="flex items-center justify-between w-full px-4 py-4 max-w-[1500px] mx-auto mt-2">
            <NuxtLink to="/" title="BizPhone" class="text-2xl font-bold text-primary font-manrope">
                BizPhone
            </NuxtLink>

            <button class="cursor-pointer hover:opacity-75" type="button">
                <img alt="Menu" src="/images/ai-bot.png" class="w-8" />
            </button>
        </header>

        <div class="flex items-center justify-center flex-1 mt-6">
            <div class="w-full max-w-[25rem] py-8 px-5 sm:px-6 md:px-8 mx-5 bg-white rounded-lg base-shadow">
                <h1 class="text-2xl font-bold text-center text-primary font-manrope">Bizphone</h1>
                
                <div class="flex items-center mt-6">
                    <NuxtLink to="signin" class="w-full pt-3 pb-1 font-medium text-center border-b-2 border-b-primary text-[#182233] font-manrope hover:opacity-80 hover:bg-slate-50">
                        Sign In
                    </NuxtLink>
                    <NuxtLink to="signup" class="border-b border-b-neutral-300 w-full pt-3 pb-1 font-medium text-center text-[#182233] font-manrope hover:opacity-80 hover:bg-slate-50">
                        Sign Up
                    </NuxtLink>
                </div>

                <form class="mt-6" action="" method="post" @submit.prevent="handleSubmit">
                    <Input 
                        label="Email address"
                        placeholder="Enter your email"
                        :left-icon="HiOutlineMail"
                        required
                        type="email"
                        v-model="emailAddress"
                    />
                    <SecureInput 
                        label="Password"
                        placeholder="Enter your password"
                        :left-icon="LuLock"
                        required
                        class="mt-4"
                        v-model="password"
                    />

                    <NuxtLink to="forgot-password" class="block mt-2 ml-auto text-sm font-medium max-w-max text-danger font-manrope hover:bg-slate-50 hover:opacity-70">
                        Forgot password?
                    </NuxtLink>

                    <Button 
                        variant="primary"
                        title="Sign In"
                        size="lg"
                        class="w-full mt-6"
                        type="submit"
                        :icon="HiOutlineArrowRight"
                        icon-after-title
                    />
                    <Button 
                        variant="secondary"
                        title="Sign Up"
                        size="lg"
                        class="w-full mt-3"
                        :icon="HiOutlineArrowRight"
                        icon-after-title
                        @click="$router.push('/auth/signup')"
                    />
                </form>

                <div class="flex items-center justify-center mt-6">
                    <div class="h-[1px] w-full bg-[#D9D9D9]" />
                    <span class="px-4 text-sm font-medium text-[#39404F] font-manrope">OR</span>
                    <div class="h-[1px] w-full bg-[#D9D9D9]" />
                </div>

                <p class="mt-5 text-center text-sm font-medium text-[#39404F] font-manrope">To Sign Up, Download The Beesphone App</p>

                <div class="flex items-center justify-center mt-6">
                    <Button 
                        variant="secondary"
                        @click="onPlayStoreButtonClick"
                        size="lg"
                        class="w-full mr-2"
                        title=""
                    >
                        <img alt="Play Store" src="/images/play-store.png" class="h-6" />
                    </Button>
                    <Button 
                        variant="secondary"
                        @click="onAppStoreButtonClick"
                        size="lg"
                        class="w-full ml-2"
                        title=""
                    >
                        <img alt="App Store" src="/images/app-store.png" class="h-6" />
                    </Button>
                </div>
            </div>
        </div>
    </div> 
</template>

<script setup lang="ts">
import SecureInput from '~/components/common/SecureInput.vue';
import Button from '~/components/common/Button.vue';
import Input from '~/components/common/Input.vue';
import BackgroundImage from '~/assets/images/bg-auth.png';

import { HiOutlineMail, HiOutlineArrowRight } from "vue3-icons/hi";
import { LuLock } from "vue3-icons/lu";

definePageMeta({
    layout: 'auth',
    title: 'Signin | BizPhone',
})

const emailAddress = ref('')
const password = ref('')

const handleSubmit = () => {
    console.log({
        emailAddress: emailAddress.value,
        password: password.value
    })
}

const onAppStoreButtonClick = () => {
    console.log('onAppStoreButtonClick')
}

const onPlayStoreButtonClick = () => {
    console.log('onPlayStoreButtonClick')
}
</script>