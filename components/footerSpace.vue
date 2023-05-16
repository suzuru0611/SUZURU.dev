<template>
<footer class="w-full flex justify-center items-center flex-col ">
  <div class="py-2rem xl:relative"><img src="../assets/icon.png" alt="icon"></div>
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
  <div class="flex col justify-between w-[10rem] py-2rem ">
    <a href="">
      <img class="w-[2rem] hover:opacity-60" src="../assets/github.png" alt="github">
    </a>
    <a href="">
      <img class="w-[2rem] hover:opacity-60" src="../assets/linkin.png" alt="linkin">
    </a>
    <a href="">
      <img class="w-[2rem] hover:opacity-60" src="../assets/behance.png" alt="behance">  
    </a>
  </div>
  <p class="pb-[2rem]">SUZURU All Rights Reserved.</p>
</footer>


</template>
<script>
</script>