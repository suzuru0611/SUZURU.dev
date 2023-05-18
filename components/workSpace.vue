<template>
  <div class="bg-[#edeae5]  w-full ">
    <P class="">作品</P>
    <p>Works</p>
   <section class="overflow-hidden">
      <div class="grid grid-cols-1 gap-y-10 xl:grid-cols-3">
        <div class="cardBg rounded-3xl justify-center z-10  xl:bg-white xl:justify-start 	">
            <div class=" items-center absolute z-0 xl:relative">
              <img class="flex  m-5  w-[45vw]  xl:w-[20vw]  opacity-30 xl:opacity-100" src="../assets/cdPlayer.gif" alt="Animated GIF">
            </div>
            <descript class="flex flex-col justify-center mb-8  break-all  z-10 h-[40rem] items-cemter xl:h-auto xl:items-start">
              <strong class="text-[2rem] mb-3  xl:text-[2.2rem]  2xl:text-[2.4em] ">8 bits CDPlayer</strong>
              <small class="text-[1rem] mb-3 xl:text-[1.2rem] 2xl:text-[1.4rem]">收藏了有關自製的8 BITs音樂</small>
              <a href="https://www.youtube.com/watch?v=xhfJOkeBHy8" class="no-underline"><div class="border-2 border-slate border-solid justify-center items-center flex rounded-xl w-[12rem] h-[3rem] text-[1.3rem] text-black hover:animate-pulse">More...</div></a>
            </descript>
        </div>
        <div class="cardBg rounded-3xl justify-center z-10  xl:bg-white xl:justify-start ">
            <div class=" items-center absolute z-0 xl:relative">
              <img class="flex  m-5  w-[45vw]  xl:w-[20vw]  opacity-30 xl:opacity-100" src="../assets/phone.gif" alt="Animated GIF">
            </div>
            <descript class="flex flex-col justify-center mb-8  break-all  z-10 h-[40rem] items-center xl:h-auto  xl:items-start">
              <strong class="text-[2rem] mb-3  xl:text-[2.2rem]  2xl:text-[2.4em] ">Weather Report</strong>
              <small class="text-[1rem] mb-3 xl:text-[1.2rem] 2xl:text-[1.4rem]">查明天帶什麼出門</small>
              <a href="https://www.youtube.com/watch?v=xhfJOkeBHy8" class="no-underline"><div class="border-2 border-slate border-solid justify-center items-center flex rounded-xl w-[12rem] h-[3rem] text-[1.3rem] text-black hover:animate-pulse">More...</div></a>
            </descript>
        </div>
        <div class="cardBg rounded-3xl justify-center z-10  xl:bg-white xl:justify-start ">
            <div class=" items-center absolute z-0 xl:relative">
              <img class="flex  m-5  w-[45vw]  xl:w-[20vw]  opacity-30 xl:opacity-100" src="../assets/suzuru.gif" alt="Animated GIF">
            </div>
            <descript class="flex flex-col justify-center mb-8  break-all  z-10 h-[40rem] items-center xl:h-auto xl:items-start">
              <strong class="text-[2rem] mb-3  xl:text-[2.2rem]  2xl:text-[2.4em] ">SUZURU</strong>
              <small class="text-[1rem] mb-3 xl:text-[1.2rem] 2xl:text-[1.4rem]">用於存放各個作品的網站</small>
              <a href="https://www.youtube.com/watch?v=xhfJOkeBHy8" class="no-underline"><div class="border-2 border-slate border-solid justify-center items-center flex rounded-xl w-[12rem] h-[3rem] text-[1.3rem] text-black hover:animate-pulse">More...</div></a>
            </descript>
        </div>
        <div class="cardBg rounded-3xl justify-center z-10  xl:bg-white xl:justify-start ">
            <div class=" items-center absolute z-0 xl:relative">
              <img class="flex  m-5  w-[45vw]  xl:w-[20vw]  opacity-30 xl:opacity-100" src="../assets/squid.gif" alt="Animated GIF">
            </div>
            <descript class="flex flex-col justify-center mb-8  break-all  z-10 h-[40rem] items-center xl:h-auto xl:items-start">
              <strong class="text-[2rem] mb-3  xl:text-[2.2rem]  2xl:text-[2.4em] ">S Squid</strong>
              <small class="text-[1rem] mb-3 xl:text-[1.2rem] 2xl:text-[1.4rem]">紓壓用小魷魚</small>
              <a href="https://www.youtube.com/watch?v=xhfJOkeBHy8" class="no-underline"><div class="border-2 border-slate border-solid justify-center items-center flex rounded-xl w-[12rem] h-[3rem] text-[1.3rem] text-black hover:animate-pulse">More...</div></a>
            </descript>
        </div>
      </div>
   </section> 
  </div>
</template>
<style > 

.cardBg {
  display: flex;
  flex-direction: row;
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