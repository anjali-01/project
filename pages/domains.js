import React from 'react';

export default function Index(){
    return(
        <div class=" w-200 rounded-lg ml-10 mr-10 mb-10 pb-10 shadow-2xl shadow-black-900/50">
            <div class="flex flex-row justify-center items-center">
                <div class="flex flex-col justify-center text-start">
                    <p class="text-5xl font-bold text-amber-500">Learn coding</p>
                    <p class="text-5xl font-bold">by doing!</p><br/>
                    <p class="text-xl font-thin">Simulated interactive learning, in-browser,<br/> with projects and guided experience for beginners.</p>
                    <p class="text-xl font-thin">Let the trending tech empower you.</p>
                    <p class="text-xl font-thin mt-1"><span class="bg-violet-200 p-1">#rightwayoflearning</span></p>
                </div>
                <div class="w-1/2 h-1/2" ><img src="https://static.studytonight.com/css/resource.v3/svg/learn-coding-new.svg"></img></div>
            </div>


            <div class="flex flex-row items-center justify-evenly gap-5">
                <div class="flex flex-col w-80 p-5 rounded-lg shadow-lg shadow-violet-100 border-2 border-violet-100">
                    <div class="flex flex-row justify-between items-center">
                        <a class="text-2xl font-semibold" href="/cloud">Cloud Computing</a>  
                        <img src="https://img.icons8.com/external-wanicon-two-tone-wanicon/48/000000/external-cloud-computing-big-data-wanicon-two-tone-wanicon.png"/>
                    </div><br/>
                    <p>The cloud is made up of servers in data centers all over the world.<br/>Get started today!</p><br/>
                    <a class="p-2 w-1/3 text-lg bg-violet-800 hover:bg-violet-600 text-slate-100 rounded-md" href="/cloud">Explore»»</a>
                </div>


                <div class="flex flex-col w-80 rounded-lg p-5 shadow-lg shadow-violet-100 border-2 border-violet-100">
                    <div class="flex flex-row justify-between items-center">
                        <a class="text-2xl font-semibold" href="/webapp">Web & App Dev</a>
                        <img src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/48/000000/external-html-or-other-programming-access-on-a-smartphone-development-fresh-tal-revivo.png"/>
                    </div><br/>
                    <p>Web App Development in 2022: Everything You Need to Know.<br/>Take a look now!</p><br/>
                    <a class="p-2 w-1/3 text-lg bg-violet-800 hover:bg-violet-600 text-slate-100 rounded-md" href="/webapp">Explore»»</a>
                </div>


                <div class="flex flex-col w-80 rounded-lg p-5 shadow-lg shadow-violet-100 border-2 border-violet-100">
                    <div class="flex flex-row justify-between items-center">
                        <a class="text-2xl font-semibold" href="/aiml">ML & AI</a>
                        <img class="w-11 "src="ai.png"/>
                    </div><br/>
                    <p> AI solves tasks that require human intelligence while ML is a subset of artificial intelligence.</p><br/>
                    <a class="p-2 w-1/3 text-lg bg-violet-800 hover:bg-violet-600 text-slate-100 rounded-md" href="/aiml">Explore»»</a>
                </div>
                
            </div>
        
        </div> 
        
    );
}