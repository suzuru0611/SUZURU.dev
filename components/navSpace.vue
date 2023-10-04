<template>
    <div class="h-[10vh] flex justify-between items-center pt-[2rem] xl:pt-0 mx-2rem md:mx-5rem">
        <div>
            <NuxtLink to="/">
                <img class=" w-[12rem] " src="../assets/icon.png" />
            </NuxtLink>
        </div>
        <ul class="justify-between w-[20rem] text-2xl hidden xl:flex">
            <NuxtLink to="/about" class="text-black no-underline hover:underline underline-offset-4">
                <p>About</p>
            </NuxtLink>
            <NuxtLink to="/works" class="text-black no-underline hover:underline underline-offset-4 ">
                <p>Works</p>
            </NuxtLink>
            <NuxtLink to="/contact" class="text-black no-underline hover:underline underline-offset-4">
                <p>Contact</p>
            </NuxtLink>
        </ul>
        <div class="flex flex-col xl:hidden">
            <transition name="fade">
                <div @click="toggleMobileMenu" class="p-4 space-y-2 bg-gray-900 rounded shadow ">
                    <span class="block w-8 h-0.5 bg-gray-100 "></span>
                    <span class="block w-8 h-0.5 bg-gray-100 "></span>
                    <span class="block w-8 h-0.5 bg-gray-100 "></span>
                </div>
            </transition>
        </div>
    </div>
    <div>
        <transition name="fade">
            <div v-show="showMobileMenu"
                class="  h-[100vh] w-[100vw] bg-gradient-to-b from-dark-900 from-10% to-dark-100 to-50% fixed top-0 flex z-100 items-center justify-center ">
                <div @click="showMobileMenu = !showMobileMenu" class="absolute top-6 right-20">
                    <svg class="w-[4rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" />
                    </svg>
                </div>
                <ul class="text-[3rem]  ">
                    <NuxtLink to="/" class="text-white no-underline hover:underline underline-offset-15">
                        <p>Home</p>
                    </NuxtLink>
                    <NuxtLink to="/about" class="text-white no-underline hover:underline underline-offset-15">
                        <p>About</p>
                    </NuxtLink>
                    <NuxtLink to="/works" class="text-white no-underline hover:underline underline-offset-15 ">
                        <p>Works</p>
                    </NuxtLink>
                    <NuxtLink to="/contact" class="text-white no-underline hover:underline underline-offset-15">
                        <p>Contact</p>
                    </NuxtLink>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script setup>
const showMobileMenu = ref(false)
const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}</style>