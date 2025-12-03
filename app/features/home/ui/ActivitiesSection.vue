<template>
    <div class="w-full relative sm:scale-[0.8] desktop:scale-100">
        <!-- main content -->
        <div
            class="max-w-[1544px] mx-auto flex flex-col sm:flex-row sm:justify-center gap-[50px] sm:gap-0"
        >
            <!-- left part -->
            <div class="relative ml-[-50px] sm:ml-0">
                <img
                    class="max-h-[680px] object-contain z-0 hidden sm:block"
                    src="/images/icons/arc-left.png"
                    alt="Дуга"
                />

                <img
                    class="max-h-[680px] object-contain z-0 block sm:hidden left-0 top-0"
                    src="/images/icons/arc-top-mobile.png"
                    alt="Дуга"
                />

                <LessonActivity
                    title="Говоріння"
                    description="(те, що всі дуже люблять )"
                    image-src="/images/general/microphone.png"
                    :text-position="isSmallScreen === true ? 'right' : 'left'"
                    class="absolute bottom-[220px] sm:bottom-auto left-[80px] sm:top-[-20px] sm:left-[-100%]"
                />

                <LessonActivity
                    title="Граматика"
                    description="(не всі люблять, але без неї нікуди, це всі ці сімпли і перфекти )"
                    image-src="/images/general/warning.png"
                    :text-position="isSmallScreen === true ? 'right' : 'left'"
                    class="absolute bottom-[100px] sm:bottom-auto left-[110px] sm:top-1/2 sm:left-[-100%]"
                />

                <LessonActivity
                    title="Слухання"
                    description="(те, де ви вчитесь розпізнавати різну вимову )"
                    image-src="/images/general/headphones.png"
                    :text-position="isSmallScreen === true ? 'right' : 'left'"
                    class="absolute bottom-[-30px] left-[135px] sm:left-auto sm:right-[50%]"
                />
            </div>

            <!-- heading text -->
            <div class="w-full sm:w-fit flex items-center justify-center">
                <div class="flex flex-col text-[#66033C]">
                    <img
                        class="max-h-[125px] sm:max-h-[290px] object-contain"
                        src="/images/general/lessons360.png"
                        alt="Заняття 360"
                    />

                    <p
                        class="mt-[16px] sm:mt-[38px] font-outfit text-[12px]/[100%] sm:text-[22px]/[100%] text-center max-w-[248px] sm:max-w-[454px]"
                    >
                        ми створюємо заняття, що розвивають усі важливі навички
                        для вивчення мови
                    </p>
                </div>
            </div>

            <!-- right part -->
            <div class="relative ml-[-50px] sm:ml-0">
                <img
                    class="max-h-[680px] object-contain z-0 sm:block hidden"
                    src="/images/icons/arc-right.png"
                    alt="Дуга"
                />

                <img
                    class="max-h-[680px] object-contain z-0 block sm:hidden left-0 top-0"
                    src="/images/icons/arc-bottom-mobile.png"
                    alt="Дуга"
                />

                <LessonActivity
                    title="Письмо"
                    description="(це щоб краще запамʼятати і засвоїти матеріал )"
                    image-src="/images/general/pen.png"
                    text-position="right"
                    class="absolute left-[130px] sm:left-auto top-[-30px] sm:top-[-20px] sm:right-[-100%]"
                />

                <LessonActivity
                    title="Словник"
                    description="( розширюємо вашу словесну свідомість )"
                    image-src="/images/general/book.png"
                    text-position="right"
                    class="absolute top-[100px] left-[105px] sm:left-auto sm:top-1/2 sm:right-[-110%]"
                />

                <LessonActivity
                    title="Читання"
                    description="(бо англійська — буває підступна )"
                    image-src="/images/general/glasses.png"
                    text-position="right"
                    class="absolute top-[230px] sm:top-auto left-[70px] sm:left-auto sm:bottom-[-30px] sm:right-[-30%]"
                />
            </div>
        </div>

        <!-- bottom text with buttonchikom -->
        <div
            class="w-full flex items-center justify-center flex-col mt-[-100px] sm:mt-[-50px]"
        >
            <p
                class="font-outfit font-bold text-[20px]/[100%] text-center text-[#66033C] sm:max-w-none max-w-[280px]"
            >
                А посилюємо ми наші заняття <br class="sm:block hidden" />
                360— завдяки інтервальному <br class="sm:block hidden" />
                повторенню
            </p>

            <button
                class="mt-[14px] sm:mt-[38px] bg-[#66033C] rounded-[38px] py-[13px] px-[30px] text-[#FFF0E1] font-outfit font-bold text-[22px]/[100%] hover:bg-[#77033C]/[90] transition-all duration-300"
            >
                Спробувати
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '#imports';

const isSmallScreen = useMediaQuery('(max-width:640px)');
</script>

<style scoped></style>
