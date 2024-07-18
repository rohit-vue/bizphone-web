<template>
    <button :class="[
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        { 'flex-row-reverse': iconAfterTitle },
        { 'hover:bg-opacity-90': !disabled },
        { 'active:bg-opacity-80': !disabled }
    ]" :disabled="disabled" @click="$emit('click')" :type="type || 'button'">
        <span v-if="icon" :class="[iconAfterTitle ? 'ml-2' : 'mr-2']">
            <slot name="icon">
                <component :is="icon" />
            </slot>
        </span>
        <slot>
            <span class="font-manrope">{{ title }}</span>
        </slot>
    </button>
</template>

<script lang="ts" setup>
defineProps<{
    variant: 'primary' | 'secondary' | 'tertiary' | 'danger';
    icon?: string | object | null;
    title: string;
    iconAfterTitle?: boolean;
    size: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}>();

defineEmits<{
    (e: 'click'): void
}>();

const baseClasses =
    'font-manrope text-sm font-semibold inline-flex items-center justify-center rounded-xl transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-slate-50 text-gray-700 border border-gray-300',
    tertiary: 'bg-gray-100 text-gray-700',
    danger: 'text-danger border border-danger'
};
const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3.5 text-lg'
};
</script>