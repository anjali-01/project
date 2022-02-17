import React from 'react';
import Link from 'next/link';

export default function Cse(){
    return(
        <>
        <div class="flex flex-row justify-evenly m-10">
            <div class="flex flex-col justify-center w-1/2">
                <p class="text-left text-5xl font-normal">Electronics & Communications</p><br/>
                <p class="text-2xl font-light">5000+ Free resources - Programming Language tutorials, tests, technology articles, and a lot more.</p><br/>
                <p><span class="text-2xl bg-violet-200 p-1 font-light">#Library</span></p>
            </div>
            <div class="w-2/5 flex flex-col items-center space-y-6">
                <div class="shadow-lg rounded-md shadow-blue-300 w-1/2 h-fit"><a href="#1st"><p class="p-3 text-center font-semibold bg-blue-600 text-white rounded-md transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-110 duration-300">1st Year</p></a></div>

                <div class="shadow-lg rounded-md shadow-pink-300 w-1/2 h-fit"><a href="#2nd"><p class="p-3 text-center font-semibold bg-pink-500 text-white rounded-md transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-110 duration-300">2nd Year</p></a></div>

                <div class="shadow-lg rounded-md shadow-purple-300 w-1/2 h-fit"><a href="#3rd"><p class="p-3 text-center font-semibold bg-purple-400 text-black rounded-md transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-110 duration-300">3rd Year</p></a></div>

                <div class="shadow-lg rounded-md shadow-blue-200 w-1/2 h-fit"><a href="#4th"><p class="p-3 text-center font-semibold bg-blue-300 text-black rounded-md transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-110 duration-300">4th Year</p></a></div>
            </div>
        </div>

        <a class="bg-pink-200"href="#1st"><img class="w-40 m-auto content-center" src="/arrow.gif"/></a>

        <div id="1st" class="border-2 border-black-100 rounded-lg m-20 shadow-lg shadow-black-100">
            <div class="flex flex-row justify-start m-5">
            <img src="/books.png"/>
            <p class="text-2xl font-medium text-left">1st Year Materials</p> 
            </div>
            <div class="flex flex-row justify-around">
                <div class="p-3 m-3 flex flex-col text-start gap-2 w-1/3">
                    <div class="flex flex-row">
                    <img src="/bookmark.png"/>
                    <p class="w-90 text-2xl font-medium">1-1</p>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Engineering Drawing</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">MMCS</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Chemistry</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Physics</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">LAMC</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Data Structures</a>
                    </div>
                </div>
                <div class="p-3 m-3 flex flex-col text-start gap-2 w-1/3">
                    <div class="flex flex-row">
                    <img src="/bookmark.png"/>
                    <p class="w-90 text-2xl font-medium">1-2</p>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">BEEE</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">NMOD</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">C Programming</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">MFCS</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">UNIX</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Professional Ethics</a>
                    </div>
                </div>
            </div>
        </div>

        <div id="2nd" class="border-2 border-black-100 rounded-lg m-20 shadow-lg shadow-black-100">
            <div class="flex flex-row justify-start m-5">
            <img src="/books.png"/>
            <p class="text-2xl font-medium text-left">2nd Year Materials</p> 
            </div>
            <div class="flex flex-row justify-around">
                <div class="p-3 m-3 flex flex-col text-start gap-2 w-1/3">
                    <div class="flex flex-row">
                    <img src="/bookmark.png"/>
                    <p class="w-90 text-2xl font-medium">2-1</p>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Engineering Drawing</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">MMCS</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Chemistry</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Physics</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">LAMC</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Data Structures</a>
                    </div>
                </div>
                <div class="p-3 m-3 flex flex-col text-start gap-2 w-1/3">
                    <div class="flex flex-row">
                    <img src="/bookmark.png"/>
                    <p class="w-90 text-2xl font-medium">2-2</p>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Engineering Drawing</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">MMCS</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Chemistry</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Physics</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">LAMC</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Data Structures</a>
                    </div>
                </div>
            </div>
        </div>

        <div id="3rd" class="border-2 border-black-100 rounded-lg m-20 shadow-lg shadow-black-100">
            <div class="flex flex-row justify-start m-5">
            <img src="/books.png"/>
            <p class="text-2xl font-medium text-left">3rd Year Materials</p> 
            </div>
            <div class="flex flex-row justify-around">
                <div class="p-3 m-3 flex flex-col text-start gap-2 w-1/3">
                    <div class="flex flex-row">
                    <img src="/bookmark.png"/>
                    <p class="w-90 text-2xl font-medium">3-1</p>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Engineering Drawing</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">MMCS</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Chemistry</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Physics</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">LAMC</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Data Structures</a>
                    </div>
                </div>
                <div class="p-3 m-3 flex flex-col text-start gap-2 w-1/3">
                    <div class="flex flex-row">
                    <img src="/bookmark.png"/>
                    <p class="w-90 text-2xl font-medium">3-2</p>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Engineering Drawing</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">MMCS</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Chemistry</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Physics</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">LAMC</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Data Structures</a>
                    </div>
                </div>
            </div>
        </div>

        <div id="4th" class="border-2 border-black-100 rounded-lg m-20 shadow-lg shadow-black-100">
            <div class="flex flex-row justify-start m-5">
            <img src="/books.png"/>
            <p class="text-2xl font-medium text-left">4th Year Materials</p> 
            </div>
            <div class="flex flex-row justify-around">
                <div class="p-3 m-3 flex flex-col text-start gap-2 w-1/3">
                    <div class="flex flex-row">
                    <img src="/bookmark.png"/>
                    <p class="w-90 text-2xl font-medium">4-1</p>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Engineering Drawing</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">MMCS</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Chemistry</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Physics</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">LAMC</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Data Structures</a>
                    </div>
                </div>
                <div class="p-3 m-3 flex flex-col text-start gap-2 w-1/3">
                    <div class="flex flex-row">
                    <img src="/bookmark.png"/>
                    <p class="w-90 text-2xl font-medium">4-2</p>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Engineering Drawing</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">MMCS</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Chemistry</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Physics</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">LAMC</a>
                    </div>
                    <div class=" bg-blue-200 rounded-md p-3 w-90 flex items-center gap-1">
                        <img class="w-30" src="/accept.png"/>
                        <a class="font-normal text-xl" href="https://drive.google.com/drive/u/1/folders/1a4lwlfm11Kx-2kjBuHOQO0A8QFjNxCV4">Data Structures</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}