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
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/features/home/ui/HeroSection.vue';
import AudienceSection from '~/features/home/ui/AudienceSection.vue';
</script>

<style scoped></style>
