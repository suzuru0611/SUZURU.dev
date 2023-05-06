<template>
    <div class="h-[5vh] flex justify-between">
        <div>
            <NuxtLink to="/" class="">
                <img src="../assets/icon.png"/>
            </NuxtLink>
        </div>
        <div class="flex col justify-between w-[20rem] text-2xl">
            <NuxtLink to="/works" class="text-black no-underline hover:underline underline-offset-4">
                <p>Works</p>
            </NuxtLink>
            <NuxtLink to="/about" class="text-black no-underline hover:underline underline-offset-4">
                <p>About</p>
            </NuxtLink>
            <NuxtLink to="/contact" class="text-black no-underline hover:underline underline-offset-4">
                <p>Contact</p>
            </NuxtLink>
        </div> 
    </div>
</template>
<script>
</script>