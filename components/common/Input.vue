<template>
    <div :class="'relative'">
        <label :class="['block mb-1 font-manrope text-sm text-neutral-600 font-medium']" v-if="label">
            {{ label }}
            <span v-if="required" class="text-danger">*</span>
        </label>
        <div class="relative flex items-center">
            <span v-if="leftIcon" class="absolute left-4">
                <component :size="22" :is="leftIcon" class="text-slate-500" />
            </span>
            <component :is="type === 'textarea' ? 'textarea' : type === 'select' ? 'select' : 'input'" :type="type" v-model="inputValue" :placeholder="placeholder"
                :class="[
                    'w-full py-3.5 px-4 font-manrope font-semibold text-sm rounded-xl text-neutral-600 transition-all bg-blue-50',
                    'border rounded shadow-sm transition-all focus:border-primary outline-none placeholder:font-manrope placeholder:text-sm',
                    { 'pl-12': leftIcon, 'pr-12': rightIcon }
                ]"
            >
                <option disabled value v-if="options && options.length">{{ placeholder }}</option>
                <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
            </component>
            <span v-if="rightIcon" class="absolute right-4 hover:opacity-75" @click="$emit('iconClick')">
                <component :is="rightIcon" class="text-slate-500" />
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineEmits<{
    (e: 'iconClick'): void
}>()

defineProps<{
    label?: string;
    required?: boolean;
    placeholder?: string;
    leftIcon?: string | object | null;
    rightIcon?: string | object | null;
    type: 'text' | 'email' | 'select' | 'textarea' | 'password' | 'number';
    disabled?: boolean;
    options?: { value: string | number; label: string }[]
}>();

const inputValue = defineModel<string | number>();
</script>