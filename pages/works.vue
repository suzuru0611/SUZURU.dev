<template>
  <div class="bg-[#edeae5]  w-full ">
  <NavSpace/> 
  <section class="overflow-hidden">
      <div class="marquee text-bold text-[15rem] 2xl:text-[18rem] text-white ">
        <span>ALL CREATIONS SHOULD START FROM THE HEART</span>
        <span>ALL CREATIONS SHOULD START FROM THE HEART</span>
        <span>ALL CREATIONS SHOULD START FROM THE HEART</span>
      </div>
      <div class="grid grid-cols-1 gap-y-10 xl:grid-cols-2">
        <div class="rounded-3xl border-2 bg-white mx-3rem row flex w-auto">
            <img class="flex  m-5  w-[45vw]  absolute xl:w-[20vw] relative" src="../assets/cdPlayer.gif" alt="Animated GIF">
            <descript class="flex flex-col justify-center mb-8  break-all ">
              <strong class="text-[3rem] mb-3 text">8 bits CDPlayer</strong>
              <small class="text-[1.5rem] mb-3">收藏了有關自製的8 BITs音樂</small>
              <a href="https://www.youtube.com/watch?v=xhfJOkeBHy8" class="no-underline"><div class="border-2 border-slate border-solid justify-center items-center flex rounded-xl w-[12rem] h-[3rem] text-[1.3rem] text-black ">More...</div></a>
            </descript>
        </div>
        <div class="rounded-3xl border-2 bg-white mx-3rem">
            <img class="flex  p-5  w-[45vw] xl:w-[20vw]" src="../assets/cdPlayer.gif" alt="Animated GIF">
        </div>
        <div class="rounded-3xl border-2 bg-white mx-3rem">
            <img class="flex  p-5  w-[45vw] xl:w-[20vw]" src="../assets/cdPlayer.gif" alt="Animated GIF">
        </div>
        
      </div>
      <div class="marquee text-bold text-[15rem] 2xl:text-[18rem] text-white ">
        <span>ALL CREATIONS SHOULD START FROM THE HEART</span>
        <span>ALL CREATIONS SHOULD START FROM THE HEART</span>
        <span>ALL CREATIONS SHOULD START FROM THE HEART</span>
      </div>
  </section> 
  </div>
</template>
<style > 

.descript {
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

.descript:hover{
 background-color: #d9b61d;
}


</style>