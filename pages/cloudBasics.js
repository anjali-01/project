import React from 'react'
import Cloud from './cloud'

export default function cloudBasics(){
    return (
        <div class="flex flex-col">
            <Cloud/>
            <div class="p-16 pl-44 pr-44">
            <p class="text-4xl">What are the main models of cloud computing?</p><br/>
                 <img class="w-1/2 h-1/2" src="https://www.cloudflare.com/img/learning/serverless/glossary/platform-as-a-service-paas/saas-paas-iaas-cloud-pyramid.svg"/><br/>
                <p class="text-4xl">What is Software-as-a-Service (SaaS)?</p><br/>
                <p class="text-lg">Software-as-a-Service, or SaaS for short, is a cloud-based method of providing software to users. SaaS users subscribe to an application rather than purchasing it once and installing it. Users can log into and use a SaaS application from any compatible device over the Internet. The actual application runs in cloud servers that may be far removed from a user's location.</p><br/>
                <div class="flex flex-row justify-between">
                    <img class="w-2/5 h-3/5" src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/lFmdhi3Yhkb9IoMGcviQd/20f9e97bc317146a3a2d7793f3a586a8/saas-application-vs-on-premises.svg"/>
                    <img class="w-2/5 h-3/5" src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/nYGOTtGurrQP09eqHsPPc/061e3045461d9fcea702db8ae9a45a67/saas-application-remote-access.svg"/><br/>
                </div>
                <p class="text-4xl">What does Infrastructure-as-a-Service (IaaS) mean?</p><br/>
                <p class="text-lg">In computing, infrastructure refers to the computers and servers that run code and store data, and the wires and appliances that make connections between those machines. For example, servers, hard drives, and routers are all part of infrastructure. Before cloud computing was an option, most businesses hosted their own infrastructure and ran all their applications on-premises.</p><br/>
                <img class="w-3/4 h-1/2" src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/1cUsX1FkuV4nqabFbYRhDF/b4fc95517aacbc63172719bef7aa9128/infrastructure-as-a-service-iaas.svg"/><br/>
                <p class="text-lg">Infrastructure-as-a-Service, or IaaS for short, is when a cloud computing vendor hosts the infrastructure on behalf of their customers. The vendor hosts the infrastructure in "the cloud" – in other words, in various data centers. Their customers access this cloud infrastructure over the Internet. They can use it to build and host web applications, store data, run business logic, or do anything else that could be done on traditional on-premises infrastructure, but often with more flexibility.</p><br/>
                <p class="text-4xl">What is cloud storage?</p><br/>
                <p class="text-lg">Cloud storage is a method of data storage and organization that takes place in the cloud, a network of remote servers that can be accessed over an Internet connection. With cloud-based storage, users and businesses can store, access, and maintain their data from any location that offers an Internet connection, rather than confining their files to a single location or device.<br/><br/>Before cloud computing was common, users maintained their data on a personal hard drive or on-premise data center, limiting their use of that data to one location. Think of it like choosing to invest in a landline rather than a mobile phone. As long as the user is inside their house, they’re able to get to the phone whenever it rings, but as soon as they leave their property, they become unreachable. With a mobile phone, however, they can answer a call from any location.<br/><br/>It works the same way with cloud storage. Users no longer have to stay home (or inside their office building) in order to access their data 24/7; instead, they can take their files on the go without lugging around expensive and limited hardware.</p><br/>
                
                
                 
            </div>
        </div>
    )
}
