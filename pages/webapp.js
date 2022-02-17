import React from 'react';
export default function App(){
    // function generateReport(){
    //     window.location.href = '#DivIdToScroll';
    // }
    return (
        <div class="bg-gray-200">
            <div class="fixed top-0 left-0 right-0 flex flex-row bg-gray-800 justify-between items-center p-2 gap-3">
            <a href="/"><div class="flex flex-row gap-3 items-center  ml-3">
                    <img src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/45/000000/external-technology-artificial-intelligence-and-machine-learning-parzival-1997-flat-parzival-1997.png"/>
                    <p class="text-4xl text-white">Title</p>
                </div></a>
                <div class="mr-3 ">
                    <a href="#"></a>
                    <img src="https://img.icons8.com/bubbles/70/000000/github.png"/>
                </div>
            </div>
            <div class="fixed top-16 left-0 right-0 mt-3 flex flex-row justify-around bg-gray-300 items-center gap-4 ">
                <div>
                    <p class="font-medium">Page Contents»»</p>
                </div>
                <div class=" flex flex-row justify-end gap-4 p-2">
                    <a class="underline underline-offset-2 hover:text-blue-500" href="#DivIdToScroll">What it's about?</a>
                    <a class="underline underline-offset-2 hover:text-blue-500" href="#Types">Types</a>
                    <a class="underline underline-offset-2 hover:text-blue-500" href="#Frameworks">Frameworks</a>
                    <a class="underline underline-offset-2 hover:text-blue-500" href="#Steps">The 7 Steps</a>
                    <a class="underline underline-offset-2 hover:text-blue-500" href="#conclusion">Conclusion</a>
                </div>
            </div>
            <div class="flex flex-col ml-40 mt-1 items-start mr-40 p-5 border-2 border-gray-200 bg-white">
                <p class="text-4xl font-normal">Web App Development in 2022: Everything You Need to Know</p>        
                <div>
                <img src="/webapp.png"/>
                </div>
                <p class="text-xl font-light">Web app development empowers web-based projects to perform and act similarly to a mobile app.Web applications engage users, prioritizing responsive interactions,but are still delivered through the internet over a network. </p><br/>
                <p class="text-xl font-light">You can say that web app development is more or less the cool little brother of web development. Web development is why you’re on this very web page, but web app development is how all this got written in the first place. </p>
                <p class="text-xl font-light">Both are important, but knowing the difference will help you understand what web app development is as well as whether or not it sounds like a good idea for your business. </p><br/>
                <p id="DivIdToScroll" class="text-3xl font-normal">What Is a Web Application?</p><br/>
                <p class="text-xl font-light"><i>"A web application is an interactive app built using web development technologies that users can access from their browser."</i> </p><br/>
                <p class="text-xl font-light">Web apps have the typical front-end and back-end web development technologies. In theory, web apps are closely related to websites, thus web app development and web development share many characteristics.
                    On the front-end, for instance, web app developers utilize JavaScript, CSS, and HTML.<br/> The back-end for web apps might similarly use the same server-side languages developers use to build websites such as Ruby or Python. 
                    However, web apps operate on any device in a mode that is distinctly different than that of a traditional website. </p>
                <img src="https://lh4.googleusercontent.com/XIupBNaFa2px9Q2Hir74fkWLQ-eTVjmgD3LDNbfZMJCjsztzLrcI_sbhNbrmkDNL5BVrR4-pxYgqNPs8CuF9ryKSjEUQm4vFGqMRxZI-EkA9VRcOnZGLQOCVjX6fHEVDRZ6qvNHT"/>
                <br/>
                <p class="text-2xl font-normal">What's the Difference Between a Web App and a Wesbite?</p>
                <p class="text-xl">Web apps are designed to be interactive whereas a website’s primary purpose is to present information. </p><br/>
                <p class="text-3xl font-normal">What Are Progressive Web Apps (PWAs)?</p><br/>
                <p class="text-xl font-light">Progressive web apps (PWAs) are a particular type of web app that is fairly modern in the digital world. PWAs combine desirable features of both native and hybrid apps. </p>
                <br/><p class="text-xl font-light">Like any web app should, PWAs reside in a web browser. Users can access PWAs there like any website. 
                    Still, having a PWA means going through the classic download and install process that users expect with mobile apps. But this is a good thing as PWAs can always be readily available from the user’s device. 
                    Both the Google Play Store and the Microsoft Store welcome PWAs to their platform. So in some ways, a PWA is like a mobile app. </p><br/>
                <p class="text-3xl font-normal" id="Types">3 Types of Web Applications</p><br/>
                <p class="text-xl font-light">There are different types of web applications with different behaviors depending on how they’re built. While all these web application types still use web technologies they generally fall under the categories of client-side, server-side, or single-page applications. </p><br/>
                <p class="text-3xl font-normal">Client-Side Web Apps</p><br/>
                <p class="text-xl font-light">Client-side web apps are dominant in front-end development, meaning the user interface (UI) is the focus of these types of apps. They tend to prioritize UX and bring users high-performance levels. 
                    Any data or business logic that the app might use to function is dynamically loaded at start-up. 
                    As a result of client-side rendering, there is little to no buffering time for loading a page. This speeds up interactions with content, making the page markedly responsive. </p>
                <br/>
                <p class="text-3xl font-normal">Server-Side Web Apps</p><br/>
                <p class="text-xl font-light">Server-side software is essentially synonymous with back-end development. Back-end development is composed of building the databases, servers, application programming interfaces (APIs), and any other background processes that occur in an application. 
                     Though server-side applications by and large still display content and/or UIs, the most dynamic of code resides in the web server. 
                        Server-side rendering (SSR) works well with static content as it can take some time for the web browser to send a request to the server and await an answer. 
                        On the bright side, server-side web apps are normally more secure and offer more browser compatibility than client-side web apps. </p><br/>
                <p class="text-3xl font-normal">Single-Page Apps</p><br/>
                <p class="text-xl font-light">A single-page application (SPA) differs from a traditional multi-page application where new pages load only when you click a link. Instead, SPAs have desirable advantages of both client-side apps and server-side apps. 
                        SPAs wield their power from only one page, typically deploying an infinite scroll mechanism to display all its content. 
                        Despite the fact that server-side rendering holds associations with long wait times, JavaScript frameworks like React, Vue.js, and Angular use dynamic routing to fetch only the data that is necessary at any given time. 
                        Many web developers or web app developers exercise this faculty of SSR to build SPAs that do not require the entire page to reload in order to execute an action or fetch new data. </p><br/>
                <img src="https://lh5.googleusercontent.com/IVKau5lxToeGymAAcn01SPO80mPj2pOCY-iNXh0kA5bBwX2U11Xp9-PLOWWKbfRqLq6T12NS3QSDKuoy4xED6P27H90vc04jH2kU1DVzYys5rZgvhfPGQO54Sz6o9lw2Evix-fuO"/>
                <p class="text-lg font-normal"><i>Client-side, server-side, and single-page applications each approach development differently.</i></p><br/>
                <p class="text-3xl font-normal" id="Frameworks">Web Apps Frameworks & Other Technologies</p><br/>
                <p class="text-lg font-light">For full-stack web app development, your business will need the right front-end and back-end tools to see the process through. The frameworks and technologies below will be amply useful for building your web app. </p><br/>
                <p class="text-2xl font-normal">Front-End</p><br/>
                <p class="text-lg font-light">On the front-end, the tools you should use for web app development and web development have remained roughly the same for a quarter of a century. But at the very least, you can bet they’re reliable!</p><br/>
                <p class="text-2xl font-light">➼ JavaScript </p>
                <p>JavaScript is the principal client-side programming language for any type of web development. And nearly 100% of web developers use JavaScript for coding client-side behaviour into their website or web application. 
                    This is because JavaScript allows developers to build dynamic websites. Basic functionality like scrolling bars and clickable buttons are all the spawn of JavaScript programming. </p><br/>
                <p class="text-2xl font-light">➼ HTML</p>
                <p>HTML is another core technology of web development. HyperText Markup Language (HTML) is responsible for structuring the content of a web page. 
                    A series of HTML elements describe to a web page how to display text, images, and in the latest version of HTML — HTML 5 — audio and video as well.</p><br/>
                <p class="text-2xl font-light">➼ CSS</p>
                <p>Cascading Style Scripts (CSS) is a language for denoting the presentation of a web page. Just like JavaScript and HTML, it is a foundation technology making the World Wide Web what it is today. 
Colors, layouts, and fonts are some of the integral characteristics of a web page or web app. CSS invokes these characteristics. </p><br/>
                <p class="text-2xl font-normal">Back-End</p><br/>
                <p class="text-lg font-light">Back-end development features a wider range of technologies as back-end development comprises several components such as server-side programming, databases, web servers, and APIs. </p><br/>
                <p class="text-2xl font-light">➼ Programming Languages</p>
                <p>Server-side or back-end programming languages must handle the functionality of a web app that takes place behind the scenes. 
Back-end web development can involve working with databases to send and receive data from one end to the other, managing user connections and security authentications, and ultimately empowering the web application to perform as it should. </p>
                <p>Java, Python, Ruby, and PHP are some of the most popular back-end languages. Many tech companies use more than just one of these languages but still, many side-by-side comparisons exist to examine their utility. 
There are also back-end web frameworks to simplify software development. Django and Ruby on Rails have become increasingly well-known in the web development community. </p>
                <p class="text-2xl font-light">➼ Databases</p>
                <p>Databases store the data of an application. Back-end developers should be familiar with query languages that are able to request and retrieve data using queries. 
Structured Query Language (SQL) is the go-to query language for the common web developer. SQL has many extensions or related versions extending additional functionality like MySQL, PostgreSQL, and Oracle.</p><br/>
                <p class="text-2xl font-light">➼ Servers</p>
                <p>Servers respond to network requests. Through the internet connection of a web application, a server retrieves information based on client requests and then serves the client — that is, you, your computer, or mobile device — whatever it is that you asked for. 
While there isn’t a specific language for servers, all of the technologies that make up back-end development should absolutely have a good relationship with the servers they work with. 
Web servers of note include Apache, Nginx, and Internet Information Services (IIS). </p><br/>
                <p class="text-2xl font-light">➼ APIs</p>
                <p>APIs facilitate connections between two or more software systems. An API integration is what fuels your Google Home’s communication with your Spotify playlist, for instance, or eBay’s collaboration with PayPal.
Again, APIs do not have a domain-specific language. Instead, developers create APIs using other back-end technologies and share them publicly with other developers or keep them closed to the organization they work for.</p><br/>
                <p class="text-3xl font-normal" id="Steps">7 Steps To Developing Web Applications</p><br/>
                <p class="text-2xl font-light">1. Define Your Problem</p>
                <p>Defining the problem you wish to solve or identifying exactly why you want consumers to use your web app is the first step in developing your web application. 
People come up with new ideas all the time but is an idea really worth implementing if it doesn’t provide clever solutions to an existing issue?</p><br/>
                <p class="text-2xl font-light">2. Plan the Workflow </p>
                <p>A workflow can establish a means of systematic organization for the various aspects of your web application development. Think about what your web app will consist of and how to meet those requirements using your resources and budget.
Because this is software development, your workflow should be both business-oriented and technical. 
Adjust accordingly for the time frame in which you want your web app development to be completed. Create algorithms that will meticulously move your development forward. </p><br/>
                <p class="text-2xl font-light">3. Prototype Your Web App</p>
                <p>Prototyping involves building an incomplete yet functional application to better understand what your final product might look like. In software development, a prototype is akin to a minimum viable product (MVP).</p><br/>
                <p class="text-2xl font-light">4. Validate Your Prototype</p>
                <p>The idea is that your prototype should be impressive enough to give you the validation you need to continue your project knowing that people are already interested in what you have in store. 
To do this, validate your prototype by presenting your web app to potential users. Gather feedback and work from there.</p>
                <p class="text-2xl font-light">5. Build Your App</p>
                <p>Research the software you should have ready at the helm to build your app. Consider which front-end and back-end frameworks and technologies can competently fulfill the requirements of your project. 
Once you have found all your tools, it’s time to start developing. Build your web app!</p><br/>
                <p class="text-2xl font-light">6. Test Your App</p>
                <p>Hopefully, testing your web application goes without saying. Many software development teams administer tests throughout the development life cycle, ensuring that each iteration of your web app is bug-free. 
Software quality assurance is likewise an important part of building a web application. And this should happen before you release your app to the public.</p><br/>
                <p class="text-2xl font-light">7. Host & Launch Your Web Apps</p>
                <p>In the same fashion as a website, a web app must be hosted on a web server. That means putting your web app into action requires purchasing a domain name and a hosting provider on the cloud.</p><br/>
                <p class="text-3xl font-normal" id="conclusion">Conclusion</p>
                <p class="text-xl">Web app development is an idiosyncratic subset of web development that doesn’t quite align with what you’d expect from a website nor a mobile app. </p><br/>
                <p class="text-lg font-light">There are several types of web apps. Aside from the game-changing progressive web apps, there are client-side web apps, server-side web apps, and even single-page applications.
Web apps are built using a combination of front-end and back-end technologies, and this alongside the software development process itself does not veer far from standard web development. 
In fact, it’s probably the case that you’re already very much in the know about several prominent web apps that are in frequent use across the web. </p>
            </div>
        </div>
    )
}
