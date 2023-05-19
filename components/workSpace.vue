<template>
  <div class="py-20">
    <div class="flex w-full ">      
      <div class="grid grid-cols-1 w-2/3 gap-y-10 xl:grid-row-3">
       <div v-for="item in items" :key="item.id" class="cardBg rounded-3xl justify-center z-10  xl:bg-none xl:items-center ">
           <descript class="flex flex-col justify-center mb-8 break-all z-10 h-[40rem] items-center xl:h-auto ">
            <strong class="text-[2rem] mb-3 xl:text-[2.2rem] 2xl:text-[2.4em]">{{ item.title }}</strong>
            <small class="text-[1rem] mb-3 xl:text-[1.2rem] 2xl:text-[1.4rem]">{{ item.description }}</small>
            <a :href="item.link" class="no-underline">
             <div class="border-2 border-slate border-solid justify-center items-center flex rounded-xl w-[12rem] h-[3rem] text-[1.3rem] text-black hover:animate-pulse">More...</div>
            </a>
           </descript>
       </div>
      </div>
      <div class=" rounded-3xl flex flex-col justify-end w-1/3 tracking-wide leading-loose text-right">
        <div >
          <p class="text-[6rem] text-slate-500 my-3rem">Works</p>
        </div>
        <descript class="flex flex-col mb-8 break-all z-10 h-[40rem]  xl:h-auto ">
          <strong class="text-[2rem] mb-3 xl:text-[2.2rem] 2xl:text-[2.4em] ">作品都會集中在這,存放的種類並沒有特別限制,所以可以看到很不同類型的作品</strong>
          <small class="text-[1rem] font-bold lg:text-[1.5rem] text-gray-700 " >( There are some whimsical works stored here,<br>which are inspired by life )</small>
          <a class="no-underline">
           <div class="border-2 border-slate border-solid justify-center items-center flex rounded-xl w-[12rem] h-[3rem] text-[1.3rem] text-black hover:animate-pulse">More...</div>
          </a>
        </descript>
      </div>
    </div>
  </div>
  <div class="dom"></div>
</template>
<style > 

</style>
<script setup>
import cdPlayerGif from '~/assets/cdPlayer.gif'
import phoneGif from '~/assets/phone.gif'
import suzuruGif from '~/assets/suzuru.gif'
import lottie from 'lottie-web'


const items=[
  {
  id:1,
  imgSrc:cdPlayerGif ,
  imgAlt:"cdPlayerGif",
  title:"8 bits CDPlayer",
  link: "https://www.youtube.com/watch?v=xhfJOkeBHy8"
  },
  {
  id:2,
  imgSrc:phoneGif ,
  imgAlt:"phoneGif",
  title:"Weather Report",
  link: "https://www.youtube.com/watch?v=xhfJOkeBHy8"
  },
  {
  id:3,
  imgSrc:suzuruGif ,
  imgAlt:"suzuruGif",
  title:"SUZURU",
  link: "https://www.youtube.com/watch?v=xhfJOkeBHy8"
  },
]

const dom=ref(null)
lottie.loadAnimation({
  container: dom, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '3d.json' // the path to the animation json
});
</script>