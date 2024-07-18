<template>
    <Input 
        v-bind="$attrs"
        :type="inputType"
        @icon-click="toggleInputType"
        :right-icon="inputType === 'password' ? FaRegEye : FaRegEyeSlash"
    />
</template>

<script lang="ts" setup>
import Input from "./Input.vue";
import { FaRegEye, FaRegEyeSlash } from "vue3-icons/fa6";
const inputType = ref<'password' | 'text'>('password')

const toggleInputType = () => {
    inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>