<template>
  <div class="py-20 mx-2rem md:mx-10rem">
    <div class="flex w-full ">      
      <div class="grid grid-cols-1 w-2/3 gap-y-10 pr-[10rem] xl:grid-cols-2">
       <div v-for="item in items" :key="item.id" class="cardBg items-center overflow-hidden rounded-3xl justify-center bg-white relative xl:items-center ">
           <div class="justify-center  items-center absolute  z-0 ">
            <img class="flex w-[25rem] opacity-30  xl:opacity-100" :src="item.imgSrc" :alt="item.imgAlt">
           </div>
           <descript class="flex flex-col justify-center mb-8 break-all transition duration-300  z-10 h-[40rem] items-center opacity-0 hover:opacity-100 xl:h-[20rem] ">
            <strong class="text-[2rem] mb-3 xl:text-[2.2rem] text-[#142342] 2xl:text-[3em]">{{ item.title }}</strong>
            <a :href="item.link" class="no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-[3rem]" viewBox="0 0 24 24"><g transform="rotate(-90 12 12)"><g fill="none" stroke="#142342" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0"/></path></g></g></svg>
            </a>
           </descript>
       </div>
      </div>
      <div class=" rounded-3xl flex flex-col w-1/3 tracking-wide leading-loose ">
        <div >
          <p class="text-[6rem] text-slate-500 my-3rem">Works</p>
        </div>
        <descript class="flex flex-col mb-8 break-all z-10 h-[40rem]  xl:h-auto ">
          <strong class="text-[2rem] mb-3 xl:text-[2.2rem] 2xl:text-[2.4em] ">作品都會集中在這,存放的種類並沒有特別限制、所以可以看到不同類型的作品</strong>
          <small class="text-[1rem] font-bold lg:text-[1.5rem] text-gray-700 " >(The works will be concentrated here, and the types of storage are not particularly limited, so you can see different types of works)</small>
          <a class="no-underline py-2rem">
           <div class="border-2 border-slate border-solid justify-center items-center flex rounded-xl w-[12rem] h-[3rem] text-[1.3rem] text-black hover:animate-pulse">More...</div>
          </a>
        </descript>
      </div>
    </div>
    <div class="flex w-full py-20">   
      <div class=" rounded-3xl flex flex-col w-1/3 tracking-wide leading-loose ">

        <descript class="flex flex-col mb-8 break-all  z-10 h-[40rem] w-2/3 xl:h-auto ">
          <strong class="text-[2rem] mb-3 xl:text-[2.2rem] 2xl:text-[2.4em] ">作品都會集中在這,存放的種類並沒有特別限制、所以可以看到不同類型的作品</strong>
          <small class="text-[1rem] font-bold lg:text-[1.5rem] text-gray-700 " >(The works will be concentrated here, and the types of storage are not particularly limited, so you can see different types of works)</small>
          <a class="no-underline py-2rem">
           <div class="border-2 border-slate border-solid justify-center items-center flex rounded-xl w-[12rem] h-[3rem] text-[1.3rem] text-black hover:animate-pulse">More...</div>
          </a>
        </descript>
      </div>   
      <div class="grid grid-cols-1 w-2/3 gap-y-10 xl:grid-cols-2">
       <div v-for="item in items" :key="item.id" class="cardBg items-center  overflow-hidden rounded-3xl justify-center bg-white relative xl:items-center ">
           <div class="justify-center  items-center absolute  z-0 ">
            <img class="flex w-[25rem] opacity-30  xl:opacity-100" :src="item.imgSrc" :alt="item.imgAlt">
           </div>
           <descript class="flex flex-col justify-center mb-8 break-all transition duration-300  z-10 h-[40rem] items-center opacity-0 hover:opacity-100 xl:h-[20rem] ">
            <strong class="text-[2rem] mb-3 xl:text-[2.2rem] text-[#142342] 2xl:text-[3em]">{{ item.title }}</strong>
            <a :href="item.link" class="no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-[3rem]" viewBox="0 0 24 24"><g transform="rotate(-90 12 12)"><g fill="none" stroke="#142342" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0"/></path></g></g></svg>
            </a>
           </descript>
       </div>
      </div>
      
    </div>
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
  link: "https://www.youtube.com/watch?v=xhfJOkeBHy8"
  },
  {
  id:2,
  imgSrc:phoneGif ,
  imgAlt:"phoneGif",
  title:"Weather Report",
  link: "https://www.youtube.com/watch?v=xhfJOkeBHy8"
  },


]


</script>