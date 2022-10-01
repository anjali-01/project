import React from 'react'

export default function Nav(){
    return(
        <div class="flex flex-row justify-between items-center w-100 p-1 gap-3">
            <a href="/"><div class="flex flex-row gap-3 items-center p-3 ml-3">
                <img src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/45/000000/external-technology-artificial-intelligence-and-machine-learning-parzival-1997-flat-parzival-1997.png"/>
                <p class="text-4xl">Tech Tribes</p>
            </div></a>
            <div class="mr-3 p-3">
                <img src="https://img.icons8.com/bubbles/70/000000/github.png"/>
            </div>
        </div>
    );
}