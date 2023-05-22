<template>
  <div class="bg-[#edeae5]  w-full h-auto min-h-screen">
   <NavSpace/> 
   <section class="overflow-hidden">
      <marquee/>
      <div class="grid grid-cols-1 gap-y-10 xl:grid-cols-2">
       <div v-for="item in items" :key="item.id" class="cardBg rounded-3xl justify-center z-10  xl:bg-white xl:justify-start ">
         <div class="items-center absolute z-0 xl:relative">
           <img class="flex m-5 w-[45vw] xl:w-[20vw] opacity-30 xl:opacity-100" :src="item.imgSrc" :alt="item.imgAlt">
         </div>
         <descript class="flex flex-col justify-center mb-8 break-all z-10 h-[40rem] items-center xl:h-auto xl:items-start">
          <strong class="text-[2rem] mb-3 xl:text-[2.2rem] 2xl:text-[2.4em]">{{ item.title }}</strong>
          <small class="text-[1rem] mb-3 xl:text-[1.2rem] 2xl:text-[1.4rem]">{{ item.description }}</small>
          <a :href="item.link" class="no-underline">
           <div class="border-2 border-slate border-solid justify-center items-center flex rounded-xl w-[12rem] h-[3rem] text-[1.3rem] text-black hover:animate-pulse">More...</div>
          </a>
         </descript>
       </div>
      </div>
      <marquee/>
   </section> 
  </div>
  <FooterSpace/>
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
<script setup>
import cdPlayerGif from '~/assets/cdPlayer.gif'
import phoneGif from '~/assets/phone.gif'
import suzuruGif from '~/assets/suzuru.gif'
import squidGif from '~/assets/squid.gif'


const items=[
  {
  id:1,
  imgSrc:cdPlayerGif ,
  imgAlt:"cdPlayerGif",
  title:"8 bits CDPlayer",
  description: "收藏了有關自製的8 BITs音樂",
  link: "https://www.youtube.com/watch?v=xhfJOkeBHy8"
  },
  {
  id:2,
  imgSrc:phoneGif ,
  imgAlt:"phoneGif",
  title:"Weather Report",
  description: "查明天帶什麼出門",
  link: "https://www.youtube.com/watch?v=xhfJOkeBHy8"
  },
  {
  id:3,
  imgSrc:suzuruGif ,
  imgAlt:"suzuruGif",
  title:"SUZURU",
  description: "用於存放各個作品的網站",
  link: "https://www.youtube.com/watch?v=xhfJOkeBHy8"
  },
  {
  id:4,
  imgSrc:squidGif ,
  imgAlt:"squidGif",
  title:"S Squid",
  description: "紓壓用小魷魚",
  link: "https://suzuru0611.github.io/SPLATOON/"
  },
]
</script>