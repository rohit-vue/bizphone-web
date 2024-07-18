<template>
    <div
        class="relative bottom-0 flex flex-col max-h-full max-w-full h-[36rem] py-1 mr-1 border rounded-lg w-[20rem] bg-blue-50 border-primary">
        <div class="flex items-center p-3 mx-4 mt-3 bg-white rounded-lg shadow-2">
            <div class="flex items-center justify-center p-1.5 mr-2 border rounded-full ">
                <img src="/public/images/ai-bot.png" class="size-3" alt="Logo" />
            </div>
            <span class="text-sm font-semibold font-manrope">Biz AI is typing....</span>

            <div class="flex items-center ml-auto">
                <button class="cursor-pointer hover:opacity-75" type="button">
                    <GoHistory size="24" class="size-4 text-[#757C86]" />
                </button>
                <button class="ml-3 rotate-90 cursor-pointer hover:opacity-75" type="button">
                    <CiMenuKebab size="24" class="size-4 text-[#757C86]" />
                </button>
            </div>
        </div>

        <ul class="flex flex-col flex-1 px-4 pt-4 overflow-y-auto">
            <li v-for="(item, index) in CHAT_DATA_DUMMY" :key="(item.type + item.from + index)"
                :class="['w-max mb-2 max-w-[90%] float-end', item.from ? item.from == 'bot' ? '' : 'ml-auto' : 'mx-auto']">
                <span v-if="item.type == 'date'" class="text-sm text-[#13293D] font-medium font-manrope my-2">{{ item.content }}</span>
                <span v-else-if="item.type == 'text' && item.time" :class="item.from == 'bot' ? '' : 'ml-auto w-max'" class="my-2 text-xs text-[#585E6C] font-medium font-manrope flex items-center">
                    <div v-if="item.from == 'bot'" class="flex items-center justify-center p-1 mr-1 border rounded-full ">
                        <img src="/public/images/ai-bot.png" class="size-2" alt="Logo" />
                    </div>
                    {{ item.from == 'bot' ? 'Live Chat ' : 'Me ' }}
                    {{ item.time }}
                </span>

                <div v-if="item.type === 'text'" :class="[
                    'flex items-center shadow justify-center p-3 rounded-lg',
                    item.from == 'user' ? ' text-white bg-primary' : 'text-[#757C86] bg-white border border-neutral-400 '
                ]">
                    <span class="text-sm font-medium font-manrope">{{ item.message }}</span>
                </div>

                <template v-if="item.type === 'button'">
                    <button @click="handleButtonClick(item)" class="flex items-center justify-center h-10 px-2 mb-1 text-sm border rounded-lg font-manrope border-primary text-primary hover:opacity-75" v-for="button in item.buttons">
                        {{ button.title }}
                    </button>
                </template>
            </li>
        </ul>
        <div class="flex items-start mx-4 mb-2 bg-white border rounded-lg shadow-2"
            :class="{ 'border-primary': isFocused }">
            <input @focus="isFocused = true" @blur="isFocused = false"
                class="px-2 py-3 w-[60%] rounded-lg outline-none placeholder:text-sm font-manrope placeholder:font-manrope"
                placeholder="Send Message" />
            <button type="button" class="flex items-center justify-center h-full px-2 hover:opacity-75">
                <GrEmoji :size="24" class="size-5 text-primary" />
            </button>
            <button type="button" class="flex items-center justify-center h-full px-2 hover:opacity-75">
                <RiAttachment2 :size="24" class="size-5 text-primary" />
            </button>
            <button type="button" class="flex items-center justify-center h-full px-2 hover:opacity-75">
                <RiSendPlaneFill :size="24" class="size-5 text-primary" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RiSendPlaneFill, RiAttachment2 } from "vue3-icons/ri"
import { CiMenuKebab } from "vue3-icons/ci";
import { GoHistory } from "vue3-icons/go";
import { GrEmoji } from "vue3-icons/gr";

const isFocused = ref(false);

const CHAT_DATA_DUMMY = [
    {
        type: 'date',
        content: 'Oct 13'
    },
    {
        message: 'Hello Mide',
        from: 'bot',
        type: 'text',
        time: '11:31 AM'
    },
    {
        message: 'I’m Biz AI, think of me as your personal assistant. My capabilities are limited now, but i’m getting better everyday. what would you like me to do for you?',
        from: 'bot',
        type: 'text'
    },
    {
        type: 'button',
        from: 'bot',
        buttons: [
            {
                title: 'Make a call',
                action: 'button-1'
            },
            {
                title: 'Start a Chat',
                action: 'button-2'
            }
        ]
    },
    {
        type: 'date',
        content: 'Yesterday'
    },
    {
        type: 'text',
        message: 'Thank you, I would appreciate that',
        from: 'user',
        time: '11:33 AM',
        isRead: true
    },
    {
        type: 'date',
        content: 'Missed call by 11:40'
    },
    {
        type: 'text',
        from: 'bot',
        message: 'Sorry my AI isn’t able to handle your request. However i can connect you with our virtual assistant who can help you. Should i connect you? ',
    },
    {
        type: 'button',
        from: 'bot',
        buttons: [
            {
                title: 'Connect With a Virtual Assistant',
                action: 'button-1'
            },
            {
                title: 'Cancel Request',
                action: 'button-2'
            }
        ]
    }
]

const handleButtonClick = (item: any) => {
    console.log(item)
}
</script>