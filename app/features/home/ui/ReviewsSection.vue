<template>
    <div
        class="w-full flex justify-center"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @mouseenter="pauseAutoplay"
        @mouseleave="resumeAutoplay"
    >
        <div class="w-full max-w-[1800px] flex flex-col">
            <!-- header -->
            <div class="flex items-center mb-[20px] sm:mb-[80px]">
                <img
                    src="/images/icons/redline.png"
                    alt="Redline"
                    class="w-[300px] h-[40px] sm:w-[500px] sm:h-[67px] md:w-[650px] md:h-[87px] lg:w-[820px] lg:h-[110px] object-contain transition-all duration-300 ml-[-200px] sm:ml-[-300px] md:ml-[-300px] lg:ml-[-350px] xl:ml-0"
                />

                <div
                    class="flex flex-col items-end gap-[40px] w-full text-center lg:text-right"
                >
                    <h2
                        class="text-[#66033C] font-outfit font-bold text-[25px] leading-[31.97px] sm:text-[40px] sm:leading-[52px] md:text-[50px] md:leading-[66px] lg:text-[60px] lg:leading-[80px] uppercase transition-all duration-300 text-end lg:text-right w-full lg:pr-[80px] xl:pr-[350px]"
                    >
                        А це відгуки<br />від
                        <img
                            src="/images/icons/red-the.svg"
                            alt="the"
                            class="inline-block w-[50px] h-[24px] sm:w-[124px] sm:h-[60px] object-contain align-text-top sm:mt-[5px]"
                        />
                        стьюденс:
                    </h2>
                    <p
                        class="text-[#66033C] font-outfit font-medium text-[14px] leading-[100%] sm:text-[16px] md:text-[18px] lg:text-[20px] transition-all duration-300 text-end lg:text-right w-full lg:pr-[80px] xl:pr-[350px]"
                    >
                        (реальні відгуки, а не як воно буває)
                    </p>
                </div>
            </div>

            <!-- content -->
            <div class="flex flex-col gap-[30px] mb-[40px] sm:mb-[60px]">
                <div class="flex gap-[28px] lg:gap-[40px]">
                    <!-- Головна карточка -->
                    <transition name="slide" mode="out-in">
                        <div
                            :key="currentReview"
                            class="w-[250px] md:w-[400px] lg:w-[590px] h-[550px] lg:h-[600px] bg-[#66033C] rounded-[20px] lg:rounded-[51px] p-[24px] lg:p-[40px] flex flex-col flex-shrink-0 transition-all duration-300 shadow-xl"
                        >
                            <div
                                class="flex justify-between items-start mb-[20px] lg:mb-[30px]"
                            >
                                <div
                                    class="bg-[#D37E91] rounded-[37px] px-[20px] lg:px-[30px] py-[10px] lg:py-[12px]"
                                >
                                    <span
                                        class="text-[#66033C] font-outfit font-bold text-[14px] lg:text-[16px] leading-[100%]"
                                    >
                                        {{ currentReviewData!.level }}
                                    </span>
                                </div>
                                <img
                                    src="/images/general/double-quotient-white.svg"
                                    alt="Quote"
                                    class="w-[50px] h-[50px] lg:w-[80px] lg:h-[60px] object-contain transition-all duration-300"
                                />
                            </div>

                            <h3
                                class="text-[#FFF0E1] font-shantell font-medium text-[35px] lg:text-[45px] leading-[100%] mb-[10px] lg:mb-[30px] transition-all duration-300"
                            >
                                {{ currentReviewData!.name }}
                            </h3>
                            <h3
                                class="text-[#FFF0E1] font-shantell font-medium text-[14px] lg:hidden leading-[100%] mb-[20px] lg:mb-[30px] transition-all duration-300"
                            >
                                {{ currentReviewData!.email }}
                            </h3>

                            <div class="flex-1 overflow-hidden">
                                <p
                                    class="text-[#FFF0E1] font-outfit font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] transition-all duration-300 scrollbar-hide overflow-y-auto h-full"
                                >
                                    {{ currentReviewData!.text }}
                                </p>
                            </div>
                        </div>
                    </transition>

                    <!-- Бокові карточки -->
                    <div class="flex-1 flex flex-col justify-end">
                        <div class="flex gap-[28px] lg:gap-[40px] items-end">
                            <transition name="side" mode="out-in">
                                <div
                                    :key="leftKey"
                                    class="w-[250px] md:w-[400px] lg:w-[590px] h-[180px] lg:h-[260px] bg-[#66033C] rounded-[20px] lg:rounded-[50px] p-[20px] lg:p-[30px] flex flex-col transition-all duration-300 relative"
                                >
                                    <img
                                        src="/images/icons/hearts.png"
                                        alt="Hearts"
                                        class="absolute top-[-300px] right-[80px] w-[200px] h-[113px] md:w-[280px] md:h-[158px] lg:w-[390px] lg:h-[220px] object-contain z-10 transition-all duration-300 hearts-float"
                                    />

                                    <div
                                        class="flex justify-between items-start mb-[12px] lg:mb-[15px]"
                                    >
                                        <div
                                            class="bg-[#D37E91] rounded-[37px] px-[20px] lg:px-[30px] py-[8px] lg:py-[12px]"
                                        >
                                            <span
                                                class="text-[#66033C] font-outfit font-bold text-[14px] lg:text-[16px] leading-[100%]"
                                            >
                                                {{ getNextReviews()[0]!.level }}
                                            </span>
                                        </div>
                                        <img
                                            src="/images/general/double-quotient-white.svg"
                                            alt="Quote"
                                            class="w-[40px] h-[30px] lg:w-[60px] lg:h-[45px] object-contain transition-all duration-300"
                                        />
                                    </div>

                                    <h3
                                        class="text-[#FFF0E1] font-shantell font-medium text-[25px] lg:text-[35px] leading-[100%] mb-[12px] transition-all duration-300"
                                    >
                                        {{ getNextReviews()[0]!.name }}
                                    </h3>

                                    <p
                                        class="text-[#FFF0E1] font-outfit font-normal text-[14px] lg:text-[18px] leading-[120%] line-clamp-2 transition-all duration-300"
                                    >
                                        {{ getNextReviews()[0]!.shortText }}
                                    </p>
                                </div>
                            </transition>

                            <transition name="side" mode="out-in">
                                <div
                                    :key="rightKey"
                                    class="w-[250px] md:w-[400px] lg:w-[590px] h-[180px] lg:h-[260px] bg-[#66033C] rounded-[20px] lg:rounded-[50px] p-[20px] lg:p-[30px] flex flex-col transition-all duration-300"
                                >
                                    <div
                                        class="flex justify-between items-start mb-[12px] lg:mb-[15px]"
                                    >
                                        <div
                                            class="bg-[#D37E91] rounded-[37px] px-[20px] lg:px-[30px] py-[8px] lg:py-[12px]"
                                        >
                                            <span
                                                class="text-[#66033C] font-outfit font-bold text-[14px] lg:text-[16px] leading-[100%]"
                                            >
                                                {{ getNextReviews()[1]!.level }}
                                            </span>
                                        </div>
                                        <img
                                            src="/images/general/double-quotient-white.svg"
                                            alt="Quote"
                                            class="w-[40px] h-[30px] lg:w-[60px] lg:h-[45px] object-contain transition-all duration-300"
                                        />
                                    </div>

                                    <h3
                                        class="text-[#FFF0E1] font-shantell font-medium text-[25px] lg:text-[35px] leading-[100%] mb-[12px] transition-all duration-300"
                                    >
                                        {{ getNextReviews()[1]!.name }}
                                    </h3>

                                    <p
                                        class="text-[#FFF0E1] font-outfit font-normal text-[14px] lg:text-[18px] leading-[120%] line-clamp-2 transition-all duration-300"
                                    >
                                        {{ getNextReviews()[1]!.shortText }}
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>

            <!-- controls -->
            <div
                class="flex flex-col sm:flex-row justify-between items-center gap-[30px] sm:gap-[40px]"
            >
                <div class="flex items-center gap-[10px] order-2 sm:order-1">
                    <button
                        @click="previousReview"
                        class="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] flex items-center justify-center hover:opacity-80 transition-all duration-300"
                    >
                        <img
                            src="/images/general/red-arrow.svg"
                            alt="Previous"
                            class="w-full h-full object-contain"
                        />
                    </button>
                    <button
                        @click="nextReview"
                        class="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] flex items-center justify-center hover:opacity-80 transition-all duration-300"
                    >
                        <img
                            src="/images/general/rose-arrow.svg"
                            alt="Next"
                            class="w-full h-full object-contain"
                        />
                    </button>
                </div>

                <div class="flex items-center gap-[12px] order-1 sm:order-2">
                    <div
                        v-for="(_, index) in reviews"
                        :key="`indicator-${index}`"
                        class="indicator w-[68px] h-[8px] rounded-[4px] transition-all duration-300 cursor-pointer"
                        :class="index === currentReview ? 'active' : 'inactive'"
                        @click="currentReview = index"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

interface Review {
    level: string;
    name: string;
    email?: string;
    text: string;
    shortText: string;
}

const reviews = ref<Review[]>([
    {
        level: 'A1-A2',
        name: 'Ольга',
        email: '@olgashevckovska',
        text: 'Я дуже задоволена курсами! Викладачі не просто пояснюють граматику, а допомагають зрозуміти, як використовувати її у реальному житті. Уроки проходять легко, цікаво, з безліччю практики. За три місяці я почала впевнено говорити англійською на роботі. Особливо подобається, що можна займатися онлайн — не треба витрачати час на дорогу. Атмосфера в групі дружня, а викладач завжди підтримує і мотивує. Тепер готуюсь до рівня B2 і точно залишусь у цій школі!',
        shortText: 'Після кількох невдалих спроб навчатися в інших школах...',
    },
    {
        level: 'A1-A2',
        name: 'Данило',
        email: '@danilo',
        text: 'Після кількох невдалих спроб навчатися в інших школах, я нарешті знайшов те, що мені підходить! Викладачі дійсно розуміють, як працювати з дорослими студентами. Вони терплячі, уважні і завжди готові пояснити складні моменти по-іншому, якщо щось незрозуміло. Методика навчання дуже практична — багато розмовної практики і цікавих завдань.',
        shortText: 'Після кількох невдалих спроб навчатися в інших школах...',
    },
    {
        level: 'A1-A2',
        name: 'Катерина',
        email: '@kateryna',
        text: 'Проходжу курс “Англійська для подорожей” — і це найкраще, що я могла обрати! За короткий час я навчилася впевнено спілкуватися в аеропортах, готелях і ресторанах. Викладач завжди підтримує і хвалить за успіхи, що дуже мотивує. Рекомендую всім, хто хоче швидко досягти конкретної мети!',
        shortText:
            'Проходжу курс “Англійська для подорожей” — і це найкраще...',
    },
    {
        level: 'B1-B2',
        name: 'Максим',
        email: '@maxim',
        text: 'Відмінна школа для тих, хто серйозно налаштований на результат! Програма структурована, матеріали актуальні, а викладачі — справжні професіонали. За півроку я підвищив свій рівень з A2 до B1 і тепер впевнено використовую англійську в роботі. Особливо сподобалися заняття з розвитку навичок презентацій.',
        shortText: 'Відмінна школа для тих, хто серйозно налаштований...',
    },
]);

const currentReview = ref(0);
const currentReviewData = computed(() => reviews.value[currentReview.value]!);

const nextReview = () => {
    currentReview.value = (currentReview.value + 1) % reviews.value.length;
};

const previousReview = () => {
    currentReview.value =
        currentReview.value === 0
            ? reviews.value.length - 1
            : currentReview.value - 1;
};

const getNextReviews = () => {
    const result: Review[] = [];
    for (let i = 1; i <= 2; i++) {
        const index = (currentReview.value + i) % reviews.value.length;
        result.push(reviews.value[index]!);
    }
    return result;
};

const leftKey = computed(
    () => getNextReviews()[0]!.name + '-' + currentReview.value
);
const rightKey = computed(
    () => getNextReviews()[1]!.name + '-' + currentReview.value
);

// Swipe
const touchStartX = ref<number | null>(null);
function handleTouchStart(e: TouchEvent) {
    touchStartX.value = e.changedTouches[0]!.clientX;
}
function handleTouchEnd(e: TouchEvent) {
    if (touchStartX.value === null) return;
    const dx = e.changedTouches[0]!.clientX - touchStartX.value;
    const threshold = 40;
    if (dx < -threshold) nextReview();
    else if (dx > threshold) previousReview();
    touchStartX.value = null;
}

// Autoplay
const autoplay = ref(true);
let autoplayTimer: number | null = null;

function startAutoplay() {
    stopAutoplay();
    if (!autoplay.value) return;
    autoplayTimer = window.setInterval(() => nextReview(), 10000);
}

function stopAutoplay() {
    if (autoplayTimer !== null) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }
}

function pauseAutoplay() {
    stopAutoplay();
}
function resumeAutoplay() {
    if (autoplay.value) startAutoplay();
}

onMounted(() => startAutoplay());
onBeforeUnmount(() => stopAutoplay());
</script>

<style scoped>
/* main card */
.slide-enter-active,
.slide-leave-active {
    transition: transform 480ms cubic-bezier(0.22, 0.8, 0.13, 1), opacity 480ms;
}
.slide-enter-from {
    transform: translateX(60px) scale(0.98);
    opacity: 0;
}
.slide-leave-to {
    transform: translateX(-60px) scale(0.98);
    opacity: 0;
}

/* side cards */
.side-enter-active,
.side-leave-active {
    transition: transform 420ms cubic-bezier(0.22, 0.8, 0.13, 1), opacity 420ms;
}
.side-enter-from {
    transform: translateY(12px) scale(0.995);
    opacity: 0;
}
.side-leave-to {
    transform: translateY(-8px) scale(0.995);
    opacity: 0;
}

/* hearts animation */
@keyframes heartsFloat {
    0% {
        transform: translateY(0) rotate(0deg) scale(1);
        opacity: 0.9;
    }
    50% {
        transform: translateY(-12px) rotate(6deg) scale(1.02);
        opacity: 1;
    }
    100% {
        transform: translateY(0) rotate(0deg) scale(1);
        opacity: 0.9;
    }
}
.hearts-float {
    animation: heartsFloat 4.5s ease-in-out infinite;
}

/* indicators */
.indicator.inactive {
    background: #d37e91;
}
.indicator.active {
    background: #66033c;
    transform: scale(1.12);
    box-shadow: 0 4px 12px rgba(102, 3, 60, 0.18);
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

button:focus,
button:focus-visible {
    outline: none !important;
}

.shadow-xl {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}
</style>
