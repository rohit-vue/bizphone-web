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
                <h1 class="text-2xl font-bold text-center text-neutral-600 font-manrope">Forgot Password</h1>
                <p class="mt-2 text-center text-sm font-medium text-[#39404F] font-manrope">
                    Choose a difficult and strong password
                </p>

                <form class="mt-6" action="" method="post" @submit.prevent="handleSubmit">
                    <SecureInput 
                        label="New Password"
                        placeholder="Enter your password"
                        required
                        v-model="password"
                    />
                    <SecureInput 
                        label="Confirm new Password"
                        placeholder="Confirm your new password"
                        required
                        v-model="confirmPassword"
                        class="mt-3"
                    />

                    <Button 
                        variant="primary"
                        title="Reset Password"
                        size="lg"
                        class="w-full mt-6"
                        :icon="HiOutlineArrowRight"
                        icon-after-title
                        type="submit"
                    />
                </form>

                <p class="mt-5 text-center text-sm font-medium text-[#39404F] font-manrope">
                    Back to <NuxtLink to="signin" class="font-medium text-primary font-manrope hover:opacity-80 hover:bg-slate-50">Sign In</NuxtLink>
                </p>
            </div>
        </div>
    </div> 
</template>

<script setup lang="ts">
import Button from '~/components/common/Button.vue';
import SecureInput from '~/components/common/SecureInput.vue';
import BackgroundImage from '~/assets/images/bg-auth.png';

import { HiOutlineArrowRight } from "vue3-icons/hi";
import { ref } from 'vue';

definePageMeta({
    title: 'Reset Password | BizPhone',
    layout: 'auth',
})


const password = ref('')
const confirmPassword = ref('')

const handleSubmit = () => {
    console.log({
        password: password.value,
        confirmPassword: confirmPassword.value,
        token: useRoute().params.token
    })
}
</script>
