import React from 'react'

export default function Cloud(){
    return (
        
        <div class="flex flex-col">
            <div class="mt-5 text-5xl font-semibold bg-gradient-to-tr from-zinc-300 p-40 pt-20">
                <p>Want security? Go cloud |</p>
                <p>What is the cloud ?</p><br/>
                <p class="text-lg font-thin">The cloud is made up of servers in data centers all over the world. Moving to the cloud can<br/> save companies money and add convenience for users.</p>
            </div>
            <div class="text-lg font-medium flex flex-row p-3 pl-44 gap-10">
                    <a class="hover:underline hover:text-blue-500" href="/whatIsTheCloud">What Is the Cloud?</a>
                    <a class="hover:underline hover:text-blue-500" href="/cloudBasics">Cloud Basics</a>
                    <a class="hover:underline hover:text-blue-500" href="/securingCloud">Securing the Cloud</a>
            </div>
                    <hr/>
        </div>
    )
}
