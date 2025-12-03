<template>
    <div class="flex flex-col gap-[60px] sm:gap-[80px] pb-[80px]">
        <!-- Hero section -->
        <HeroSection
            class="max-sm:mt-[20px] max-sm:px-[10px] max-w-[1800px] w-full mx-auto"
        />

        <!-- Audience section -->
        <div class="px-[10px]">
            <AudienceSection class="mt-[30px] mx-auto max-w-[1800px] w-full" />
        </div>

        <div class="mt-[30px] sm:mt-[0px] px-[0px]">
            <ComfortableLearning />
        </div>

        <div class="mt-[00px] sm:mt-[0px] px-[10px]">
            <PricesSection />
        </div>

        <div v-if="isMounted" class="my-[0px] sm:my-[20px]">
            <NuxtMarquee direction="right" :speed="70" :loop="0">
                <div
                    v-for="i in 50"
                    class="mr-[20px] flex items-center gap-[20px]"
                >
                    <img
                        class="object-contain max-h-[22px] sm:max-h-none"
                        src="/images/icons/the2.png"
                    />
                    <div
                        class="h-[10px] sm:h-[16px] w-[10px] sm:w-[16px] bg-[#FFE2EE] rounded-full"
                    ></div>
                </div>
            </NuxtMarquee>
        </div>

        <div class="mt-[00px] sm:mt-[0px] px-[10px]">
            <RoadmapSection />
        </div>

        <div class="mt-[00px] sm:mt-[-80px] desktop:mt-0 px-[10px]">
            <ActivitiesSection />
        </div>

        <div class="mt-[00px] sm:mt-[-80px] desktop:mt-0 px-[10px]">
            <PriceSection />
        </div>

        <div class="px-[0px]">
            <VideoSection />
        </div>

        <div class="mt-[00px] sm:mt-[0px] px-[10px]">
            <TeacherSection />
        </div>

        <div class="mt-[00px] sm:mt-[0px] px-[10px]">
            <ReviewsSection />
        </div>

        <div class="mt-[00px] sm:mt-[0px] px-[10px]">
            <FAQSection />
        </div>

        <div class="mt-[00px] sm:mt-[0px] px-[10px]">
            <ContactFormSection />
        </div>
    </div>
</template>

<script setup lang="ts">
import HeroSection from '~/features/home/ui/HeroSection.vue';
import AudienceSection from '~/features/home/ui/AudienceSection.vue';
import ComfortableLearning from '~/features/home/ui/ComfortableLearning.vue';
import PricesSection from '~/features/home/ui/PricesSection.vue';
import ContactFormSection from '~/features/home/ui/ContactFormSection.vue';
import FAQSection from '~/features/home/ui/FAQSection.vue';
import RoadmapSection from '~/features/home/ui/RoadmapSection.vue';
import ActivitiesSection from '~/features/home/ui/ActivitiesSection.vue';
import ReviewsSection from '~/features/home/ui/ReviewsSection.vue';
import TeacherSection from '~/features/home/ui/TeacherSection.vue';
import VideoSection from '~/features/home/ui/VideoSection.vue';
import PriceSection from '~/features/home/ui/PriceSection.vue';

const isMounted = ref(false);
onMounted(async () => {
    await nextTick();
    isMounted.value = true;
});
</script>

<style scoped></style>
