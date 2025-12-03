<template>
    <div
        class="bgImage w-full relative sm:min-h-[1100px] desktop:min-h-[1300px] text-[#FFF0E1]"
    >
        <!-- heading info -->
        <div
            class="relative ml-[20%] sm:ml-[25%] desktop:ml-[550px] pt-[30px] sm:pt-[62px] w-fit"
        >
            <h2
                class="text-[25px]/[30px] sm:text-[50px]/[65px] desktop:text-[60px]/[80px] font-bold font-outfit uppercase"
            >
                Тому вибір <br class="sm:hidden block" />
                школи — <br class="sm:block hidden" />
                це <br class="sm:hidden block" />
                свідомий вибір
            </h2>

            <img
                class="absolute object-contain max-h-[50px] sm:max-h-[140px] desktop:max-h-[160px] right-[-50px] sm:right-[-250px] desktop:right-[-300px] top-[30px] sm:top-[50px] w-fit"
                src="/images/icons/crown.png"
                alt="Корона"
            />
        </div>

        <!-- steps container -->
        <div
            class="mt-[40px] sm:mt-[80px] pl-[24px] sm:pl-[90px] pb-[30px] sm:pb-[56px] pr-[57px] sm:pr-[26px] flex flex-col gap-[24px] sm:gap-[56px]"
        >
            <!-- item -->
            <div
                v-for="step in stepsList"
                :key="step.id"
                class="w-full flex flex-col sm:flex-row justify-between border-t sm:border-t-0 sm:border-b border-[#FFF0E1] pt-[8px] sm:pt-0 sm:pb-[25px] gap-[8px]"
                :class="{ ' border-none': step.id === stepsList.length }"
            >
                <!-- number -->
                <p
                    class="w-fit font-outfit text-[30px]/[100%] sm:text-[100px]/[100%] desktop:text-[120px]/[100%] uppercase"
                >
                    0{{ step.id }}
                </p>

                <!-- title -->
                <p
                    class="max-w-[604px] w-full font-shantell text-[16px]/[100%] sm:text-[35px]/[100%] desktop:text-[45px]/[100%]"
                >
                    {{ step.title }}
                </p>

                <!-- description -->
                <p
                    class="max-w-[306px] font-outfit text-[12px]/[100%] sm:text-[18px]/[100%] desktop:text-[20px]/[100%] mr-[30px] desktop:mr-[100px]"
                >
                    {{ step.description }}
                </p>
            </div>
        </div>

        <img
            class="absolute left-2 top-0 sm:left-auto sm:top-auto sm:right-3 bottom-10 desktop:bottom-5 object-contain max-h-[32px] sm:max-h-[70px]"
            src="/images/icons/arrow-straight-down.svg"
            alt="Стрілка вниз"
        />
    </div>
</template>

<script setup lang="ts">
const stepsList = [
    {
        id: 1,
        title: 'Безкоштовний демо-урок',
        description:
            'Визначаємо рівень і показуємо як буде відбуватись навчання',
    },
    {
        id: 2,
        title: 'Перше реальне заняття',
        description:
            'Ви знайомитесь з викладачем, методикою та розумієте як проходить заняття',
    },
    {
        id: 3,
        title: 'Формуємо комфортний для вас графік',
        description: 'Враховуючи ваші цілі та бажаний темп',
    },
    {
        id: 4,
        title: 'Створюємо план навчання',
        description: 'Підбираємо програму, враховуючи ваші побаж ання',
    },
    {
        id: 5,
        title: 'Ви навчаєтесь і отримуєте задоволення',
        description: 'Ми слідкуємо за вашим прогресом, корегуємо і підтримуємо',
    },
];
</script>

<style scoped>
.bgImage {
    background-image: url('/images/general/background-roadmap.png');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100% 1300px;
}

@media screen and (max-width: 1755px) {
    .bgImage {
        background-size: 100% 1150px;
    }
}

@media screen and (max-width: 640px) {
    .bgImage {
        background-image: url('/images/general/background-roadmap-mobile.png');
        background-size: 100% 100%;
    }
}
</style>
