import React from 'react'

export default function aiml(){
    return (
        <div>
            <div class="flex flex-col">
                <div class="bg-gradient-to-r from-indigo-500">
                        <p class="p-20 pb-0 text-5xl font-semibold flex justify-around">Artificial Intelligence & Machine Learning</p>
                        <p class="p-20 pt-0 text-2xl flex justify-around">What it is and why it matters</p>
                </div>
            </div>
            <div class="text-center text-2xl font-thin pt-20 m-2">
                <p>Machine learning is a method of data analysis that automates analytical model building. It is a branch of<br/>
                artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions<br/>
                with minimal human intervention.</p>
            </div>
            <div class="flex flex-row justify-center p-12 space-x-20 text-2xl ">
                <a href="#imp" class="hover:underline hover:text-blue-500">Importance</a>
                <a href="#to" class="hover:underline hover:text-blue-500">Today's World</a>
                <a href="#who" class="hover:underline hover:text-blue-500">Who Uses It</a>
                <a href="#how" class="hover:underline hover:text-blue-500">How It Works</a>
            </div>
            <p class="text-3xl p-32 pb-10 flex justify-center">Evolution of machine learning</p>
            <p class="ml-28 mr-28 text-lg">Because of new computing technologies, machine learning today is not like machine learning of the past. It was born from pattern recognition and the theory that computers can learn without being programmed to perform specific tasks; researchers interested in artificial intelligence wanted to see if computers could learn from data. The iterative aspect of machine learning is important because as models are exposed to new data, they are able to independently adapt. They learn from previous computations to produce reliable, repeatable decisions and results. It’s a science that’s not new – but one that has gained fresh momentum.<br/><br/>While many machine learning algorithms have been around for a long time, the ability to automatically apply complex mathematical calculations to big data – over and over, faster and faster – is a recent development. Here are a few widely publicized examples of machine learning applications you may be familiar with :</p><br/>
            <div class="ml-28 mr-28 text-lg">
                <ul class="list-disc list-inside">
                    <li>The heavily hyped, self-driving Google car? The essence of machine learning.</li><br/>
                    <li>Online recommendation offers such as those from Amazon and Netflix? Machine learning applications for everyday life.</li><br/>
                    <li>Knowing what customers are saying about you on Twitter? Machine learning combined with linguistic rule creation.</li><br/>
                    <li>Fraud detection? One of the more obvious, important uses in our world today.</li>
                </ul>
            </div>
            <div class="flex flex-row bg-slate-200 ml-28 mr-28 mt-10 ">
                <iframe class="p-10" width="560" height="400" src="https://www.youtube.com/embed/z-EtmaFJieY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="flex flex-col ml-10">
                    <p class="pt-10 text-4xl">Machine Learning and Artificial<br/> Intelligence</p><br/>   
                    <p class="text-xl font-light">While artificial intelligence (AI) is the broad science of<br/> mimicking human abilities, machine learning is a specific<br/> subset of AI that trains a machine how to learn. Watch this<br/> video to better understand the relationship between AI and<br/> machine learning. You'll see how these two technologies<br/> work, with useful examples and a few funny asides.</p>
                </div>
            </div> 
            <p id="imp" class="m-20 mb-10 text-4xl flex justify-center">Why is machine learning important?</p>
            <p class="m-5 ml-28 mr-28 text-base">Resurging interest in machine learning is due to the same factors that have made data mining and Bayesian analysis more popular than ever. Things like growing volumes and varieties of available data, computational processing that is cheaper and more powerful, and affordable data storage.</p><br/>
            <p class="ml-28 mr-28 text-base">All of these things mean it's possible to quickly and automatically produce models that can analyze bigger, more complex data and deliver faster, more accurate results – even on a very large scale. And by building precise models, an organization has a better chance of identifying profitable opportunities – or avoiding unknown risks.</p>
            <div class="border border-indigo-600 m-28 mt-10 flex flex-row">
                <div class="flex flex-col">
                    <p class="text-2xl font-medium m-5 mt-14">What's required to create good machine learning systems?</p>
                    <ul class="list-disc list-inside m-5 mt-2 text-lg font-normal">
                        <li>Data preparation capabilities.</li><br/>
                        <li>Algorithms – basic and advanced.</li><br/>
                        <li>Automation and iterative processes.</li><br/>
                        <li>Scalability.</li><br/>
                        <li>Ensemble modeling.</li><br/>
                    </ul>
                </div>
                <img class="w-1/5 h-1/5 m-10 mt-16" src="https://www.sas.com/en_in/insights/analytics/machine-learning/_jcr_content/par/styledcontainer_c92d/par/styledcontainer_69e3/par/image_af10.img.png/1626474997946.png"/>
                <div class="flex flex-col">
                    <p class="text-2xl font-medium m-5 mt-14">Did you know?</p>
                    <ul class="list-disc list-inside m-5 mt-2 text-lg font-normal">
                        <li>In machine learning, a target is called a label.</li><br/>
                        <li>In statistics, a target is called a dependent variable.</li><br/>
                        <li>A variable in statistics is called a feature in machine learning.</li><br/>
                        <li>A transformation in statistics is called feature creation in machine learning.</li><br/>
                    </ul>
                </div>
               </div>
            <div class="flex flex-row justify-around items-center">
                <img class="w-1/5 ml-48" src="/comming-soon.gif"/>
                <div class="flex flex-col m-20 ml-48 text-2xl font-medium w-1/2">
                    <a id="to" href="https://www.datasciencecentral.com/how-machine-learning-is-changing-the-world/" class="hover:underline hover:text-blue-500">Machine learning in today's world</a><br/>
                    <a id="who" href="https://www.salesforce.com/eu/blog/2020/06/real-world-examples-of-machine-learning.html" class="hover:underline hover:text-blue-500">Who's using it?</a><br/>
                    <a id="how" href="https://algorithmia.com/blog/how-machine-learning-works" class="hover:underline hover:text-blue-500">How it works</a>
                </div>
            </div>
           
        
        </div>
    )
}