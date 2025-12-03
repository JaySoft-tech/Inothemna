<template>
    <div class="w-full flex justify-center px-[20px]">
        <div class="w-full max-w-[1800px] relative">
            <!-- Desktop & Tablet Layout -->
            <div class="hidden sm:block relative">
                <!-- Background Image -->
                <img
                    src="/images/general/bg-price-section.png"
                    alt="Background"
                    class="w-full h-auto rounded-[20px] md:rounded-[30px] object-cover"
                />

                <!-- Content Overlay -->
                <div
                    class="absolute inset-0 flex items-center justify-between px-[30px] md:px-[50px] lg:px-[80px] py-[40px] md:py-[50px] lg:py-[60px]"
                >
                    <!-- Left Side: Title -->
                    <div
                        class="flex flex-col gap-[8px] md:gap-[12px] lg:gap-[15px] max-w-[400px] md:max-w-[550px] lg:max-w-[674px]"
                    >
                        <h2
                            class="text-[#FFF0E1] font-outfit font-bold text-[35px] leading-[35px] md:text-[48px] md:leading-[48px] lg:text-[60px] lg:leading-[60px] uppercase transition-all duration-300"
                        >
                            Вартість навчання:
                        </h2>
                        <p
                            class="text-[#FFF0E1] font-outfit font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[100%] transition-all duration-300"
                        >
                            у нас все просто
                        </p>
                    </div>

                    <!-- Center: Wallet Icon -->
                    <div
                        class="absolute left-1/2 bottom-0 -translate-x-1/2 z-0 flex justify-center"
                    >
                        <img
                            src="/images/icons/wallet.svg"
                            alt="Wallet"
                            class="w-[320px] md:w-[390px] lg:w-[300px] xl:w-[400px] h-auto object-contain mb-[-400px] md:mb-[-200px] xl:mb-[-40px] transition-all duration-300"
                        />
                    </div>

                    <!-- Right Side: Price Info -->
                    <div
                        class="flex flex-col items-start gap-[5px] md:py-[30px] lg:pt-[60px] lg:gap-[15px] pt-[50px]"
                    >
                        <!-- Badge -->
                        <div
                            class="bg-[#D37E91] rounded-[36px] px-[20px] md:px-[25px] lg:px-[30px] py-[10px] md:py-[10px] lg:py-[12px]"
                        >
                            <span
                                class="text-[#66033C] font-outfit font-bold text-[14px] md:text-[15px] lg:text-[16px] leading-[100%]"
                            >
                                1 заняття
                            </span>
                        </div>

                        <!-- Price -->
                        <div
                            class="flex items-start gap-[8px] md:gap-[12px] lg:gap-[15px] pr-[100px]"
                        >
                            <span
                                class="text-[#FFF0E1] font-shantell font-medium text-[110px] leading-[100%] md:text-[120px] lg:text-[180px] transition-all duration-300"
                            >
                                550
                            </span>
                            <span
                                class="text-[#FFF0E1] font-shantell font-medium text-[30px] leading-[100%] md:text-[42px] lg:text-[53.78px] transition-all duration-300"
                            >
                                грн
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Arrow Down (Top Right) -->
                <div
                    class="absolute top-[20px] md:top-[25px] lg:top-[30px] right-[20px] md:right-[25px] lg:right-[30px]"
                >
                    <img
                        src="/images/icons/arrow-straight-down.svg"
                        alt="Arrow"
                        class="w-[70px] h-[70px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] md:mr-[-20px] md:mt-[-20px] object-contain transition-all duration-300"
                    />
                </div>
            </div>

            <!-- Mobile Layout -->
            <div class="sm:hidden relative">
                <!-- Background Image -->
                <img
                    src="/images/general/bg-price-mobile.png"
                    alt="Background"
                    class="w-full h-auto rounded-[20px] object-cover"
                />

                <!-- Content Overlay -->
                <div class="absolute inset-0 flex flex-col px-[24px] py-[30px]">
                    <!-- Top: Title & Arrow -->
                    <div class="flex justify-between items-start mb-[20px]">
                        <div class="flex flex-col gap-[8px] flex-1">
                            <h2
                                class="text-[#FFF0E1] font-outfit font-bold text-[25px] leading-[30px] uppercase"
                            >
                                Вартість навчання :
                            </h2>
                            <p
                                class="text-[#FFF0E1] font-outfit font-normal text-[14px] leading-[100%]"
                            >
                                у нас все просто
                            </p>
                        </div>

                        <!-- Arrow -->
                        <img
                            src="/images/icons/arrow-straight-down.svg"
                            alt="Arrow"
                            class="w-[32px] h-[32px] object-contain flex-shrink-0 mr-[-15px] mt-[-15px]"
                        />
                    </div>

                    <!-- Badges -->
                    <div
                        class="flex items-center justify-between gap-[12px] mb-[20px]"
                    >
                        <div
                            class="bg-[#D37E91] rounded-[36px] px-[30px] py-[12px]"
                        >
                            <span
                                class="text-[#66033C] font-outfit font-bold text-[16px] leading-[100%]"
                            >
                                1 заняття
                            </span>
                        </div>
                        <div
                            class="bg-transparent border border-[#D37E91] rounded-[36px] px-[30px] py-[12px]"
                        >
                            <span
                                class="text-[#FFF0E1] font-outfit font-bold text-[16px] leading-[100%]"
                            >
                                Онлайн
                            </span>
                        </div>
                    </div>

                    <!-- Price & Details -->
                    <div class="flex items-end justify-between">
                        <!-- Left: Price & Duration -->
                        <div class="flex flex-col gap-[12px]">
                            <div class="flex items-start">
                                <span
                                    class="text-[#FFF0E1] font-shantell font-medium text-[143.03px] leading-[100%]"
                                >
                                    550
                                </span>
                                <span
                                    class="text-[#FFF0E1] font-shantell font-medium text-[38.72px] leading-[100%]"
                                >
                                    грн
                                </span>
                            </div>

                            <div
                                class="text-[#FFF0E1] font-outfit text-[14px] leading-[18px] max-w-[132px]"
                            >
                                <span class="font-light">
                                    Тривалість заняття:
                                </span>
                                <br />
                                <span class="font-bold"> 55 хвилин </span>
                            </div>
                        </div>

                        <!-- Right: Wallet Icon -->
                        <img
                            src="/images/icons/wallet.svg"
                            alt="Wallet"
                            class="w-[280px] h-[220px] object-contain absolute bottom-[-20px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
