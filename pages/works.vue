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
        <div class="cardBg rounded-3xl  z-10   xl:bg-white ">
            <div class=" items-center  justify-center absolute z-0 xl:relative ">
              <img class="flex  m-5  w-[45vw]  xl:w-[20vw]  opacity-30" src="../assets/cdPlayer.gif" alt="Animated GIF">
            </div>
            <descript class="flex flex-col justify-center mb-8  break-all  z-10 h-[40rem] xl:h-auto">
              <strong class="text-[2rem] mb-3 text xl:text-[3rem] ">8 bits CDPlayer</strong>
              <small class="text-[1rem] mb-3 xl:text-[1.5rem]">收藏了有關自製的8 BITs音樂</small>
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
  <FooterSpace/>
</template>
<style > 

.cardBg {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  margin-right: 3rem;
  width: auto;
  height: auto;
  background-color: white;
  transition: background-color 0.4s ease;
}

.cardBg:hover{
 background-color: #d9b61d;
}


</style>