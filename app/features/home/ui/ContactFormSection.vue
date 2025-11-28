<template>
  <div class="w-full flex flex-col items-center py-[60px] sm:py-[80px]">
    <!-- Pink Form Container -->
    <div
      class="w-full max-w-[1385px] bg-[#D37E91] rounded-[20px] px-[16px] py-[40px] sm:px-[100px] sm:py-[60px] lg:px-[300px] flex flex-col items-center"
    >
      <!-- Logo and Tagline -->
      <div
        class="flex flex-col items-center lg:flex-col lg:items-center lg:gap-[5px] lg:mb-[50px] xl:flex-row xl:items-start xl:gap-[30px] xl:mb-[50px] mb-[40px] w-full"
      >
        <img
          src="/images/general/logo.svg"
          alt="Inothemna Logo"
          class="w-[160px] h-[30px] lg:w-[220px] lg:h-[40px] object-contain flex-shrink-0"
        />

        <p
          class="text-[#66033C] font-shantell font-normal text-[18px] leading-[18px] text-center lg:text-[24px] lg:leading-[30px] lg:text-center whitespace-normal xl:text-[32px] xl:leading-[55px] xl:text-right xl:whitespace-nowrap"
        >
          — присвяти годину навчання собі
        </p>
      </div>

      <!-- Form Inputs -->
      <div class="flex flex-col gap-[20px] w-full max-w-[640px] mb-[32px]">
        <!-- Name Input -->
        <input
          type="text"
          placeholder="Ім'я"
          class="w-full h-[70px] rounded-[32px] px-[32px] py-[24px] text-[#66033C] font-outfit font-normal text-[18px] leading-[20px] tracking-[-0.02em] placeholder:opacity-50 placeholder:text-[#66033C] focus:outline-none focus:ring-2 focus:ring-[#66033C]/30"
        />

        <!-- Phone Input -->
        <input
          type="tel"
          placeholder="Телефон"
          class="w-full h-[70px] rounded-[32px] px-[32px] py-[24px] text-[#66033C] font-outfit font-normal text-[18px] leading-[20px] tracking-[-0.02em] placeholder:opacity-50 placeholder:text-[#66033C] focus:outline-none focus:ring-2 focus:ring-[#66033C]/30"
        />

        <!-- Email Input -->
        <input
          type="email"
          placeholder="Пошта"
          class="w-full h-[70px] rounded-[32px] px-[32px] py-[24px] text-[#66033C] font-outfit font-normal text-[18px] leading-[20px] tracking-[-0.02em] placeholder:opacity-50 placeholder:text-[#66033C] focus:outline-none focus:ring-2 focus:ring-[#66033C]/30"
        />
      </div>

      <!-- Contact Method Selection -->
      <div
        class="flex flex-col sm:flex-row sm:items-center items-start w-full max-w-[640px] mb-[40px] gap-[20px] sm:gap-[32px]"
      >
        <p
          class="text-[#66033C] font-outfit font-semibold text-[14px] sm:text-[18px] leading-[100%]"
        >
          Як з вами зв'язатись?
        </p>

        <div class="flex items-center gap-[20px] sm:gap-[32px]">
          <!-- Написати Button -->
          <button
            @click="contactMethod = 'write'"
            class="flex items-center gap-[12px] px-[20px] py-[10px] rounded-[20px] transition-all duration-300"
            :class="
              contactMethod === 'write' ? 'bg-[#66033C]/10' : 'bg-transparent'
            "
          >
            <div
              class="w-[24px] h-[24px] rounded-full border-2 border-[#66033C] bg-white flex items-center justify-center"
            >
              <img
                v-if="contactMethod === 'write'"
                src="/images/icons/check-mark.svg"
                alt="Check"
                class="w-[14px] h-[14px]"
              />
            </div>
            <span
              class="text-[#66033C] font-outfit font-medium text-[16px] sm:text-[18px] leading-[100%]"
            >
              Написати
            </span>
          </button>

          <!-- Подзвонити Button -->
          <button
            @click="contactMethod = 'call'"
            class="flex items-center gap-[12px] px-[20px] py-[10px] rounded-[20px] transition-all duration-300"
            :class="
              contactMethod === 'call' ? 'bg-[#66033C]/10' : 'bg-transparent'
            "
          >
            <div
              class="w-[24px] h-[24px] rounded-full border-2 border-[#66033C] bg-white flex items-center justify-center"
            >
              <img
                v-if="contactMethod === 'call'"
                src="/images/icons/check-mark.svg"
                alt="Check"
                class="w-[14px] h-[14px]"
              />
            </div>
            <span
              class="text-[#66033C] font-outfit font-medium text-[16px] sm:text-[18px] leading-[100%]"
            >
              Подзвонити
            </span>
          </button>
        </div>
      </div>

      <!-- Submit Button -->
      <button
        class="w-full max-w-[640px] h-[70px] bg-[#66033C] rounded-[37px] px-[30px] py-[12px] text-[#FFF0E1] font-outfit font-bold text-[20px] sm:text-[22.54px] leading-[100%] hover:bg-[#66033C]/90 transition-all duration-300"
      >
        Залишити заявку
      </button>
    </div>

    <!-- Questions Section -->
    <div
      class="flex flex-col sm:flex-row items-center justify-center gap-[20px] sm:gap-[70px] mt-[40px] sm:mt-[60px] px-[20px]"
    >
      <!-- Text -->
      <h3
        class="text-[#66033C] font-outfit font-bold text-[18px] leading-[20px] sm:text-[40px] sm:leading-[80px] text-center"
      >
        Залишились питання? Напиши нам
      </h3>

      <!-- Social Media Buttons -->
      <div class="flex items-center gap-[32px]">
        <!-- Telegram Button -->
        <a
          href="#"
          class="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-[#66033C] rounded-[15px] p-[18px] flex items-center justify-center hover:bg-[#66033C]/90 transition-all duration-300"
          aria-label="Telegram"
        >
          <img
            src="/images/icons/social3.svg"
            alt="Telegram"
            class="w-full h-full object-contain"
          />
        </a>

        <!-- Instagram Button -->
        <a
          href="#"
          class="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-[#66033C] rounded-[15px] p-[18px] flex items-center justify-center hover:bg-[#66033C]/90 transition-all duration-300"
          aria-label="Instagram"
        >
          <img
            src="/images/icons/social2.svg"
            alt="Instagram"
            class="w-full h-full object-contain"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const contactMethod = ref<'write' | 'call' | null>(null);
</script>

<style scoped></style>
