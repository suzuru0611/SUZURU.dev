<template>
  <div class="bg-[#edeae5]  w-full h-auto min-h-screen">
    <NavSpace/> 
    <div class="overflow-hidden">
        <div class="py-5  px-5rem  rounded-3xl justify-center ">
          <div class="marquee text-bold text-[15rem] 2xl:text-[18rem] text-white ">
           <span>WHAT? WHAT? WHAT? WHAT? WHAT? WHAT? WHAT?</span>
           <span>WHAT? WHAT? WHAT? WHAT? WHAT? WHAT? WHAT?</span>
           <span>WHAT? WHAT? WHAT? WHAT? WHAT? WHAT? WHAT?</span>
          </div>
          <div class="w-full md:w-2/3 tracking-wide leading-loose py-10">
            <P class="text-[1.5rem]  xl:text-[2.2rem] 2xl:text-[2.4em] ">製作這個網站的目的在於平常的作品一直沒有很完整存放的空間、所以決定製作一個屬於自己作品的網站、表現方式都以3D意象來表現、並非直接使用作品畫面、原因在於希望能夠在看到3D時、就能想像到這大概是個什麼樣的網站、
              在實際看到作品也能有連接感、同時添加了一致性與趣味度。</P>
            <P class="text-[1rem] font-bold lg:text-[1.5rem] text-gray-700 ">(The purpose of making this website is that ordinary works have never had a very complete storage space, so I decided to make a website of my own works, and the expression methods are all expressed in 3D images, instead of directly using the pictures of the works. The reason is that I hope to be able to see them in 3D Now, you can imagine what kind of website this is,
              You can feel a sense of connection even when you actually see the work, and at the same time add consistency and fun)</P>
          </div>           
          <div class="marquee text-bold text-[15rem] 2xl:text-[18rem] text-white ">
           <span>WHEN? WHEN? WHEN? WHEN? WHEN? WHEN? WHEN?</span>
           <span>WHEN? WHEN? WHEN? WHEN? WHEN? WHEN? WHEN?</span>
           <span>WHEN? WHEN? WHEN? WHEN? WHEN? WHEN? WHEN?</span>
          </div>    
          <div class="w-full md:w-2/3 tracking-wide leading-loose py-10">
            <P class="text-[1.5rem]  xl:text-[2.2rem] 2xl:text-[2.4em] ">這是在2023年4月開始製作的網站、網站的設計與程式編輯等等是由我一人完成、花費的時間雖然龐大、且會遇到各種問題、但一一解決的成就感與學習到新事物的喜悅、對我來講才是製作這個網站最重要的事情。當然也有遇到現階段技術無法做到的部分、能夠激勵自己未來去解決。</p>
            <P class="text-[1rem] font-bold lg:text-[1.5rem] text-gray-700 ">(This is a website that will start to be produced in April 2023. The design and program editing of the website are done by me alone. Although it takes a lot of time and there will be various problems, the sense of accomplishment and learning is achieved by solving them one by one. The joy of new things is the most important thing for me to make this website. Of course, there are also some parts that cannot be achieved by current technology, and I can motivate myself to solve them in the future.
            )</P>
          </div>  
          <div class="marquee text-bold text-[15rem] 2xl:text-[18rem] text-white ">
           <span>WHO? WHO? WHO? WHO? WHO? WHO? WHO? WHO?</span>
           <span>WHO? WHO? WHO? WHO? WHO? WHO? WHO? WHO?</span>
           <span>WHO? WHO? WHO? WHO? WHO? WHO? WHO? WHO?</span>
          </div>    
          <div class="w-full md:w-2/3 tracking-wide leading-loose py-10">
            <P class="text-[1.5rem]  xl:text-[2.2rem] 2xl:text-[2.4em] ">你好、我是SUZURU、除了會網頁相關技術外、也會基本的平面與3D技術、除了備註合作的部分外、本網站的所有作品內容都是由我製作的、希望你會喜歡、如果有疑問都歡迎聯繫我。</p>
            <P class="text-[1rem] font-bold lg:text-[1.5rem] text-gray-700 ">(Hello, I am SUZURU. In addition to web-related technologies, I also know basic plane and 3D technologies. Except for the cooperation part, all works on this website are made by me. I hope you will like them. If you have Any questions are welcome to contact me.)</P>
          </div>  
        </div>
    </div>
  </div>
  <footerSpace/>
 
</template>
<style > 
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