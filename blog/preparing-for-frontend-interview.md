---
title: '[Did-I-Miss]　Preparing for a front-end interview'
description: "Soon, I will join an interview for the frontend position. This note is used to list and keep what I will learn and exercise."
date_start: "2022/02/18"
date_end: '2022/02/19'
published: true
image: 'https://i.imgur.com/AxItho4.png'
header_image: 'https://i.imgur.com/vbZSvxD.png'
tags: ['Practice', 'Frontend', 'Interview']
priority: 0
link: '/blog/preparing-for-frontend-interview'
slug: preparing-for-frontend-interview
location: 'Hanoi, Vietnam'
---

_**Singapore is the center of technology in ASEAN, and come with that, jobs here have more requirements than VietNam where I live. This note is my preparation for an interview to apply to some companies in Singapore.  
I work as a Fullstack Developer, It seems like I have a lot of things to prepare, and these will help me review my knowledge in whatever position I apply to.**_

_**The main content of this post will about some base knowledge of Javascript, and Angular's Core knowledge, also a bit about Design Patterns and Scalable Design for Frontend Systems.**_

_**Don't overestimate me! I don't remember and know all these ;) but I believe after this post, I will understand them, and also take your appreciation at that time :D Let's learn together!.  
During the reading, please don’t hesitate to notify me of misleading information if you spot a misunderstanding!**_

1. [**Base web knowledge.**](#i-base-web-knowledge)
   * [Session, Cookie, Cache.](#1-session-cookie-cache)
   * [Web Storage](#2-web-storage)
   * [Cors](#3-cors)
   * [RESTful API](#4-restful-api)
   * [SSL](#5-ssl---secure-sockets-layer)
2. [**Javascript.**](#ii-javascript)
   * [How JS work?](#1-how-js-work)
   * [Concurrency & Event Loop](#2-concurrency--the-event-loop)
   * Type Coercion
   * Prototype & Prototype chain
   * Closure
   * Promise & Async/Await
   * Web worker / Service Worker / Worklets
   * DOM / Shadow Dom / Virtual Dom
3. Angular
   * Dependency Injection
   * Change Detection - NgZone
   * Pipe
   * RxJS
   * State Management
   * Optimize
   * View Engine
   * Performance Handling
   * AOT / JIT How they work
   * Webpack & Custom Webpack
   * Scalable Design
   * CI/CD
   * Docker for Frontend

Before going deeply into each section, I want to appreciate my thanks to the sources below, which I usually read, and also use some content from them for this post.  
 
<details>
   <summary><b><u>Sources:</u></b></summary>

   [**1. Javascript sâu sắc - TiepPhan**](https://www.youtube.com/watch?v=dGGCEGi4JWg&list=PL73F-X98U6DvFLRC4dmNjgI9MT8IFQdG3)  
   [**2. How JS work - Sessionstack team**](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)  
   [**3. Javascript Interview Question - sudheerj**](https://github.com/sudheerj/javascript-interview-questions)  
   [**4. 100 Days of Angular - Angular Vietnam**](https://github.com/angular-vietnam/100-days-of-angular)  
   [**5. What-Are-Cookies - Clouldflare**](https://www.cloudflare.com/learning/privacy/what-are-cookies/)  
   [**6. What is ‘CORS’? What is it used for? - Electra Chong**](https://medium.com/@electra_chong/what-is-cors-what-is-it-used-for-308cafa4df1a)  
   [**7. API - REST - RESTfulAPI - Wiki**](https://en.wikipedia.org/wiki/Representational_state_transfer)  
   [**8. Uniform interface REST - inf3rno**](https://stackoverflow.com/questions/25172600/rest-what-exactly-is-meant-by-uniform-interface)

</details>

## I. Base web knowledge

### 1. Session, Cookie, Cache

Essentially, All of them are used for **store the data** and keep track the information provided by a visitor, but their uses are different.

#### Session

After read some post, I believe that [this](https://stackoverflow.com/a/3804387/17103635) explaination is good, and when explain them for fresher or the interviewer. Explain like this will impress and clearly.

>**Because HTTP is stateless**, in order to associate a request to any other request, you need a way to store user data between HTTP requests.
>
>Cookies or URL parameters ( for ex. like http://example.com/myPage?asd=lol&boo=no ) are both suitable ways to transport data between 2 or more request. However they are not good in case you don't want that data to be readable/editable on client side.
>
>The solution is to **store that data server side**, **give it an "id"**, and let the client only know (and pass back at every http request) that id. There you go, sessions implemented. Or you can use the client as a convenient remote storage, but you would encrypt the data and keep the secret server-side.
>
>Of course there are other aspects to consider, like you don't want people to hijack other's sessions, you want sessions to not last forever but to expire, and so on.
>
>In your specific example, the user id (could be username or another unique ID in your user database) is stored in the session data, server-side, after successful identification. Then for every HTTP request you get from the client, the session id (given by the client) will point you to the correct session data (stored by the server) that contains the authenticated user id - that way your code will know what user it is talking to.

This is a long answer. I will summarize some main content which you can glimpse.

* Because HTTP is stateless, we need to associate the last HTTP request with the other  HTTP requests to distinguish each user's browser.
* We can use Cookies or URL parameters but they are readable/ editable.
* The solution is to **store that data server side**, **give it an "id"**, and let the client only know (and pass back at every http request) that id.
* From that session ID, the server maps them to specific data which identifies the user data.
* The **user session** begins when the user logs in to a specific network application and ends when the user logs out of the program, shuts down the machine, or the Session ID get timeout.

#### Cookies

Not like normal people I ussually focus on the core, nature of it. [Here cloudflare anwser](https://www.cloudflare.com/learning/privacy/what-are-cookies/) is the answer I feel enough clearly.

We can get some main content from this:

* **Cookies are small files of information** that a **web server generates** and **sends to a web browser**
* **Web browsers store the cookies they receive** for a predetermined period of time, or for the length of a user's session on a website. Cookies help inform websites about the user (through user info or sser sessions), enabling the websites to personalize the user experience, Tracking the user flow. They will be attach to HTTP request and sendback to server.
* Browser store cookies in a designated file. We can view cookies from browser from dev tool.
* There are some kind of cookies:
  * **Session cookies** helps a website track a user's session. Session cookies are deleted after a user's session ends, so session cookies have no expiration date, which signifies to the browser that they should be deleted once the session is over.
  * **Persistent cookies** remain in a user's browser for a predetermined length of time, which could be a day, a week, several months, or even years. Persistent cookies always contain an expiration date
  * **Authentication cookies** help manage user sessions; they are generated when a user logs into an account via their browser.
  * **Tracking cookies** are generated by tracking services. They record user activity, and browsers send this record to the associated tracking service the next time they load a website that uses that tracking service.
  * **Zombie cookies** regenerate after they are deleted. Zombie cookies create backup versions of themselves outside of a browser's typical cookie storage location. They use these backups to reappear within a browser after they are deleted. Zombie cookies are sometimes used by unscrupulous ad networks, and even by cyber attackers.

#### Cache

>A web cache (or HTTP cache) is an information technology for the temporary storage (caching) of web documents, such as HTML pages and images, to reduce bandwidth usage, server load, and perceived lag. Cache is just a collection of data downloaded to help display a web page.  
Cache expires manually and consumes large space in terms of capacity. Cache does not attach with requests, it use as last response of a request and use until exprise.

### 2. Web Storage

The limit size of cookies is only 4KB, and in some case, user can disable cookies in their browser, so the cookies function cannot work. Besides, cookies always attach to the request; it will take time with the big file.  
Therefore, Web Storage was born.

* Web Storage can store the data from 2MB to 10MB depend on the browser
* Web Storage store at the local but never send to server, so it not impact the bandwidth
* Web Storage is new feature of HTML5 but also support old browser
* Should never store the crucial data as password on Web Storage

There are two kind of Web Storage.

1. **Local Storage**: The data store here will not remove after closing the tab or closing the browser. It is only removed after clearing the history.
2. **Session Storage**: The data of an user session can store here. It is removed after close the tab

### 3. Cors

“CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the [Same-Origin Policy (SOP)](#same-origin-policy-sop).

#### Same-Origin Policy (SOP)

>At the crux of it, **CORS and SOP are both browser policies** that have developed in response to issues of browser security and vulnerabilities.

Did you ever hear about CSRF (Cross-Site Request Forgery) or XSRF? Same-Origin Policy was born to prevent that.

>Before browsers implemented SOP, malicious websites were able to exploit cookies stored by your browser to make unauthorized requests to other domains. Some of these unauthorized requests could do things like make purchases, delete user information, fetch sensitive data, etc. 😱
>
>The **Same-Origin Policy** is a security measure standardized among browsers. The "origin" mostly refers to a "domain". It prevents different origins from interacting with each other, to prevent attacks such as Cross Site Request Forgery.

-_**Of course, SOP cannot prevent all the CSRF attack, but atleast It can prevent CSRF in some case.**_

#### Cross Origin Resources Sharing

As mentioned above, SOP prevents us to send a request to your APIs in browsers. So, How can we public our API to some specific domain, or public for everyone?
At last, we’ve arrived at CORS.
 
>CORS allows servers to specify certain trusted ‘origins’ they are willing to permit requests from. Origins are defined as the combination of protocol (http or https), host (a domain like www.example.com or an IP address) and port. Browsers which implement the CORS policy will include a HTTP header called ‘Origin’ in requests made with AJAX, including above information the value.

#### Simple requests - CORS

> 1. To instruct the browser to expose server responses to a HTTP requests from certain origin, the web server must respond to the request with an additional HTTP response header, ‘Access-Control-Allow-Origin: `<origin>`.
> 2. Alternatively, the web server may expose its responses to all origins by specifying a value of ‘*’, e.g. ‘Access-Control-Allow-Origin: *’.

#### Preflight requests - CORS

>This might be sufficient for simple GET, HEAD, or POST requests without any special http headers. However, for DELETE and PUT request, ‘unsafe’ requests which may impact the server’s data, or GET, HEAD and POST requests with customized headers, **the browser will send a “preflight” request to find out the CORS result prior to sending the actual request** (only if the preflight response determines access is permitted).

>The preflight request is an OPTIONS request made to the same HTTP path as the actual request, with a couple of HTTP headers: Origin, Access-Control-Request-Method, Access-Control-Request-Headers  
And the Server if support CORS will response to the preflight request with headers: Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers.

Usually, all of these will be automatic if we enable CORS on Backend-side, we just need to add headers to the request, and the browser will auto create a preflight request for us.

### 4. RESTful API

#### API - Application Programming Interface

1. API is a type **Software Interface**, **offering a service to other pieces of software**.
2. While User Interface connects a computer/software with the person, an API of software allowed other software to connect with it.
3. Purpose of APIs is to **hide the internal details** of how a system works, and exposing only those parts a programmer will find useful and should to know.

#### REST (REpresentational State Transfer)

1. REST is **a software architectural style** that was created to **guide the design and development of the architecture for the World Wide Web**.
2. REST **defines a set of constraints** for how the architecture of an Internet-scale distributed hypermedia system, **such as the Web, should behave.**

**Below is some of REST constrains:** It's quite long, but I will only note some main concept.

* **Client–server architecture - The client-server design pattern:** separation of concerns, separating the user interface concerns from the data storage concerns.
* **Statelessness:** no session information is retained by the receiver, usually a server.
* **Cacheability:** Clients and intermediaries can cache responses. Responses must, implicitly or explicitly, define themselves as either cacheable or non-cacheable.
* **Layered system:** We can have a lot of intermediaries along the way. Client and Server don't need to know about them. We can increase the number of intermediaries to improve security but it does not impact the source code of both client and server.
* **Code on demand (optional):** Can change User Interface from Server
* **Uniform interface:** The uniform interface constraint is fundamental to the design of any RESTful system. It simplifies and decouples the architecture, which enables each part to evolve independently.
  * **Identification of resources** - You use the URI (IRI) standard to identify a resource. In this case, a resource is a web document.
  * **Manipulation of resources through these representations** - You use the HTTP standard to describe communication. So for example GET means that you want to retrieve data about the URI-identified resource. You can describe an operation with an HTTP method and a URI.
  * **Self-descriptive messages** - You use standard MIME types and (standard) [RDF vocabs](https://developer.mozilla.org/en-US/docs/Glossary/RDF) to make messages self-descriptive.
  * **Hypermedia as the engine of application state** (a.k.a. HATEOAS) - You use hyperlinks and possibly URI Parameters, to decouple the client from the application-specific URI structure. You also can annotate these hyperlinks with semantics. Like this [Example](https://developer.mozilla.org/en-US/docs/Glossary/RDF).

**So after understanding about API and REST, we come to RESTful API**

  #### RESTful API

1. RESTful API is a principle to designing API and conform the REST constraints and REST architectural style, and allows for interaction with RESTful web services.
2. 5 HTTP method: GET, PUT, POST, PATCH and DELETE suitable to perform action in a REST system. But people usually use CRUD: POST, GET, PUT, DELETE.
3. RESTful API don't use `session` and `cookie`, they use `access_token` with each request.
4. Nowadays, People like to use JSON format for the response body of RESTful API, however, some systems also use XML format, it depends on your design.

### 5. SSL - Secure Sockets Layer

#### What problem did SSL solved?

If you already learn about Two-way Encryption in school, you may know that it have two key: `public_key` and `private_key`, first one to encrypt, and second one to decrypt
Before SSL was created, the data package is just sent without encryption from the client (user) to the server, it was called HTTP. And this is a risk, cause data packages can be captured by the computer in the same network (If you learned to use Wireshark at University in the Network class, you may know that we can capture and read the content of data packages). This technique was called Man-In-The-Middle (MitM).

Essentialy, SSL was born to solve this issue, by generate to two key, `public_key` and `private_key`.
So flow will look like that.

<p align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/21PGTQo.png"/>
</p>

In the step 3, if your SLL cert is not provided by a trusted CA, you will see some thing like this.

<p align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/gZoy9tS.png"/>
</p>

If this happens, although your browser warned, your connection is still encrypted. The browser warns just because it wants to notify you that: "because your SSL is not provided by a trust CA, or it cannot detect the CA, so it cannot assurance that your connection is secured."

#### => By appling SSL/TLS to HTTP, it become HTTPS. That all

>Note : TLS is a successor of SSL. They have many differences, about handsakeing ways, protocol, algorithm behind..etc. But they are created for same purposed.
Some people still call them are "**SSL certificates**" and some also call "**TLS certificates**".

## II. Javascript

### 1. How JS work?

#### There are some JavaScript Engine

* **V8** from Google is the most used JavaScript engine.
* **SpiderMonkey** is developed by Mozilla.
* **JavaScriptCore** is Apple's engine for its Safari browser.
* **Chakra** is the engine of the Internet Explorer browser

and they are consists of two main components:

* **Memory Heap** — this is where the memory allocation happens
* **Call Stack** — this is where your stack frames are as your code executes

<p align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/kt29GU5.png"/>
</p>

#### Runtime

>There are APIs in the browser that have been used by almost any JavaScript developer out there (e.g. “setTimeout, setInterval”). Those APIs, however, are not provided by the Engine.  
>So, where are they coming from?
>
> We have those things called **Web APIs** which are provided by browsers, like the DOM, AJAX, setTimeout and much more.

**Q?**: My question, **if `setTimeout()` is WebAPIs, how it can work in NodeJs?**

NodeJS also give a module called The Timers module. And this module contains functions that execute code after a set period of time like `setTimeout()`, `setImmediate()`, `setInterval()`

#### Call Stack

>JavaScript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time.
>
>The Call Stack is a data structure which records basically where in the program we are.
>
>If we step into a function, we put it on the top of the stack. If we return from a function, we pop off the top of the stack. That’s all the stack can do.
>
>Let’s see an example. Take a look at the following code:
```javascript
function multiply(x, y) {
    return x * y;
}
function printSquare(x) {
    var s = multiply(x, x);
    console.log(s);
}
printSquare(5);
```
>When the engine starts executing this code, the Call Stack will be empty. Afterwards, the steps will be the following:

<p align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/mtmSqDj.png"/>
</p>

**I note some main content**.

* JavaScript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time.
* The Call Stack is a data structure which records basically where in the program we are.
* Each entry in the Call Stack is called a Stack Frame.
* By stack it help us to trace the exception. In case stack overflow mean that the function was push to much into stack and out of space.

Trace exception:
```javascript
function foo() {
    throw new Error('SessionStack will help you resolve crashes :)');
}
function bar() {
    foo();
}
function start() {
    bar();
}
start();
```
<p align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/bc55B5p.png"/>
</p>

Stack overflow
<p align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/IcELMT6.png"/>
</p>

>... running on a single thread is quite limiting as well. Since JavaScript has a single Call Stack, **what happens when things are slow?**. It will cause page unresponsive.

<p align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/MDRKjFn.jpg
"/>
</p>

To avoid that, we should use asynchronous callbacks or service workers.


### 2. Concurrency & the Event Loop



