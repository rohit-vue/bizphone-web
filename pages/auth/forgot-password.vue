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
                    Enter your email and we will send you a link to reset your password
                </p>

                <form class="mt-6" action="" method="post" @submit.prevent="handleSubmit">
                    <Input 
                        label="Email address"
                        placeholder="Enter your email"
                        :left-icon="HiOutlineMail"
                        required
                        type="email"
                        v-model="emailAddress"
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
import SecureInput from '~/components/common/SecureInput.vue';
import Button from '~/components/common/Button.vue';
import Input from '~/components/common/Input.vue';
import BackgroundImage from '~/assets/images/bg-auth.png';

import { HiOutlineMail, HiOutlineArrowRight } from "vue3-icons/hi";
import { ref } from 'vue';

definePageMeta({
    layout: 'auth',
    title: 'Forgot Password | BizPhone',
})

const emailAddress = ref('')

const handleSubmit = () => {
    console.log({
        emailAddress: emailAddress.value
    })
}
</script>
