<template>
    <div
        class="flex items-center gap-[14px] sm:gap-[20px] min-h-[143px] w-fit"
        :class="{
            'flex-row': textPosition === 'left',
            'flex-row-reverse': textPosition === 'right',
        }"
    >
        <!-- text -->
        <div
            class="py-[12px] sm:py-[18px] px-[16px] sm:px-[24px] flex flex-col gap-[8px] text-[#66033C] bg-[#FFFFFF] border-[#FFF0E1] rounded-lg max-w-[185px] sm:max-w-[208px]"
        >
            <!-- title -->
            <p
                class="font-shantell font-medium text-[18px]/[100%] sm:text-[30px]/[100%] text-center"
            >
                {{ title }}
            </p>

            <!-- description -->
            <p class="font-outfit font-medium text-[12px]/[100%]">
                {{ description }}
            </p>
        </div>

        <!-- image -->
        <img
            class="object-contain max-h-[90px] sm:max-h-[143px]"
            :src="imageSrc"
            :alt="title"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    description: string;
    imageSrc: string;
    textPosition: 'left' | 'right';
}>();

const textPosition = computed(() => props.textPosition);
</script>

<style scoped></style>
