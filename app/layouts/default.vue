<template>
    <div class="flex flex-col min-h-screen bg-[#FFF0E1]">
        <Header />

        <main class="flex-grow">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '~/features/layout/ui/Header.vue';
import Footer from '~/features/layout/ui/Footer.vue';
</script>

<style scoped></style>
