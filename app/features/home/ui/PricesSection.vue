<template>
    <div class="w-full relative">
        <!-- content -->
        <div
            class="max-w-[1670px] w-full flex flex-col sm:flex-row justify-center sm:justify-end sm:gap-[80px] desktop:gap-[150px]"
        >
            <!-- images -->
            <div class="relative w-fit mx-auto sm:mx-0">
                <!-- building image -->
                <img
                    class="max-h-[380px] sm:max-h-[642px] h-full object-contain"
                    src="/images/general/prices-image.png"
                    alt="Будівля"
                />

                <!-- sun image -->
                <img
                    class="absolute max-h-[120px] sm:max-h-[220px] desktop:max-h-[265px] left-[-50px] sm:left-auto sm:right-[-300px] desktop:right-[-350px] top-[65%] sm:top-[45%] desktop:top-1/2 -translate-y-1/2"
                    src="/images/general/sun.png"
                    alt="Сонце"
                />
            </div>

            <!-- aside content -->
            <div
                class="mt-[30px] sm:mt-0 flex flex-col items-end text-[#66033C]"
            >
                <h2
                    class="font-outfit font-bold text-[27px]/[30px] sm:text-[45px]/[60px] desktop:text-[60px]/[80px] text-right sm:mr-[148px]"
                >
                    МИ НЕ ОБІЦЯЄМО <br />
                    АНГЛІЙСЬКУ ЗА 3 МІСЯЦІ.
                </h2>

                <p
                    class="mt-[13px] sm:mt-[20px] text-[14px]/[100%] sm:text-[20px]/[100%] font-outfit font-medium text-right"
                >
                    Ми допомагаємо вивчити ї ї назавжди <br />
                    — у вашому темпі, з людською підтримкою
                </p>

                <p
                    class="mt-[13px] sm:mt-[20px] text-[14px]/[100%] sm:text-[20px]/[100%] w-full text-center font-outfit font-bold sm:hidden"
                >
                    СКІЛЬКИ ЧАСУ НАСПРАВДІ <br />
                    ЗАЙМАЄ ВИВЧЕННЯ МОВИ?
                </p>

                <!-- Prices block -->
                <div class="mt-[20px] sm:mt-[30px] w-full">
                    <div
                        class="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-[20px] sm:gap-[40px]"
                    >
                        <div
                            v-for="(item, index) in prices"
                            :key="item.level"
                            :class="[
                                'rounded-[14px] bg-[#66033C] max-w-[161px] sm:max-w-[240px] max-h-[175px] sm:max-h-[207px] py-[24px] px-[16px] flex flex-col gap-[21px] justify-between  w-full h-full',
                                gridClass(index),
                                { 'sm:rotate-[-9deg]': item.id === 4 },
                            ]"
                        >
                            <!-- level -->
                            <div
                                class="flex flex-col gap-[12px] border-[#D37E91] border-b-[0.5px] pb-[12px]"
                            >
                                <!-- tag -->
                                <div
                                    class="bg-[#D37E91] py-[5.5px] px-[10px] rounded-[12.75px] max-h-[24px] max-w-[60px] text-[#66033C] text-[10px]/[100%] font-bold font-outfit text-center"
                                >
                                    Рівень
                                </div>

                                <!-- level text -->
                                <p
                                    class="font-shantell font-medium text-[30px]/[100%] sm:text-[50px]/[100%] text-[#FFF0E1] whitespace-nowrap text-nowrap"
                                >
                                    {{ item.level }}
                                </p>
                            </div>

                            <!-- hours -->
                            <p
                                class="font-outfit font-medium text-[14px]/[100%] sm:text-[18px]/[100%] text-[#FFF0E1]"
                            >
                                {{ item.hours }}
                            </p>
                        </div>

                        <div
                            class="sm:hidden relative col-start-2 row-start-3 w-full h-full flex items-end justify-end max-w-[161px] max-h-[175px]"
                        >
                            <!-- sun image -->
                            <img
                                class="absolute top-0 left-1/2 -translate-x-1/2 max-h-[121px] object-contain pointer-events-none"
                                src="/images/general/sun.png"
                                alt="Сонце"
                            />

                            <!-- text content -->
                            <p
                                class="text-right font-outfit font-semibold text-[12px]/[100%] text-[#66033C] mr-2 mb-1"
                            >
                                за міжнародним <br />
                                стандартом CEFR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- sun image -->
        <div></div>
    </div>
</template>

<script setup lang="ts">
const prices = [
    {
        id: 1,
        level: 'А0 - А1',
        hours: '90 - 100 годин',
    },
    {
        id: 2,
        level: 'А1 - А2',
        hours: '100 - 150 годин',
    },
    {
        id: 3,
        level: 'A2 - B1',
        hours: '160 - 240 годин',
    },
    {
        id: 4,
        level: 'B1 - B2',
        hours: '180 - 260 годин',
    },
    {
        id: 5,
        level: 'B2 - C2',
        hours: '200 - 300 годин',
    },
];
const gridClass = (index: number) => {
    switch (index) {
        case 0:
            return 'justify-self-end self-end sm:col-start-2 sm:row-start-1 sm:justify-self-start sm:self-start';
        case 1:
            return 'justify-self-stretch self-stretch sm:col-start-3 sm:row-start-1';
        case 2:
            return 'justify-self-end self-end sm:col-start-1 sm:row-start-2 sm:justify-self-start sm:self-start';
        case 3:
            return 'justify-self-stretch self-stretch sm:col-start-2 sm:row-start-2';
        case 4:
            return 'justify-self-end self-end sm:col-start-3 sm:row-start-2 sm:justify-self-start sm:self-start';
        default:
            return '';
    }
};
</script>

<style scoped></style>
