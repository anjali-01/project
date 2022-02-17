import React from 'react'
import Cloud from './cloud'

export default function securingCloud(){
    return (
        <div class="flex flex-col">
            <Cloud/>
            <div class="p-16 pl-44 pr-44">
                <p class="text-4xl">What is cloud security?</p><br/>
                <p class="text-lg">Cloud security is the set of strategies and practices for protecting data and applications that are hosted in the cloud. Like cyber security, cloud security is a very broad area, and it is never possible to prevent every variety of attack. However, a well-designed cloud security strategy vastly reduces the risk of cyber attacks.<br/><br/>Even with these risks, cloud computing is often more secure than on-premise computing. Most cloud providers have more resources for keeping data secure than individual businesses do, which lets cloud providers keep infrastructure up to date and patch vulnerabilities as soon as possible. A single business, on the other hand, may not have enough resources to perform these tasks consistently.</p><br/>
                <p class="text-4xl">What is a cloud firewall?</p><br/>
                <p class="text-lg">A cloud firewall is a security product that, like a traditional firewall, filters out potentially malicious network traffic. Unlike traditional firewalls, cloud firewalls are hosted in the cloud. This cloud-delivered model for firewalls is also called firewall-as-a-service (FWaaS).<br/><br/>Cloud-based firewalls form a virtual barrier around cloud platforms, infrastructure, and applications, just as traditional firewalls form a barrier around an organization's internal network. Cloud firewalls can also protect on-premise infrastructure.</p><br/>
                <img class="w-1/2 h-1/2" src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/6PHPUzCNbJlj3PRyojwy74/bf4c52fe45fc597965985f1dcabc7a68/cloud-firewall.svg"/><br/>
                <p class="text-4xl">Definition of a firewall</p><br/>
                <p class="text-lg">A firewall is a security product that filters out malicious traffic. Traditionally, firewalls have run in between a trusted internal network and an untrusted network – e.g., between a private network and the Internet. Early firewalls were physical appliances that connected to an organization's on-premise infrastructure. Firewalls block and allow network traffic according to an internal set of rules. Most firewalls allow administrators to customize these rules.</p><br/>
                <img class="w-1/2 h-1/2" src="https://www.cloudflare.com/resources/images/slt3lc6tev37/5wfmLijgWmcfy3AqBkmYKc/7d52f8a30aec966d734bf17a0f14573a/what-is-a-firewall.svg"/><br/>
                <p class="text-lg">The border between a trusted network and the Internet is called the "network perimeter." However, with the growing popularity of cloud computing, the network perimeter is mostly gone. Thus, cloud firewalls that form a virtual barrier between trusted cloud assets and untrusted Internet traffic are increasingly important.</p>

            </div>
        </div>
    )
}
