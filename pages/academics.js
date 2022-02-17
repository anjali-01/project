import React from 'react';
import Link from 'next/link';

export default function Academics(){
    return (
        <div class="flex flex-col w-200 rounded-xl ml-10 mr-10 mb-10 pb-10 shadow-2xl shadow-grey-500">
            <div class="flex flex-row gap-10 items-center">
                <div class="flex flex-col ml-10">
                <p class="text-5xl font-semibold">Academics</p><br/>
                <p class="text-left text-2xl font-thin"><span class="bg-pink-200">800+</span> Free resources - Programming Language tutorials, tests, technology articles, and a lot more.</p>
                </div>
                <img class="w-1/2" src="https://static.studytonight.com/css/resource.v3/svg/write-content.svg"></img>
                </div><br/><br/><br/>
                
                <div class="flex flex-col gap-8">

                    <div class="flex flex-row justify-around">
                        <div class="flex flex-row justify-around items-center w-2/5 text-center p-2 rounded-lg shadow-lg shadow-black-100 border-1 border-black-100 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                            <Link href="/cse"><a class="text-2xl font-normal">Computer Science</a></Link>
                            <img src="https://img.icons8.com/external-konkapp-outline-color-konkapp/60/000000/external-computer-electronic-devices-konkapp-outline-color-konkapp.png"/>
                        </div>

                        <div class="flex flex-row justify-around items-center w-2/5 text-center  p-2 rounded-lg shadow-lg shadow-black-100 border-1 border-black-100 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                            <Link href="/ece"><a class="text-2xl font-normal">Electronics & Communications</a></Link>
                            <img class="w-14"src="/electrical.png"></img>
                        </div>
                    </div>

                    <div class="flex flex-row justify-around ">
                        <div class="flex flex-row justify-around items-center w-2/5 text-center p-2 rounded-lg shadow-lg shadow-black-100 border-1 border-black-100 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                            <Link href="/eee"><a class="text-2xl font-normal">Electrical & Electronics </a></Link>
                            <img class="w-14" src="/plug.png"></img>
                        </div>

                        <div class="flex flex-row justify-around items-center w-2/5 text-center p-2 rounded-lg shadow-lg shadow-black-100 border-1 border-black-100 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                            <Link href="/mech"><a class="text-2xl font-normal">Mechanical Engineering</a></Link>
                            <img class="w-14 "src="/mechanical.png"/>
                        </div>
                    </div>
            </div>
            </div>
       
    );
}
