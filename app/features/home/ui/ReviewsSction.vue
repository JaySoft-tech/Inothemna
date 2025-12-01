<template>
    <div
        v-if="reviewsFromStrapi.length > 0"
        class="w-full flex justify-center py-[60px] sm:py-[80px] px-[0px]"
    >
        <div class="w-full max-w-[1800px] flex flex-col">
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

            <div class="flex flex-col gap-[30px] mb-[40px] sm:mb-[60px]">
                <div class="flex gap-[28px] lg:gap-[40px]">
                    <div
                        class="w-[250px] md:w-[400px] lg:w-[590px] h-[550px] lg:h-[600px] bg-[#66033C] rounded-[20px] lg:rounded-[51px] p-[24px] lg:p-[40px] flex flex-col flex-shrink-0 transition-all duration-300"
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
                                    {{ currentReviewData.english_level }}
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
                            {{ currentReviewData.author_name }}
                        </h3>
                        <h3
                            class="text-[#FFF0E1] font-shantell font-medium text-[14px] lg:hidden leading-[100%] mb-[20px] lg:mb-[30px] transition-all duration-300"
                        >
                            {{ currentReviewData.email }}
                        </h3>

                        <div class="flex-1 overflow-hidden">
                            <transition name="short-full" mode="out-in">
                                <p
                                    v-if="showShort"
                                    key="short"
                                    class="text-[#FFF0E1] font-outfit font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] transition-all duration-300 scrollbar-hide overflow-y-auto h-full"
                                >
                                    {{ currentReviewData.shortText }}
                                </p>
                                <p
                                    v-else
                                    key="full"
                                    class="text-[#FFF0E1] font-outfit font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] transition-all duration-300 scrollbar-hide overflow-y-auto h-full"
                                >
                                    {{ currentReviewData.text }}
                                </p>
                            </transition>
                        </div>
                    </div>

                    <div class="flex-1 flex flex-col justify-end">
                        <div class="flex gap-[28px] lg:gap-[40px] items-end">
                            <div
                                class="w-[250px] md:w-[400px] lg:w-[590px] h-[180px] lg:h-[260px] bg-[#66033C] rounded-[20px] lg:rounded-[50px] p-[20px] lg:p-[30px] flex flex-col transition-all duration-300 relative"
                            >
                                <img
                                    src="/images/icons/hearts.png"
                                    alt="Hearts"
                                    class="absolute top-[-300px] right-[80px] w-[200px] h-[113px] md:w-[280px] md:h-[158px] lg:w-[390px] lg:h-[220px] object-contain z-10 transition-all duration-300"
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
                                            {{ nextReviews[0]?.english_level }}
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
                                    {{ nextReviews[0]?.author_name }}
                                </h3>

                                <p
                                    class="text-[#FFF0E1] font-outfit font-normal text-[14px] lg:text-[18px] leading-[120%] line-clamp-2 transition-all duration-300"
                                >
                                    {{ nextReviews[0]?.shortText }}
                                </p>
                            </div>

                            <div
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
                                            {{ nextReviews[1]?.english_level }}
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
                                    {{ nextReviews[1]?.author_name }}
                                </h3>

                                <p
                                    class="text-[#FFF0E1] font-outfit font-normal text-[14px] lg:text-[18px] leading-[120%] line-clamp-2 transition-all duration-300"
                                >
                                    {{ nextReviews[1]?.shortText }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row justify-between items-center">
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
                        v-for="(_, index) in reviewsFromStrapi"
                        :key="`indicator-${index}`"
                        class="w-[68px] h-[8px] rounded-[4px] transition-all duration-300 cursor-pointer"
                        :class="
                            index === currentReview
                                ? 'bg-[#66033C]'
                                : 'bg-[#D37E91]'
                        "
                        @click="currentReview = index"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';

interface Review {
    english_level: string;
    author_name: string;
    email?: string;
    text: string;
    shortText: string;
}

const reviews = ref<Review[]>([
    {
        english_level: 'A1-A2',
        author_name: 'Ольга',
        email: '@olgashevckovska', // Тільки для Ольги згідно з макетом, можна додати іншим
        text: 'Я дуже задоволена курсами! Викладачі не просто пояснюють граматику, а допомагають зрозуміти, як використовувати її у реальному житті. Уроки проходять легко, цікаво, з безліччю практики. За три місяці я почала впевнено говорити англійською на роботі. Особливо подобається, що можна займатися онлайн — не треба витрачати час на дорогу. Атмосфера в групі дружня, а викладач завжди підтримує і мотивує. Тепер готуюсь до рівня B2 і точно залишусь у цій школі!',
        shortText:
            'Після кількох невдалих спроб навчатися в інших школах, я нарешті...',
    },
    {
        english_level: 'A1-A2',
        author_name: 'Данило',
        email: '@danilo',
        text: 'Після кількох невдалих спроб навчатися в інших школах, я нарешті знайшов те, що мені підходить! Викладачі дійсно розуміють, як працювати з дорослими студентами. Вони терплячі, уважні і завжди готові пояснити складні моменти по-іншому, якщо щось незрозуміло. Методика навчання дуже практична — багато розмовної практики і цікавих завдань.',
        shortText: 'Після кількох невдалих спроб навчатися в інших школах...',
    },
    {
        english_level: 'A1-A2',
        author_name: 'Катерина',
        email: '@kateryna',
        text: 'Проходжу курс "Англійська для подорожей" — і це найкраще, що я могла обрати! За короткий час я навчилася впевнено спілкуватися в аеропортах, готелях і ресторанах. Викладач завжди підтримує і хвалить за успіхи, що дуже мотивує. Рекомендую всім, хто хоче швидко досягти конкретної мети!',
        shortText:
            'Проходжу курс "Англійська для подорожей" — і це найкраще...',
    },
    {
        english_level: 'B1-B2',
        author_name: 'Максим',
        email: '@maxim',
        text: 'Відмінна школа для тих, хто серйозно налаштований на результат! Програма структурована, матеріали актуальні, а викладачі — справжні професіонали. За півроку я підвищив свій рівень з A2 до B1 і тепер впевнено використовую англійську в роботі. Особливо сподобалися заняття з розвитку навичок презентацій.',
        shortText: 'Відмінна школа для тих, хто серйозно налаштований...',
    },
]);

const reviewsFromStrapi = ref<Review[]>([]);

onMounted(async () => {
    try {
        // $fetch returns the response body directly (not refs)
        const res = await $fetch('/api/getReviews');

        // server might return { data: [...] } or [...], handle both
        const payload = res?.data ?? res;

        if (Array.isArray(payload)) {
            reviewsFromStrapi.value = payload;
        } else if (payload?.data) {
            reviewsFromStrapi.value = payload.data;
        } else {
            reviewsFromStrapi.value = [];
        }
    } catch (err) {
        console.error('Failed to load reviews:', err);
        reviewsFromStrapi.value = [];
    }
    console.log(reviewsFromStrapi.value);
});

const currentReview = ref(0);

const showShort = ref(false);

const currentReviewData = computed<Review>(
    () =>
        (reviewsFromStrapi.value[currentReview.value] ??
            reviewsFromStrapi.value[0]) as Review
);

const nextReview = () => {
    currentReview.value =
        (currentReview.value + 1) % reviewsFromStrapi.value.length;
};

const previousReview = () => {
    currentReview.value =
        currentReview.value === 0
            ? reviewsFromStrapi.value.length - 1
            : currentReview.value - 1;
};

onMounted(() => {
    showShort.value = true;
    setTimeout(() => (showShort.value = false), 260);
});

watch(currentReview, async () => {
    showShort.value = true;
    await nextTick();
    setTimeout(() => (showShort.value = false), 260);
});

const getNextReviews = () => {
    const result: Review[] = [];
    for (let i = 1; i <= 2; i++) {
        const index =
            (currentReview.value + i) % reviewsFromStrapi.value.length;
        result.push(
            (reviewsFromStrapi.value[index] ??
                reviewsFromStrapi.value[0]) as Review
        );
    }
    return result;
};

const nextReviews = computed<Review[]>(() => getNextReviews());
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Short -> Full text transition */
.short-full-enter-active,
.short-full-leave-active {
    transition: opacity 0.28s ease,
        transform 0.32s cubic-bezier(0.2, 0.9, 0.3, 1), max-height 0.32s ease;
}
.short-full-enter-from {
    opacity: 0;
    transform: translateY(8px) scale(0.99);
    max-height: 0;
}
.short-full-enter-to {
    opacity: 1;
    transform: translateY(0) scale(1);
    max-height: 1400px;
}
.short-full-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
    max-height: 1400px;
}
.short-full-leave-to {
    opacity: 0;
    transform: translateY(-6px) scale(0.995);
    max-height: 0;
}
</style>
