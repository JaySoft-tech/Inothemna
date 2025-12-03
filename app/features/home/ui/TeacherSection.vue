<template>
  <div class="w-full flex justify-center py-[60px] sm:py-[80px] px-[20px]">
    <div class="w-full max-w-[1800px] flex flex-col gap-[40px]">
      <h2
        class="text-[#66033C] font-outfit font-bold text-[25px] leading-[36.17px] sm:text-[40px] sm:leading-[52px] md:text-[50px] md:leading-[66px] lg:text-[60px] lg:leading-[80px] uppercase text-left pl-[50px] transition-all duration-300"
      >
        Це наші
        <img
          src="/images/icons/red-the.svg"
          alt="the"
          class="inline-block w-[50px] h-[24px] sm:w-[90px] sm:h-[44px] lg:w-[124px] lg:h-[60px] object-contain align-text-top sm:mt-[5px] mx-[8px]"
        />
        тічерс:
      </h2>

      <div
        class="flex flex-row gap-[20px] sm:gap-[30px] lg:gap-[40px] items-center sm:items-start justify-center"
      >
        <TransitionGroup
          name="list"
          tag="div"
          class="hidden sm:flex flex-row gap-[20px] sm:gap-[30px] lg:gap-[40px]"
        >
          <div
            v-for="(teacher, index) in getVisibleTeachers()"
            :key="teacher!.name"
            class="relative group cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
            @click="toggleTeacherInfo(getTeacherIndex(index))"
          >
            <div
              class="relative w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[480px] rounded-[20px] overflow-hidden transition-all duration-300"
            >
              <img
                :src="teacher!.image"
                :alt="teacher!.name"
                class="w-full h-full object-cover transition-all duration-500 ease-in-out"
                :class="{
                  'opacity-0 scale-105': openTeacher === getTeacherIndex(index),
                }"
              />

              <div
                class="absolute inset-0 bg-[#D37E91] opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
              ></div>

              <div
                v-show="openTeacher !== getTeacherIndex(index)"
                class="absolute bottom-[20px] right-[20px] text-[#66033C] font-shantell font-medium text-[18px] md:text-[24px] lg:text-[32.25px] leading-[100%] z-10 transition-opacity duration-300"
              >
                {{ teacher!.name }}
              </div>

              <transition name="fade-bg">
                <div
                  v-if="openTeacher === getTeacherIndex(index)"
                  class="absolute inset-0 bg-[#D37E91] z-[5]"
                ></div>
              </transition>

              <transition name="teacher-info">
                <div
                  v-if="openTeacher === getTeacherIndex(index)"
                  class="absolute inset-0 p-[20px] md:p-[28px] lg:p-[32px] flex flex-col text-[#FFF0E1] z-10"
                >
                  <h3
                    class="font-shantell font-medium text-[18px] md:text-[24px] lg:text-[32.25px] mb-[8px]"
                  >
                    {{ teacher!.name }}
                  </h3>
                  <p
                    class="font-outfit font-semibold text-[11px] md:text-[14px] lg:text-[17.41px] mb-[16px]"
                  >
                    {{ teacher!.experience }}
                  </p>
                  <p
                    class="font-outfit font-normal text-[11px] md:text-[14px] lg:text-[17.41px] leading-[140%] overflow-y-auto scrollbar-hide"
                  >
                    {{ teacher!.description }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </TransitionGroup>

        <TransitionGroup
          name="list"
          tag="div"
          class="sm:hidden flex flex-row gap-[20px]"
        >
          <div
            v-for="(teacher, index) in getVisibleTeachersMobile()"
            :key="teacher!.name"
            class="relative cursor-pointer transition-all duration-300"
          >
            <div
              class="relative w-[165px] h-[220px] rounded-[20px] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              @click="toggleTeacherInfo(getTeacherIndexMobile(index))"
            >
              <img
                :src="teacher!.imageMobile"
                :alt="teacher!.name"
                class="w-full h-full object-cover transition-all duration-500 ease-in-out"
                :class="{
                  'opacity-0 scale-105':
                    openTeacher === getTeacherIndexMobile(index),
                }"
              />

              <button
                v-show="openTeacher !== getTeacherIndexMobile(index)"
                class="absolute top-[4px] left-[4px] w-[26px] h-[26px] bg-[#D37E91] rounded-[8px] flex items-center justify-center transition-opacity duration-300 z-10"
              >
                <img
                  src="/images/icons/right-arrow.svg"
                  class="w-[14px] h-[14px]"
                />
              </button>

              <transition name="fade">
                <button
                  v-if="openTeacher === getTeacherIndexMobile(index)"
                  class="absolute top-[4px] left-[4px] w-[26px] h-[26px] bg-[#FFF0E1] rounded-[8px] flex items-center justify-center z-20"
                  @click.stop="openTeacher = null"
                >
                  ✕
                </button>
              </transition>

              <transition name="fade-bg">
                <div
                  v-if="openTeacher === getTeacherIndexMobile(index)"
                  class="absolute inset-0 bg-[#D37E91] z-[5]"
                ></div>
              </transition>

              <transition name="teacher-info">
                <div
                  v-if="openTeacher === getTeacherIndexMobile(index)"
                  class="absolute inset-0 p-[14px] pt-[45px] flex flex-col text-[#FFF0E1] z-10"
                >
                  <h3 class="font-shantell font-medium text-[15px] mb-[6px]">
                    {{ teacher!.name }}
                  </h3>
                  <p class="font-outfit font-semibold text-[9px] mb-[10px]">
                    {{ teacher!.experience }}
                  </p>
                  <p
                    class="font-outfit font-normal text-[9px] leading-[140%] overflow-y-auto scrollbar-hide flex-1"
                  >
                    {{ teacher!.description }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <div
        class="flex flex-col sm:flex-row justify-between items-center gap-[30px] sm:gap-[40px]"
      >
        <div class="flex items-center gap-[10px] order-2 sm:order-1">
          <button
            @click="previousTeacher"
            class="w-[80px] h-[80px] hover:opacity-80 transition"
          >
            <img src="/images/general/red-arrow.svg" />
          </button>
          <button
            @click="nextTeacher"
            class="w-[80px] h-[80px] hover:opacity-80 transition"
          >
            <img src="/images/general/rose-arrow.svg" />
          </button>
        </div>

        <div class="flex items-center gap-[12px] order-1 sm:order-2">
          <div
            v-for="(_, index) in teachers"
            :key="index"
            class="w-[68px] h-[8px] rounded-[4px] transition-all duration-300 cursor-pointer"
            :class="isActiveSlide(index) ? 'bg-[#66033C]' : 'bg-[#D37E91]'"
            @click="goToSlide(index)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Teacher {
  name: string;
  experience: string;
  description: string;
  image: string;
  imageMobile: string;
}

const teachers = ref<Teacher[]>([
  {
    name: 'Олеся',
    experience: '6 років викладання',
    description:
      'Олеся — талановита викладачка англійської мови в нашій онлайн-школі. Вона поєднує сучасні методики, дружню атмосферу та індивідуальний підхід до кожного студента. Її уроки наповнені практикою й мотивацією, а результати відчутні вже після перших занять. Вона вміє підтримати, надихнути й пояснити складне просто тому навчання стає зручним для учнів усіх рівнів.',
    image: '/images/general/Mask-group.png',
    imageMobile: '/images/general/teacher.png',
  },
  {
    name: 'Іван',
    experience: '5 років викладання',
    description:
      'Іван — досвідчений викладач англійської мови, який спеціалізується на бізнес-англійській та підготовці до міжнародних іспитів. Він використовує інтерактивні методи навчання та створює комфортну атмосферу на уроках. Студенти цінують його за професіоналізм, терпіння та вміння пояснювати складні граматичні конструкції простою мовою.',
    image: '/images/general/Mask-group-1.png',
    imageMobile: '/images/general/teacher1.png',
  },
  {
    name: 'Марія',
    experience: '7 років викладання',
    description:
      'Марія — ентузіастка з багаторічним досвідом викладання англійської для дітей та підлітків. Вона створює захоплюючі уроки, що поєднують навчання з грою та цікавими активностями. Марія вміє знаходити підхід до кожної дитини, розвиваючи не лише мовні навички, але й впевненість у спілкуванні англійською.',
    image: '/images/general/Mask-group-2.png',
    imageMobile: '/images/general/teacher.png',
  },
  {
    name: 'Андрій',
    experience: '4 роки викладання',
    description:
      'Андрій — молодий та енергійний викладач, який спеціалізується на розмовній англійській та підготовці до подорожей. Він використовує сучасні технології та актуальні матеріали, щоб зробити навчання цікавим та ефективним. Студенти відзначають його креативний підхід та здатність мотивувати до досягнення цілей.',
    image: '/images/general/Mask-group.png',
    imageMobile: '/images/general/teacher1.png',
  },
]);

const currentSlide = ref(0);
const openTeacher = ref<number | null>(null);

const nextTeacher = () => {
  openTeacher.value = null;
  currentSlide.value = (currentSlide.value + 1) % teachers.value.length;
};

const previousTeacher = () => {
  openTeacher.value = null;
  currentSlide.value =
    currentSlide.value === 0
      ? teachers.value.length - 1
      : currentSlide.value - 1;
};

const goToSlide = (index: number) => {
  openTeacher.value = null;
  currentSlide.value = index;
};

const isActiveSlide = (index: number) => {
  return currentSlide.value === index;
};

const getVisibleTeachers = () => {
  return Array.from(
    { length: 4 },
    (_, i) => teachers.value[(currentSlide.value + i) % teachers.value.length]
  );
};

const getVisibleTeachersMobile = () => {
  return Array.from(
    { length: 2 },
    (_, i) => teachers.value[(currentSlide.value + i) % teachers.value.length]
  );
};

const getTeacherIndex = (visibleIndex: number) =>
  (currentSlide.value + visibleIndex) % teachers.value.length;

const getTeacherIndexMobile = getTeacherIndex;

const toggleTeacherInfo = (index: number) => {
  openTeacher.value = openTeacher.value === index ? null : index;
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Fade Background */
.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}
.fade-bg-enter-active,
.fade-bg-leave-active {
  transition: opacity 0.3s ease;
}
.fade-bg-enter-to,
.fade-bg-leave-from {
  opacity: 1;
}

/* Teacher Info Animation */
.teacher-info-enter-from,
.teacher-info-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.teacher-info-enter-active,
.teacher-info-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.teacher-info-enter-to,
.teacher-info-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-active {
  position: absolute;
  opacity: 0;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
</style>
