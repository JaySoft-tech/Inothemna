<template>
    <div
        class="w-full flex flex-col sm:flex-row justify-between items-start relative gap-[20px]"
    >
        <!-- text part -->
        <div
            class="max-w-[320px] mx-auto max-sm:ml-[30px] sm:max-w-[700px] desktop:max-w-[1087px] w-full flex flex-col sm:items-center justify-center relative"
        >
            <!-- tag mobile -->
            <h1
                class="h-[24px] max-w-[160px] py-[4px] px-[10px] text-center rounded-[12.75px] bg-[#D37E91] text-[#66033C] text-[10px]/[100%] font-bold font-outfit flex items-center justify-center sm:hidden"
            >
                Онлайн школа англійської
            </h1>

            <!-- heading text -->
            <div
                class="text-[25px]/[37.5px] sm:text-[50px]/[100px] desktop:text-[80px]/[120px] font-outfit font-bold text-[#66033C] mt-[20px] sm:mt-[60px]"
            >
                <span>
                    ВИВЧАЙ ІНОЗЕМНУ,
                    <!-- heart image -->
                    <img
                        class="inline max-h-[40px] sm:max-h-[110px] object-contain sm:top-[-70px] sm:right-[100px] ml-[10px] sm:ml-[50px] mt-[-40px] sm:mt-[-150px]"
                        src="/images/icons/heart.svg"
                        alt="Сердечко"
                    />
                </span>
                <br />
                <span class="whitespace-nowrap">
                    <img
                        class="max-w-[36px] sm:max-w-[120px] object-contain inline-block"
                        src="/images/icons/tilda.svg"
                        alt="Тільда"
                    />
                    ЩОБ ВОНА СТАЛА ДЛЯ
                </span>
                <br />
                ТЕБЕ ПРОСТО ЗЕМНОЮ
            </div>

            <!-- demo lesson -->
            <div
                class="mt-[45px] max-w-[280px] w-full hidden sm:flex flex-row gap-[5px] font-outfit"
            >
                <!-- img -->
                <img
                    class="max-w-[64px] object-contain flex-shrink-0"
                    src="/images/icons/arrow-curved-down.svg"
                    alt="Стрілка вниз"
                />

                <!-- text -->
                <div>
                    <p class="text-[22px]/[100%] text-[#66033C]">
                        Безкоштовний <br />
                        1-й демо урок
                    </p>

                    <button
                        class="mt-[20px] bg-[#66033C] rounded-[38px] text-[#FFF0E1] h-[55px] py-[13px] px-[35px] text-[22px]/[100%] font-bold"
                    >
                        Спробувати
                    </button>
                </div>
            </div>
        </div>

        <!-- image part -->
        <div
            class="max-w-[320px] mx-auto max-sm:ml-[30px] sm:max-w-[608px] w-full relative flex-shrink-0"
        >
            <!-- hero image -->
            <img
                class="w-full object-contain max-h-[260px] sm:max-h-[480px]"
                src="/images/general/hero-girl.png"
                alt="Вчитель англійської мови"
            />

            <!-- circular text container -->
            <div
                class="absolute left-[-30px] sm:left-[-120px] top-[165px] sm:top-[320px]"
            >
                <!-- wrapper -->
                <div
                    class="relative flex items-center justify-center w-[110px] sm:w-[250px] h-[110px] sm:h-[250px]"
                >
                    <!-- text around -->
                    <div class="absolute left-0 top-0">
                        <CircularText
                            text="бест фор ю   бест інгліш   бест тічер   "
                            :class-name="[
                                'text-[#66033C] max-sm:font-bold sm:text-2xl w-[110px] sm:w-[250px] h-[110px] sm:h-[250px]',
                            ]"
                        ></CircularText>
                    </div>

                    <!-- circle -->
                    <div
                        class="w-[55px] sm:w-[136px] h-[55px] sm:h-[136px] px-[10px] sm:px-[18px] py-[20px] sm:py-[42px] bg-[#66033C] flex items-center justify-center rounded-full"
                    >
                        <img src="/images/icons/the.svg" alt="Артикль the" />
                    </div>
                </div>
            </div>
        </div>

        <!-- demo lesson Mobile -->
        <div
            class="mt-[30px] ml-[50px] max-w-[280px] w-full flex sm:hidden flex-row gap-[5px] font-outfit"
        >
            <!-- img -->
            <img
                class="max-w-[64px] object-contain flex-shrink-0"
                src="/images/icons/arrow-curved-down.svg"
                alt="Стрілка вниз"
            />

            <!-- text -->
            <div>
                <p class="text-[22px]/[100%] text-[#66033C]">
                    Безкоштовний <br />
                    1-й демо урок
                </p>

                <button
                    class="mt-[20px] bg-[#66033C] rounded-[38px] text-[#FFF0E1] h-[55px] py-[13px] px-[35px] text-[22px]/[100%] font-bold"
                >
                    Спробувати
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CircularText from '~/components/CircularText.vue';
</script>

<style scoped></style>
