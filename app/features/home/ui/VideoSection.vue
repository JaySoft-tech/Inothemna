<template>
    <div class="w-full  overflow-hidden bg-[#FFF0E1]">
        <div class="w-full max-w-[2000px] mx-auto">
            <!-- Desktop Layout (від 1280px+) -->
            <div
                class="hidden xl:flex items-center justify-between gap-[30px] md:gap-[50px] lg:gap-[80px] pr-[20px] md:pr-[40px] lg:pr-[80px]"
            >
                <!-- Left Side -->
                <div
                    class="flex items-center gap-[30px] md:gap-[50px] lg:gap-[80px] flex-shrink-0"
                >
                    <img
                        src="/images/icons/video.svg"
                        alt="Video"
                        class="w-[250px] h-[257px] sm:w-[280px] sm:h-[287px] md:w-[330px] md:h-[339px] lg:w-[380px] lg:h-[390px] object-contain ml-[-80px] sm:ml-[-90px] md:ml-[-110px] lg:ml-[-130px] transition-all duration-300 flex-shrink-0"
                    />

                    <div
                        class="flex flex-col items-start gap-[12px] sm:gap-[15px] md:gap-[18px] lg:gap-[20px] max-w-[220px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px]"
                    >
                        <h2
                            class="text-[#66033C] font-outfit font-bold text-[30px] leading-[38px] sm:text-[40px] sm:leading-[52px] md:text-[50px] md:leading-[66px] lg:text-[60px] lg:leading-[80px] uppercase text-left transition-all duration-300 whitespace-nowrap translate-x-[-100px]"
                        >
                            як працює
                        </h2>

                        <img
                            src="/images/general/logo.svg"
                            alt="Logo"
                            class="w-[180px] h-[30px] sm:w-[220px] sm:h-[37px] md:w-[280px] md:h-[47px] lg:w-[355px] lg:h-[60px] object-contain transition-all duration-300"
                        />

                        <p
                            class="text-[#66033C] font-outfit font-medium text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] leading-[120%] text-left transition-all duration-300 max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px]"
                        >
                            (поглянь за куліси, а <br />точніше переглянь відео)
                        </p>
                    </div>
                </div>

                <!-- Right Side: Preview -->
                <div
                    class="relative flex-1 max-w-[600px] md:max-w-[800px] lg:max-w-[1080px]"
                >
                    <img
                        src="/images/general/preview.png"
                        alt="Video Preview"
                        class="w-full h-auto rounded-[20px] md:rounded-[25px] lg:rounded-[30px] object-cover transition-all duration-300"
                    />

<<<<<<< HEAD
                    <button
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[136px] lg:h-[136px] hover:scale-110 transition-all duration-300"
                        @click="playVideo"
                    >
                        <img
                            src="/images/icons/player.svg"
                            alt="Play"
                            class="w-full h-full object-contain"
                        />
                    </button>
                </div>
=======
      <!-- Mobile + Tablet Layout (до 1280px) -->
      <div class="xl:hidden flex flex-col gap-[30px]">
        <!-- Top Section -->
        <div class="flex items-start justify-between px-[10px]">
          <img
            src="/images/icons/video.svg"
            alt="Video"
            class="w-[160px] h-[164px] xs:w-[180px] xs:h-[184px] object-contain ml-[-46px] flex-shrink-0"
          />

          <div
            class="flex flex-col items-center gap-[12px] flex-1 px-[10px] mx-auto text-end"
          >
            <h2
              class="text-[#66033C] font-outfit font-bold text-[24px] leading-[32px] xs:text-[28px] xs:leading-[36px] md:text-[32px] md:leading-[42px] uppercase transform translate-x-[-66px]"
            >
              як працює
            </h2>

            <img
              src="/images/general/logo.svg"
              alt="Logo"
              class="w-[150px] h-[24px] xs:w-[170px] xs:h-[28px] md:w-[200px] md:h-[34px] object-contain"
            />

            <p
              class="text-[#66033C] font-outfit font-medium text-[14px] xs:text-[15px] md:text-[17px] leading-[130%] max-w-[230px] mx-auto"
            >
              (поглянь за куліси, а <br />точніше переглянь відео)
            </p>
          </div>
        </div>

        <!-- Video Slider -->
        <div class="flex flex-col gap-[30px] px-[20px]">
          <div class="relative w-full max-w-[450px] mx-auto">
            <transition name="fade-zoom" mode="out-in">
              <img
                :key="currentVideo"
                :src="videos[currentVideo]!.preview"
                alt="Video Preview"
                class="w-full h-auto rounded-[20px] object-cover"
              />
            </transition>

            <button
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] xs:w-[80px] xs:h-[80px] hover:scale-110 transition-all duration-300"
              @click="playVideo"
            >
              <img
                src="/images/icons/player.svg"
                alt="Play"
                class="w-full h-full object-contain"
              />
            </button>
          </div>

          <div class="flex flex-col items-center gap-[20px]">
            <div class="flex items-center gap-[12px]">
              <div
                v-for="(_, index) in videos"
                :key="`video-indicator-${index}`"
                class="w-[68px] h-[8px] rounded-[4px] transition-all duration-300 cursor-pointer"
                :class="
                  index === currentVideo ? 'bg-[#66033C]' : 'bg-[#D37E91]'
                "
                @click="currentVideo = index"
              ></div>
>>>>>>> 9f314f341b88df7c4ff970d8637e92345eedada8
            </div>

            <!-- Mobile + Tablet Layout (до 1280px) -->
            <div class="xl:hidden flex flex-col gap-[30px]">
                <!-- Top Section -->
                <div class="flex items-start justify-between px-[10px]">
                    <img
                        src="/images/icons/video.svg"
                        alt="Video"
                        class="w-[160px] h-[164px] xs:w-[180px] xs:h-[184px] object-contain ml-[-46px] flex-shrink-0"
                    />

                    <div
                        class="flex flex-col items-center gap-[12px] flex-1 px-[10px] mx-auto text-end"
                    >
                        <h2
                            class="text-[#66033C] font-outfit font-bold text-[24px] leading-[32px] xs:text-[28px] xs:leading-[36px] md:text-[32px] md:leading-[42px] uppercase transform translate-x-[-66px]"
                        >
                            як працює
                        </h2>

                        <img
                            src="/images/general/logo.svg"
                            alt="Logo"
                            class="w-[150px] h-[24px] xs:w-[170px] xs:h-[28px] md:w-[200px] md:h-[34px] object-contain"
                        />

                        <p
                            class="text-[#66033C] font-outfit font-medium text-[14px] xs:text-[15px] md:text-[17px] leading-[130%] max-w-[230px] mx-auto"
                        >
                            (поглянь за куліси, а <br />точніше переглянь відео)
                        </p>
                    </div>
                </div>

                <!-- Video Slider -->
                <div class="flex flex-col gap-[30px] px-[20px]">
                    <div class="relative w-full max-w-[450px] mx-auto">
                        <img
                            :src="videos[currentVideo]!.preview"
                            alt="Video Preview"
                            class="w-full h-auto rounded-[20px] object-cover"
                        />

                        <button
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] xs:w-[80px] xs:h-[80px] hover:scale-110 transition-all duration-300"
                            @click="playVideo"
                        >
                            <img
                                src="/images/icons/player.svg"
                                alt="Play"
                                class="w-full h-full object-contain"
                            />
                        </button>
                    </div>

                    <div class="flex flex-col items-center gap-[20px]">
                        <div class="flex items-center gap-[12px]">
                            <div
                                v-for="(_, index) in videos"
                                :key="`video-indicator-${index}`"
                                class="w-[68px] h-[8px] rounded-[4px] transition-all duration-300 cursor-pointer"
                                :class="
                                    index === currentVideo
                                        ? 'bg-[#66033C]'
                                        : 'bg-[#D37E91]'
                                "
                                @click="currentVideo = index"
                            ></div>
                        </div>

                        <div class="flex items-center gap-[10px]">
                            <button
                                @click="previousVideo"
                                class="w-[80px] h-[80px] flex items-center justify-center hover:opacity-80 transition-all duration-300"
                            >
                                <img
                                    src="/images/general/red-arrow.svg"
                                    alt="Previous"
                                    class="w-full h-full object-contain"
                                />
                            </button>
                            <button
                                @click="nextVideo"
                                class="w-[80px] h-[80px] flex items-center justify-center hover:opacity-80 transition-all duration-300"
                            >
                                <img
                                    src="/images/general/rose-arrow.svg"
                                    alt="Next"
                                    class="w-full h-full object-contain"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Video {
    preview: string;
    url: string;
}

const videos = ref<Video[]>([
    {
        preview: '/images/general/preview.png',
        url: 'https://www.youtube.com/watch?v=example1',
    },
    {
        preview: '/images/general/preview.png',
        url: 'https://www.youtube.com/watch?v=example2',
    },
    {
        preview: '/images/general/preview.png',
        url: 'https://www.youtube.com/watch?v=example3',
    },
    {
        preview: '/images/general/preview.png',
        url: 'https://www.youtube.com/watch?v=example4',
    },
]);

const currentVideo = ref(0);

const nextVideo = () => {
    currentVideo.value = (currentVideo.value + 1) % videos.value.length;
};

const previousVideo = () => {
    currentVideo.value =
        currentVideo.value === 0
            ? videos.value.length - 1
            : currentVideo.value - 1;
};

const playVideo = () => {
    window.open(videos.value[currentVideo.value]!.url, '_blank');
};
</script>

<style scoped>
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: all 0.35s ease;
}

.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.96);
}

.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
</style>
