<template>
<footer class="w-[100vw] flex justify-center items-center flex-col py-2rem">
  <div class="py-2rem"><img src="../assets/icon.png" alt="icon"></div>
  <div class=" flex-row flex justify-center">
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
  <div class="flex col justify-between w-[10rem] py-2rem">
    <img class="w-[2rem]" src="../assets/github.png" alt="github">
    <img class="w-[2rem]" src="../assets/linkin.png" alt="linkin">
    <img class="w-[2rem]" src="../assets/behance.png" alt="behance">  
  </div>
  <p>SUZURU All Rights Reserved.</p>
</footer>


</template>
<script>
</script>