<template>
 <div class="about rounded-lg ">
   <small class="text-[1.3rem] text-white tracking-[0.7rem]">關於我</small>       
   <strong class="text-[6rem] text-white my-3rem ">About Me!</strong>
   <NuxtLink to="/about"  class="no-underline hover:animate-pulse ">
     <div class="text-[1.3rem] justify-center flex items-center w-[12rem] h-[3.5rem] rounded-xl border-2 border-white border-solid bg-transparent text-white">More....</div>
   </NuxtLink>
 </div>
</template>
<style > 

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  width: 100%;
  height: auto;
  background-color: #142342;
  transition: background-color 0.4s ease;
}

.about:hover{
 background-color: #d9b61d;
}


</style>


