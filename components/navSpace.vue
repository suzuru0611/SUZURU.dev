<template>
    <div class="h-[10vh] flex justify-between items-center mx-5rem">
        <div>
            <NuxtLink to="/" >
                <img class=" w-[8rem] xl:w-[12rem] "  src="../assets/icon.png"/>
            </NuxtLink>
        </div>
        <ul class="justify-between w-[20rem] text-2xl hidden xl:flex">
            <NuxtLink to="/works" class="text-black no-underline hover:underline underline-offset-4 ">
                <p>Works</p>
            </NuxtLink>
            <NuxtLink to="/about" class="text-black no-underline hover:underline underline-offset-4">
                <p>About</p>
            </NuxtLink>
            <NuxtLink to="/contact" class="text-black no-underline hover:underline underline-offset-4">
                <p>Contact</p>
            </NuxtLink>
        </ul>
        <div class="flex xl:hidden">
            <div class="p-4 space-y-2 bg-gray-600 rounded shadow">
             <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
             <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
             <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
            </div>
        </div>
    </div>
</template>
<script>
</script>