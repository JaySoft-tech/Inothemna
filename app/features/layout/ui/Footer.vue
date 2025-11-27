<template>
  <footer class="w-full bg-[#66033C] px-[80px] md:px-[60px] py-[60px]">
    <div class="max-w-[1800px] mx-auto">
      <div
        class="flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-[100px] mb-[60px]"
      >
        <div class="flex flex-col gap-[30px]">
          <div class="mb-[20px]">
            <img
              src="/images/general/WhiteLogo.svg"
              alt="Inothema Logo"
              class="h-[60px] sm:h-[80px] object-contain"
            />
          </div>

          <div class="flex items-center gap-[12px]">
            <img src="/images/icons/telephone.svg" class="w-[24px] h-[24px]" />
            <a href="tel:+380000000000" class="text-[#FFF0E1] text-[18px]">
              +380 (000) 00 00 00
            </a>
          </div>

          <div class="flex items-center gap-[12px]">
            <img src="/images/icons/email.svg" class="w-[24px] h-[24px]" />
            <a
              href="mailto:info_inothemna@gamil.com"
              class="text-[#FFF0E1] text-[18px]"
            >
              info_inothemna@gamil.com
            </a>
          </div>

          <div class="hidden md:flex items-center gap-[12px]">
            <img src="/images/icons/house.svg" class="w-[24px] h-[24px]" />
            <span class="text-[#FFF0E1] text-[18px]">місто .......</span>
          </div>

          <div class="hidden md:flex items-center gap-[16px] mt-[10px]">
            <img src="/images/icons/social.svg" class="w-[24px] h-[24px]" />
            <img src="/images/icons/social1.svg" class="w-[24px] h-[24px]" />
            <img src="/images/icons/social2.svg" class="w-[24px] h-[24px]" />
            <img src="/images/icons/social3.svg" class="w-[24px] h-[24px]" />
          </div>
        </div>

        <div class="hidden md:flex flex-row gap-[40px] lg:gap-[235px]">
          <div class="flex flex-col gap-[20px]">
            <h3 class="text-[#FFF0E1] text-[20px] font-semibold">Курси</h3>
          </div>

          <div class="flex flex-col gap-[20px]">
            <h3 class="text-[#FFF0E1] text-[20px] font-semibold">Компанія</h3>
          </div>

          <div class="flex flex-col gap-[20px]">
            <h3 class="text-[#FFF0E1] text-[20px] font-semibold">Ресурси</h3>
          </div>
        </div>
      </div>

      <div class="w-full h-[1px] bg-[#FFF0E1]/30 mb-[60px]"></div>

      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-[20px]"
      >
        <div class="flex flex-col gap-[10px]">
          <p class="text-[#FFF0E1] text-[12px]">
            © Inothema Academy. Всі права захищені
          </p>

          <p class="text-[#FFF0E1] text-[12px] block md:hidden">
            ФОП ГУТНІЧЕНКО НАСТЯ СЕРГІЇВНА
          </p>
        </div>

        <div class="flex flex-wrap gap-[25px]">
          <a href="#" class="text-[#FFF0E1] text-[12px] hover:opacity-80"
            >Політика конфіденційності</a
          >
          <a href="#" class="text-[#FFF0E1] text-[12px] hover:opacity-80"
            >Умови використання</a
          >
          <a href="#" class="text-[#FFF0E1] text-[12px] hover:opacity-80"
            >Публічна оферта</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
