import React from 'react';

export default function Index(){
  
  return(
    <div class="w-200 rounded-xl ml-10 mr-10 mb-10 pb-10 shadow-2xl shadow-grey-500">
      
      <div class="flex flex-row gap-5 justify-evenly">
        <div class="flex flex-col gap-2 justify-center w-1/2 ml-20">
          <p class="text-5xl ml-10 font-bold">Education<span class="text-violet-600"> Simplified.</span></p><br/>
          <p class="ml-10 text-2xl font-normal">Join our tribe in exploring all the <br/><span class="font-medium"> Tech Trends☄️</span>  
          *(^o^)/*</p>
          <p class="ml-10 text-2xl font-light">Enjoy the learning with <span class="bg-purple-200 p-1">#rightaway</span> available content & Resources.</p>
        </div>
        <div class="w-1/2">
          <img class="w-4/5" src="/studying.gif"/>
        </div>
      </div>
      <div class="flex flex-col items-center gap-4 mt-14">

              <div class="flex flex-row gap-2 bg-violet-100 border-2 border-violet-200 text-left shadow-lg shadow-violet-100 p-5 w-3/5 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
               <div> 
                <span class="flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-violet-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                </span>
               </div>
               <div >
                <a class="text-lg font-semibold" href="/domains">Domains</a>
                <p>Consider. Shape. Influence. Shine.</p>
               </div>
              </div>

              <div class="flex flex-row bg-violet-100 border-2 border-violet-200 text-right shadow-lg shadow-violet-100 p-5 w-3/5 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                <div class="w-full ml-48">
                  <a class="text-lg font-semibold ml-" href="/academics">Academics</a>
                  <p>Access Materials of 40 Subjects of 8 Semesters of All Branches.</p>
                </div>
                <div class="pl-2"> 
                  <span class="flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-violet-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                  </span>
                </div>
              </div>

      </div>
    </div>
  );
}