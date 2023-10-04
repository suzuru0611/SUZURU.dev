<template>
  <div class="py-30 mx-2rem md:mx-10rem overflow-hidden">
    <div class="flex flex-col w-full ">
      <div class=" flex flex-col  tracking-wide leading-loose pb-0 xl:pb-[5rem]">
        <div class="flex flex-col xl:flex-row items-end relative">
          <div class="w-full xl:w-2/3">
            <div>
              <p class="text-[6rem] text-slate-500 my-3rem">Works</p>
            </div>
            <descript class="flex flex-col mb-8 break-all z-10   xl:h-auto ">
              <strong
                class="text-[2rem] mb-3 xl:text-[2.2rem] 2xl:text-[2.4em] ">作品都會集中在這,存放的種類並沒有特別限制、所以可以看到不同類型的作品</strong>
              <small class="text-[1rem] font-bold lg:text-[1.5rem] text-gray-700 ">(The works will be concentrated here,
                and the types of storage are not particularly limited,so you can see different types of works)</small>
            </descript>
          </div>
          <div class="w-full xl:w-auto ">
            <NuxtLink to="/works">
              <img src="@/assets/more.gif" alt="more.gif" class=" w-[20rem] md:w-[28rem] xl:w-[20rem] ">
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex flex-col xl:flex-row align-center items-center xl:mr-[5rem]   justify-center  xl:items-center ">
        <div class="block  rounded-3xl overflow-hidden   ">
          <a href="https://suzuru0611.github.io/8BITS-MUSIC/">
            <div class="">
              <img src="@/assets/cdplayer.jpg" alt="squid.jpg" class="flex w-full ">
            </div>
          </a>
        </div>
        <div class="block  rounded-3xl overflow-hidden   ">
          <a href="https://suzuru0611.github.io/Weather-Report/">
            <div class="">
              <img src="@/assets/skate.jpg" alt="squid.jpg" class="flex w-full ">
            </div>
          </a>
        </div>
        <div class="block  rounded-3xl overflow-hidden   ">
          <a href="https://suzuru0611.github.io/SPLATOON/">
            <div class="">
              <img src="@/assets/squid.jpg" alt="squid.jpg" class="flex w-full ">
            </div>
          </a>
        </div>

      </div>
    </div>

  </div>
</template>
<style > .workBg {
   display: grid;
   flex-direction: column;
   align-items: center;
   margin-left: 3rem;
   margin-right: 3rem;
   width: auto;
   height: auto;
   background-color: white;
   transition: background-color 0.4s ease;
 }

 .workBg:hover {
   background-color: #d9b61d;
 }

 .container {
   display: flex;
 }

 .block {
   width: 100%;
   height: auto;
   background-color: white;
   margin: 10px;
   transition: transform 0.3s;
 }

 .block:hover {
   transform: scale(0.8);
 }
</style>
<script setup>
import cdPlayerGif from '~/assets/cdPlayer.gif'
import phoneGif from '~/assets/phone.gif'
import suzuruGif from '~/assets/suzuru.gif'


const items = [
  {
    id: 1,
    imgSrc: cdPlayerGif,
    imgAlt: "cdPlayerGif",
    title: "8 bits CDPlayer",
    link: "https://www.youtube.com/watch?v=xhfJOkeBHy8"
  },
  {
    id: 2,
    imgSrc: phoneGif,
    imgAlt: "phoneGif",
    title: "Weather Report",
    link: "https://www.youtube.com/watch?v=xhfJOkeBHy8"
  },
  {
    id: 3,
    imgSrc: suzuruGif,
    imgAlt: "suzuruGif",
    title: "SUZURU",
    link: "/"
  },
]
</script>