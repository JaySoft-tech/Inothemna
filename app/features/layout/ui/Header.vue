<template>
    <header
        class="w-full max-w-[420px] max-sm:mx-auto sm:max-w-[1800px] py-[25px] sm:py-[80px] px-[20px] sm:px-[60px] flex items-center justify-between"
    >
        <!-- logo image -->
        <img
            class="object-contain max-w-[150px] sm:max-w-[355px]"
            src="/images/general/logo.svg"
            alt="Inothemna лого"
        />

        <!-- social medias -->
        <div
            class="max-w-[168px] w-full flex items-center justify-end gap-[18px] sm:gap-[24px]"
        >
            <div class="w-[24px] h-[24px]" v-for="item in socialMedias">
                <a :href="item.link">
                    <img
                        class="h-full w-full object-contain"
                        :src="item.imageUrl"
                        :alt="item.imageAlt"
                    />
                </a>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const socialMedias = [
    {
        imageUrl: '/images/icons/facebook.svg',
        imageAlt: 'facebook',
        link: '#',
    },
    {
        imageUrl: '/images/icons/twitter.svg',
        imageAlt: 'twitter',
        link: '#',
    },
    {
        imageUrl: '/images/icons/instagram.svg',
        imageAlt: 'instagram',
        link: '#',
    },
    {
        imageUrl: '/images/icons/telegram.svg',
        imageAlt: 'telegram',
        link: '#',
    },
];
</script>

<style scoped></style>
