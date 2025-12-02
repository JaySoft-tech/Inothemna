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

    <div class="mt-[30px] sm:mt-[70px] px-[10px]">
      <ComfortableLearning />
    </div>

    <div class="mt-[00px] sm:mt-[0px] px-[10px]">
      <PricesSection />
    </div>

    <LoopText
      marquee-text="the the the the the the the the the "
      :speed="1"
      :curve-amount="0"
      direction="right"
      :interactive="false"
      class-name="!text-[#66033C] text-xl "
    />

    <div class="mt-[00px] sm:mt-[0px] px-[10px]">
      <RoadmapSection />
    </div>

    <div class="mt-[00px] sm:mt-[0px] px-[10px]">
      <ActivitiesSection />
    </div>

    <div class="mt-[00px] sm:mt-[0px] px-[10px]">
      <VideoSection />
    </div>

    <div class="mt-[00px] sm:mt-[0px] px-[10px]">
      <TeacherSection />
    </div>

    <div class="mt-[00px] sm:mt-[0px] px-[10px]">
      <ReviewsSction />
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
import LoopText from '~/components/LoopText.vue';
import RoadmapSection from '~/features/home/ui/RoadmapSection.vue';
import ActivitiesSection from '~/features/home/ui/ActivitiesSection.vue';
import ReviewsSction from '~/features/home/ui/ReviewsSction.vue';
import TeacherSection from '~/features/home/ui/TeacherSection.vue';
import VideoSection from '~/features/home/ui/VideoSection.vue';
</script>

<style scoped></style>
