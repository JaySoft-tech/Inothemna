<template>
  <div class="w-full flex justify-center py-[60px] sm:py-[80px] px-[20px]">
    <div class="w-full max-w-[1600px] flex flex-col gap-[24px] sm:gap-[40px]">
      <!-- Title -->
      <h2
        class="text-[#66033C] font-outfit font-bold text-[20px] leading-[24px] sm:text-[40px] sm:leading-[52px] md:text-[50px] md:leading-[65px] lg:text-[60px] lg:leading-[80px] uppercase text-left transition-all duration-300"
      >
        Якщо у вас лишились questions:
      </h2>

      <!-- The Answers Image -->
      <div class="flex justify-start mb-[20px]">
        <img
          src="/images/icons/theAnswers.svg"
          alt="The Answers"
          class="w-[250px] h-[15px] sm:w-[400px] sm:h-[24px] md:w-[520px] md:h-[31px] lg:w-[634px] lg:h-[38px] object-contain transition-all duration-300"
        />
      </div>

      <!-- FAQ Items -->
      <div class="flex flex-col gap-[20px] sm:gap-[30px]">
        <!-- FAQ Item 1 -->
        <div class="border-b border-[#66033C]/30 pb-[20px] sm:pb-[30px]">
          <button
            @click="toggleFAQ(0)"
            class="w-full flex items-start gap-[42px] sm:gap-[70px] md:gap-[90px] lg:gap-[110px] text-left group"
          >
            <!-- Icon -->
            <div
              class="flex-shrink-0 w-[34px] h-[34px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center transition-all duration-300"
            >
              <transition name="icon-rotate" mode="out-in">
                <img
                  v-if="openFAQ === 0"
                  key="minus"
                  src="/images/icons/minus.svg"
                  alt="Minus"
                  class="w-full h-full object-contain"
                />
                <img
                  v-else
                  key="plus"
                  src="/images/icons/plus.svg"
                  alt="Plus"
                  class="w-full h-full object-contain"
                />
              </transition>
            </div>

            <!-- Question -->
            <div class="flex-1">
              <h3
                class="text-[#66033C] font-shantell font-normal text-[16px] leading-[20px] sm:text-[28px] sm:leading-[50px] md:text-[36px] md:leading-[68px] lg:text-[45px] lg:leading-[86px] text-left transition-all duration-300"
              >
                Який формат навчання ви пропонуєте?
              </h3>

              <!-- Answer -->
              <transition name="faq-expand">
                <div
                  v-if="openFAQ === 0"
                  class="mt-[15px] sm:mt-[20px] text-[#66033C] font-outfit font-normal text-[12px] leading-[100%] sm:text-[16px] md:text-[18px] lg:text-[20px] lg:leading-[100%] transition-all duration-300 overflow-hidden"
                >
                  Ми пропонуємо індивідуальні та групові заняття онлайн. Кожен
                  урок адаптується під ваші потреби та рівень знань.
                </div>
              </transition>
            </div>
          </button>
        </div>

        <!-- FAQ Item 2 -->
        <div class="border-b border-[#66033C]/30 pb-[20px] sm:pb-[30px]">
          <button
            @click="toggleFAQ(1)"
            class="w-full flex items-start gap-[42px] sm:gap-[70px] md:gap-[90px] lg:gap-[110px] text-left group"
          >
            <!-- Icon -->
            <div
              class="flex-shrink-0 w-[34px] h-[34px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center transition-all duration-300"
            >
              <transition name="icon-rotate" mode="out-in">
                <img
                  v-if="openFAQ === 1"
                  key="minus"
                  src="/images/icons/minus.svg"
                  alt="Minus"
                  class="w-full h-full object-contain"
                />
                <img
                  v-else
                  key="plus"
                  src="/images/icons/plus.svg"
                  alt="Plus"
                  class="w-full h-full object-contain"
                />
              </transition>
            </div>

            <!-- Question -->
            <div class="flex-1">
              <h3
                class="text-[#66033C] font-shantell font-normal text-[16px] leading-[20px] sm:text-[28px] sm:leading-[50px] md:text-[36px] md:leading-[68px] lg:text-[45px] lg:leading-[86px] text-left transition-all duration-300"
              >
                Чи можна змінити графік занять?
              </h3>

              <!-- Answer -->
              <transition name="faq-expand">
                <div
                  v-if="openFAQ === 1"
                  class="mt-[15px] sm:mt-[20px] text-[#66033C] font-outfit font-normal text-[12px] leading-[100%] sm:text-[16px] md:text-[18px] lg:text-[20px] lg:leading-[100%] transition-all duration-300 overflow-hidden"
                >
                  Так, за потреби ви можете узгодити зміну графіка або перейти
                  до іншої групи. Ми завжди намагаємося зробити навчання
                  максимально зручним для вас.
                </div>
              </transition>
            </div>
          </button>
        </div>

        <!-- FAQ Item 3 -->
        <div class="border-b border-[#66033C]/30 pb-[20px] sm:pb-[30px]">
          <button
            @click="toggleFAQ(2)"
            class="w-full flex items-start gap-[42px] sm:gap-[70px] md:gap-[90px] lg:gap-[110px] text-left group"
          >
            <!-- Icon -->
            <div
              class="flex-shrink-0 w-[34px] h-[34px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center transition-all duration-300"
            >
              <transition name="icon-rotate" mode="out-in">
                <img
                  v-if="openFAQ === 2"
                  key="minus"
                  src="/images/icons/minus.svg"
                  alt="Minus"
                  class="w-full h-full object-contain"
                />
                <img
                  v-else
                  key="plus"
                  src="/images/icons/plus.svg"
                  alt="Plus"
                  class="w-full h-full object-contain"
                />
              </transition>
            </div>

            <!-- Question -->
            <div class="flex-1">
              <h3
                class="text-[#66033C] font-shantell font-normal text-[16px] leading-[20px] sm:text-[28px] sm:leading-[50px] md:text-[36px] md:leading-[68px] lg:text-[45px] lg:leading-[86px] text-left transition-all duration-300"
              >
                Чи видаєте ви сертифікат після закінчення курсу?
              </h3>

              <!-- Answer -->
              <transition name="faq-expand">
                <div
                  v-if="openFAQ === 2"
                  class="mt-[15px] sm:mt-[20px] text-[#66033C] font-outfit font-normal text-[12px] leading-[100%] sm:text-[16px] md:text-[18px] lg:text-[20px] lg:leading-[100%] transition-all duration-300 overflow-hidden"
                >
                  Так, після успішного завершення курсу ви отримаєте сертифікат,
                  який підтверджує ваш рівень володіння мовою.
                </div>
              </transition>
            </div>
          </button>
        </div>

        <!-- FAQ Item 4 -->
        <div class="border-b border-[#66033C]/30 pb-[20px] sm:pb-[30px]">
          <button
            @click="toggleFAQ(3)"
            class="w-full flex items-start gap-[42px] sm:gap-[70px] md:gap-[90px] lg:gap-[110px] text-left group"
          >
            <!-- Icon -->
            <div
              class="flex-shrink-0 w-[34px] h-[34px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center transition-all duration-300"
            >
              <transition name="icon-rotate" mode="out-in">
                <img
                  v-if="openFAQ === 3"
                  key="minus"
                  src="/images/icons/minus.svg"
                  alt="Minus"
                  class="w-full h-full object-contain"
                />
                <img
                  v-else
                  key="plus"
                  src="/images/icons/plus.svg"
                  alt="Plus"
                  class="w-full h-full object-contain"
                />
              </transition>
            </div>

            <!-- Question -->
            <div class="flex-1">
              <h3
                class="text-[#66033C] font-shantell font-normal text-[16px] leading-[20px] sm:text-[28px] sm:leading-[50px] md:text-[36px] md:leading-[68px] lg:text-[45px] lg:leading-[86px] text-left transition-all duration-300"
              >
                З якого рівня можна почати навчання?
              </h3>

              <!-- Answer -->
              <transition name="faq-expand">
                <div
                  v-if="openFAQ === 3"
                  class="mt-[15px] sm:mt-[20px] text-[#66033C] font-outfit font-normal text-[12px] leading-[100%] sm:text-[16px] md:text-[18px] lg:text-[20px] lg:leading-[100%] transition-all duration-300 overflow-hidden"
                >
                  Ми приймаємо студентів будь-якого рівня — від повних
                  початківців до тих, хто хоче вдосконалити свої навички.
                </div>
              </transition>
            </div>
          </button>
        </div>

        <!-- FAQ Item 5 -->
        <div class="border-b border-[#66033C]/30 pb-[20px] sm:pb-[30px]">
          <button
            @click="toggleFAQ(4)"
            class="w-full flex items-start gap-[42px] sm:gap-[70px] md:gap-[90px] lg:gap-[110px] text-left group"
          >
            <!-- Icon -->
            <div
              class="flex-shrink-0 w-[34px] h-[34px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center transition-all duration-300"
            >
              <transition name="icon-rotate" mode="out-in">
                <img
                  v-if="openFAQ === 4"
                  key="minus"
                  src="/images/icons/minus.svg"
                  alt="Minus"
                  class="w-full h-full object-contain"
                />
                <img
                  v-else
                  key="plus"
                  src="/images/icons/plus.svg"
                  alt="Plus"
                  class="w-full h-full object-contain"
                />
              </transition>
            </div>

            <!-- Question -->
            <div class="flex-1">
              <h3
                class="text-[#66033C] font-shantell font-normal text-[16px] leading-[20px] sm:text-[28px] sm:leading-[50px] md:text-[36px] md:leading-[68px] lg:text-[45px] lg:leading-[86px] text-left transition-all duration-300"
              >
                Чи можна спробувати заняття безкоштовно?
              </h3>

              <!-- Answer -->
              <transition name="faq-expand">
                <div
                  v-if="openFAQ === 4"
                  class="mt-[15px] sm:mt-[20px] text-[#66033C] font-outfit font-normal text-[12px] leading-[100%] sm:text-[16px] md:text-[18px] lg:text-[20px] lg:leading-[100%] transition-all duration-300 overflow-hidden"
                >
                  Так, ми пропонуємо безкоштовний демо-урок, на якому ви зможете
                  познайомитися з викладачем і методикою навчання.
                </div>
              </transition>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openFAQ = ref<number | null>(null);

const toggleFAQ = (index: number) => {
  openFAQ.value = openFAQ.value === index ? null : index;
};
</script>

<style scoped>
.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: all 0.4s ease;
  max-height: 500px;
  opacity: 1;
}

.faq-expand-enter-from,
.faq-expand-leave-to {
  max-height: 0;
  opacity: 0;
  margin-top: 0;
}

.icon-rotate-enter-active,
.icon-rotate-leave-active {
  transition: all 0.3s ease;
}

.icon-rotate-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.icon-rotate-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

.icon-rotate-enter-to,
.icon-rotate-leave-from {
  opacity: 1;
  transform: rotate(0) scale(1);
}
</style>
