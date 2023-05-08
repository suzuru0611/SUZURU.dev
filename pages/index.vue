<template>
  <div class="bg-[#edeae5] w-full ">
    <NavSpace/>
    <section class="mx-5 relative flex flex-col  md:h-[60rem]">
      <div class="pt-5rem pl-5rem  tracking-wide leading-loose">
        <p class="text-[4rem] text-slate-500 lg:text-[4.5rem] ">This Is My Thought Locker </p>
        <P class="text-[2rem] font-bold lg:text-[2.5rem]">這裡存放了一些突發奇想的作品、<br>由生活鎖事去發想</P>
        <P class="text-[1rem] font-bold lg:text-[1.5rem] text-gray-700 " >( There are some whimsical works stored here,<br>which are inspired by life )</P>
      </div>
      <div class="flex w-full justify-end relative right-[2rem] 2xl:absolute">
        <img class="flex w-[45vw] 2xl:w-[50vw]" src="../assets/indexComputer.gif" alt="Animated GIF">
      </div>
    </section>
    <footSpace/>
    <section class="overflow-hidden">
      <div class="marquee text-bold text-[15rem] 2xl:text-[18rem] text-white ">
        <span>ALL CREATIONS SHOULD START FROM THE HEART</span>
        <span>ALL CREATIONS SHOULD START FROM THE HEART</span>
        <span>ALL CREATIONS SHOULD START FROM THE HEART</span>
      </div>
      <div>
        <div class="flex w-full justify-start relative left-[2rem] ">
          <img class="flex w-[45vw] 2xl:w-[50vw]" src="../assets/cdPlayer.gif" alt="Animated GIF">
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
html, body {
  margin: 0px !important;
  padding: 0px !important;
}
.marquee {
  white-space: nowrap;

}

.marquee span {
  display: inline-block;
  width: 100%;
  padding-right: 330rem;
  animation: marquee 50s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
</style>


