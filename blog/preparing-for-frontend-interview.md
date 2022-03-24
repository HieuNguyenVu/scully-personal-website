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

_**I work as a Fullstack Developer, And because I didn't focus specifically on anything from the start of my career path, It seems like I have a lot of things to re-learn and prepare. I don't nervous too much about the new technical/ framework. I just worry about the core thing that I was misunderstood or I the things should know but I don't know. This note is my preparation for an interview to apply to my next job. And maybe I will review and update it in the future**_

_**The main content of this post will about some base knowledge of Javascript, and Angular's Core knowledge, also a bit about Design Patterns and Scalable Design for Frontend Systems.**_

_**Don't overestimate me! I don't remember and know all these :grinning: but I believe after this post, I will understand them, and also take your appreciation at that time :smile: Let's learn together!.  
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
   * [Promise & Async/Await](#3-promise--asyncawait)
   * [Type Coercion](#4-type-coercion)
   * [Prototype & Prototype chain](#5-prototype--prototype-chain)
   * [Scope & Scope chain](#6-scope--scope-chain)
   * [Closure](#7-closure)
   * [Web worker / Service Worker / Worklets](#8-web-worker---service-worker---worklets)
   * [DOM / Shadow Dom / Virtual Dom](#9-dom--shadow-dom--virtual-dom)
3. Angular
   * Dependency Injection
   * Change Detection - NgZone
   * Pipe
   * Directive
   * Decorator
   * Content Projection
   * RxJS
   * State Management
   * View Engine
   * AOT / JIT How they work
   * Webpack & Custom Webpack
   * Optimize
   * Performance Handling
   * CI/CD
   * Scalable Design
   * Docker for Frontend

Before going deeply into each section, I want to appreciate my thanks to the sources below, which I usually read, and also use some content from them for this post.  
 
<details>
   <summary><b><u>Sources:</u></b></summary>

   [**1. Series How JS work - Sessionstack team**](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)  
   [**2. Javascript Interview Question - sudheerj**](https://github.com/sudheerj/javascript-interview-questions)  
   [**3. 100 Days of Angular - Angular Vietnam**](https://github.com/angular-vietnam/100-days-of-angular)  
   [**4. What-Are-Cookies - Clouldflare**](https://www.cloudflare.com/learning/privacy/what-are-cookies/)  
   [**5. What is ‘CORS’? What is it used for? - Electra Chong**](https://medium.com/@electra_chong/what-is-cors-what-is-it-used-for-308cafa4df1a)  
   [**6. API - REST - RESTfulAPI - Wiki**](https://en.wikipedia.org/wiki/Representational_state_transfer)  
   [**7. Uniform interface REST - inf3rno**](https://stackoverflow.com/questions/25172600/rest-what-exactly-is-meant-by-uniform-interface)
   [**8. Type Coercion**](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
   [**9. Prototype & Prototype chain**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
   [**10. Closures & Lexical scoping**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures?retiredLocale=vi)
   [**11. Webworkers**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

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

<figure align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/21PGTQo.png" alt="How does SSL handshaking"/>
      <figcaption>Fig.1 - How does SSL handshaking.</figcaption>
</figure>

In the step 3, if your SLL cert is not provided by a trusted CA, you will see some thing like this.

<figure align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/gZoy9tS.png" alt="Error when SSL cert invalid"/>
    <figcaption>Fig.2 - Error when SSL cert invalid.</figcaption>
</figure>

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

<figure align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/kt29GU5.png" alt="JS components"/>
    <figcaption>Fig.3 - JS components.</figcaption>
</figure>

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

<figure align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/mtmSqDj.png" alt="How callstack work"/>
    <figcaption>Fig.4 - How callstack work.</figcaption>
</figure>

**I note some main content**.

* JavaScript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time.
* The Call Stack is a data structure which records basically where in the program we are.
* Each entry in the Call Stack is called a Stack Frame.
* By stack it help us to trace the exception. In case stack overflow mean that the function was push to much into stack and out of space.

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
<figure align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/bc55B5p.png" alt="Tracing a exception"/>
    <figcaption>Fig.5 - Tracing a exception.</figcaption>
</figure>

<figure align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/IcELMT6.png" alt="Stack overflow"/>
    <figcaption>Fig.6 - Stack overflow.</figcaption>
</figure>

>... running on a single thread is quite limiting as well. Since JavaScript has a single Call Stack, **what happens when things are slow? Or they take a huge amount of time to be processed**. It will cause page unresponsive...

<figure align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/MDRKjFn.jpg" alt="Browser unresponsive"/>
    <figcaption>Fig.7 - Browser unresponsive.</figcaption>
</figure>

To avoid that, we should use asynchronous callbacks or service workers.

### 2. Concurrency & the Event Loop

#### Concurrency

> While the Call Stack has functions to execute, the browser can’t do anything else — it’s being blocked. This means that the browser can’t render, it can’t run any other code, it’s just stuck. And here comes the problem — your app UI is no longer efficient and pleasing. Your app is stuck.

In the example of Call Stack above. I was use functions and Web APIs as the Stack Frame(unit to push on Call Stack). Essentially, Stack Frame is the blocks `{...}`, and popullarity of block is a function.

To solve and prevent the application stucking, programing have a concept call asynchronous.

>...tasks that cannot complete now are, by definition, going to complete asynchronously, which means you won’t have the above-mentioned blocking behavior as you might have subconsciously expected or hoped for.

```javascript
// ajax(..) is some arbitrary Ajax function given by a library
var response = ajax('https://example.com/api');

console.log(response);
// `response` won't have the response
```

And because we don't know when the `async` task is complete, To waiting and take an action after an `async` task is complete, It usually use with `callback function` which is a function will call after an `async` task complete.

```javascript
ajax('https://example.com/api', function(response) {
    console.log(response); // `response` is now available
});
```
Of course we can actually make a `synchronous` Ajax requests, however never do that.
>If you make a synchronous Ajax request, the UI of your JavaScript app will be blocked — the user won’t be able to click, enter data, navigate, or scroll. This would prevent any user interaction. It’s a terrible practice.
That why an `await` must be use in an `async` function.  

```javascript
// This is assuming that you're using jQuery
jQuery.ajax({
    url: 'https://api.example.com/endpoint',
    success: function(response) {
        // This is your callback.
    },
    async: false // And this is a terrible idea
});

```
Beside of ajax request, I just use ajax as an example, you also can use others way (ex: setTimeout).

Cause we know that we have only a Stack, and stack is fist-in-last-out. How it can prioritize **`sync`** task before the **`async`** task?

#### Event loop

Before going deeply into the content of the event loop, I believe that we should make clear some items below, which I get from the [blog](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5) of Sessionstack team.

1. Until ES6, JS actually never had any direct concept about asynchronicity built into it.
2. The **`JS engine`** has never done anything more than execute a single chunk of your program at any given moment.
3. The **`JS Engine`** runs inside a **`hosting environment`**, which for most developers is the typical web browser or Node.js
4. Every single device, browser represents a different type of **`hosting environment`** for the **`JS Engine`**.
5. Whether it's any **`hosting environment`**, they have the same common built-in mechanism called the **`event loop`**.
6. **`Event loop`** handles the execution of multiple chunks of your program over time, each time invoking the JS Engine.

Pretty obvious isn't it?

>This means that the JS Engine is just an on-demand execution environment for any arbitrary JS code. It’s the surrounding environment that schedules the events (the JS code executions).

>The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it.  
>Such an iteration is called a **`tick`** in the Event Loop. Each event is just a function callback.

```javascript
console.log('Hi');
setTimeout(function cb1() { 
    console.log('cb1');
}, 5000);
console.log('Bye');
```
Let’s “execute” this code and see what happens:

<figure align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/587irzf.gif" alt="Tracing a exception"/>
    <figcaption>Fig.8 - Tracing a exception.</figcaption>
</figure>

>It’s interesting to note that ES6 specifies how the event loop should work, meaning that technically it’s within the scope of the JS engine’s responsibilities, which is no longer playing just a `hosting environment` role.

>**One main reason for this change is the introduction of Promises in ES6 because the latter require access to a direct**, fine-grained control over scheduling operations on the event loop queue (we’ll discuss them in a greater detail later).

### 3. Promise & async/await

#### Job Queue

From the ES6, They introduced a new concept called **`Job Queue`**. I had read some post, but they dont talk detail about it. I recommend you should read a post from Session blog, cause all summary items bellow is take from that.

1. **`Job Queue`** is a layer on top of the Event Loop queue.
2. It was born to dealing with the asynchronous behavior of **`Promise`** from ES6.
3. The **`Job Queue`** is a queue that’s attached to the end of every tick in the Event Loop queue. (**Tick** is each time event loop check and take first callback from callback queue)
4. An async action that may occur during a tick of the event loop will not cause a whole new event, and it will not to append into the event loop. Instead of that, It will add in to the **`Job Queue`**.
5. By add to the **`Job Queue`**, the **`tick`** will be finish only the **`Job Queue`** empty. And only after a **`tick`** finished, the new stick will be run, and the **`callback`** will be take out from **`callback`** queue.

#### Promise

Cause promise is the basic content every frontend developer should know. So I just mark some points.

>1. Once a Promise is resolved, it stays that way forever — it becomes an immutable value at that point — and can then be observed as many times as necessary.
2. If at any point in the creation of a Promise, or in the observation of its resolution, a JavaScript exception error occurs, such as a TypeError or ReferenceError, that exception will be caught, and it will force the Promise in question to become rejected.
3. If an exception thrown inside the Promise creating function, it will be rejected, if an exception throw in promise handling function, handling uncaught exceptions by using **`.catch()`**

#### Async / Await

>JavaScript ES8 introduced async/await that makes the job of working with Promises easier.

1. When an **`async`** is called, it returns a **`Promise`**. If the return value is not a **`Promise`**, a **`Promise`** will be automatically created and it will be resolved with the returned value from the function.
2. When the **`async`** function throws an exception, the **`Promise`** will be rejected with the thrown value.
3. An **`async`** function can contain an **`await`** expression, that pauses the execution of the function and waits for the passed Promise’s resolution, and then resumes the async function’s execution and returns the resolved value.
4. The **`await`** keyword can only be used in **`async`** functions .

```javascript
// Just a standard JavaScript function
function getNumber1() {
    return Promise.resolve('374');
}
// This function does the same as getNumber1
async function getNumber2() {
    return 374;
}

// This function show how to use await
async function getNumber3() {
    let num1 = await getNumber1();
    return num1;
}
```

### 4. Type Coercion

>Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).

```javascript
const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum); // 59
```

#### Explicit coercion

>When a developer expresses the intention to convert between types by writing the appropriate code, like `Number(value)`, it’s called explicit type coercion (or type casting).

#### Implicit coercion

>Since JavaScript is a weakly-typed language, values can also be converted between different types automatically, and it is called implicit type coercion.
It usually happens when you apply operators to values of different types, like `1 == null`,` 2/’5'`, `null + new Date()`, or it can be triggered by the surrounding context, like with `if (value) {…},` where value is coerced to boolean.

There are three type of conversion

* to string
* to boolean
* to number

Conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those three ways.

#### String conversion

```javascript
String(123) // explicit
123 + ''    // implicit

String(123)                   // '123'
String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'
```

#### Boolean conversion

>To explicitly convert a value to a boolean apply the Boolean() function.
Implicit conversion happens in logical context, or is triggered by logical operators ( `||` `&&` `!`).

```javascript
Boolean(2)          // explicit
if (2) { ... }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator
```

>Note: Logical operators such as `||` and `&&` do boolean conversions internally, but actually return the value of original operands, even if they are not boolean.

```javascript
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false

// All value not in the list above will convert to true
```

#### Numeric conversion

* comparison operators (`>`, `<`, `<=`,`>=`)
* bitwise operators ( `|` `&` `^` `~`)
* arithmetic operators (`-` `+` `*` `/` `%`).  
  Note, that binary+ does not trigger numeric conversion, when any operand is a string.
* unary `+` operator
* loose equality operator `==` (incl. `!=`).  
Note that `==` does not trigger numeric conversion when both operands are strings.

```javascript
Number('123')   // explicit
+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit3

Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
```

>When converting a string to a number, the engine first trims leading and trailing whitespace, `\n`, `\t` characters, returning `NaN` if the trimmed string does not represent a valid number. If string is empty, it returns `0`.

>`null` and `undefined` are handled differently: `null` becomes `0`, whereas `undefined` becomes `NaN`.

>Symbols cannot be converted to a number neither explicitly nor implicitly. Moreover, TypeError is thrown, instead of silently converting to `NaN`, like it happens for `undefined`. See more on Symbol conversion rules on MDN.

```javascript
Number(Symbol('my symbol'))    // TypeError is thrown
+Symbol('123')                 // TypeError is thrown
```

You should remember some points below for numeric conversion:

1. When applying `==` to `null` or `undefined`, **numeric conversion does not happen**. `null` equals only to `null` or `undefined`, and does not equal to anything else.

    ```javascript
    null == 0               // false, null is not converted to 0
    null == null            // true
    undefined == undefined  // true
    null == undefined       // true
    ```

2. `NaN` does not equal to anything even itself

### 5. Prototype & Prototype chain

#### Prototype & Prototype chain
>Every object in JavaScript has a built-in property, which is called its **`prototype`**. The **`prototype`** is itself an object, so the **`prototype`** will have its own **`prototype`**, making what's called a **`prototype chain`**.  
>The **`chain`** ends when we reach a **`prototype`** that has `null` for its own **`prototype`**.

>1. When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property.  
>2. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

For example:

>So when we call `myObject.toString()`, the browser:
>* looks for `toString` in `myObject`
>* can't find it there, so looks in the prototype object of `myObject` for `toString`
>* finds it there, and calls it.

But how we get the prototype of an object?

```javascript
Object.getPrototypeOf(myObject); // Object {...}
```

>**`Object.prototype`** is the most basic prototype, that all objects have by default.
The **`prototype`** of **`Object.prototype`** is null, this also the end of chain.

```javascript
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object {...}
// null
```

#### Shadowing properties

The bottom line of it, it's similar to the `overload` in some languages, same name but has different params. The only difference here is the return value can also differ.

```javascript
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function() {
  console.log('something else!')
};

console.log(myDate.getYear()); // 'something else!'
```

#### Create prototype

* Create through `Object.create`
    ```javascript
        const personPrototype = {
            greet() {
                console.log('hello!');
            }
        }

        const carl = Object.create(personPrototype);
        carl.greet();  // hello!
    ```
* Create through `constructor`
    ```javascript
        function Person(name) {
            this.name = name;
        }
        Person.prototype = personPrototype;
        Person.prototype.constructor = Person;
    ```

### 6. Scope & Scope chain

We already know about function module, class and somes like module...
We know they was declare in `Heap` (Javascript), or `Stack` and `Heap` in some languagues like Java/C++.

Because all the variables and things are declared and allocated in the same storage. For easy for GC's job, and in some case we need to prevent acecssing to each other, so people created a concept called `scope`.

There are differences in languages, however essentially, when a function was taken out from the call stack, it will know where to find and declare the variable, and they will look for in their scope which compiler allocate for then.

After a function finish, in normal case, the scope of it will be clear by Garbage Collection (GC).  

>We have three main types of scope
>**1. Global scope**
>**2. Function scope**
>**3. Block scope**

We already know about global and function, but how about block?

* **Block scope**: This tells us that any variable declared inside a block ({}) can be accessed only inside that block.  
* Block scope is related to variables declared with `let` and `const` only. Variables declared with `var` do not have block scope.
* Block scope familiar use in statements like `if`,`for`,`while`,`switch`... or `{}`

```javascript
{
    let a = 3;
    var b = 2;
}

console.log(a); //Uncaught ReferenceError: a is not defined
console.log(b); // 2 as variables declared with `var` is  
functionally and globally scoped NOT block scoped
```

#### Lexical Scope

* **Lexical Scope**: We also have a concept called **Lexical Scope** (Static scope). After read a lot of post, I wana say, It's so confusing...

```javascript
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

I will note main contents.

1. **`Lexical scope`** was detected when complier parses the js code to machine code.
2. Essentially, **`Lexical scope`** is the scope where a function is declared inside. And at the run time, when a function calls, `hosting environment` will help the new scope detect its `Lexical scope` and use that to create it own `Lexical environment`
3. **`Lexical Scoping`** is the mechanism that allows the inner function can access and use all things declare in the **`Lexical scope`**. EX: `displayName()` call and use variable `name` which declare outside in the `init()`.

#### Scope chain

When a function looks for a variable in its scope but doesn't found, it will look for in its `lexical scope` and more. This will make a scope chain.

> `displayName()` -> `init()` -> global scope.

### 7. Closure

>A closure is the **combination** of **a function** and **the lexical environment** within which that function was declared.

Let look a bit about this code.

```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

As we know, when a memory, scope which not poiting by any reference, will be clean by GC.

In this example, although `makeFunc()` was called and finished but the `myFunction()` still can `alert()` variable `name`. ​How’s that?

_**This is the way Closure work. The definition above mentioned the `lexical environment`. And in this case, cause we return the `displayName()` function and cause the `displayName` still can access it's `lexical environment`(`makeFunc`) so the outter scope of it will not be clean by GC.**_

Let's look another example:

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

In this case, each time we call `makeAdder`, the `hosting environment` will help us to create two different `lexical environment`. And by this way, `makeAdder(5)` and `makeAdder(10)` point to different `lexical environment`.
In this way, `add5()` and `add10()` don't impact each other.

#### Practical use

Actually, as a TS-user don't use JS native to build frontend framework too much, I rarely use closure, especially in Angular.

1. For in an interview, Closure is frequently asked by the interviewer to check the interviewee's understanding of JS.
2. For the event binding.

```javascript
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}
function makeSizerNormal(size) {
   document.body.style.fontSize = size + 'px';
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

//Test it here https://jsfiddle.net/vnkuZ/7726/
```

3. For creating a private function

```javascript
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.
```

#### Some attention points

1. Createful create closure in a loop, or share the variable.

```javascript
for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
}
// This will make error, cause the closure of `onfocus` use same `item`, so it use the last `item`.

```
We should use `let` in ES2015, or declare `onfocus` outside like this

```javascript
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus =
       makeHelpCallback(item.help);
}
```
Or use an anomyous function
```javascript
for (var i = 0; i < helpText.length; i++) {
    (function() {
       var item = helpText[i];
       document.getElementById(item.id).onfocus = function() {
         showHelp(item.help);
       }
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
}
```

2. Avoid nested loop, avoid use closure unless we have to. Cause it will impact our perfomance and memory.
3. Create class in incorrect way.

```javascript
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
```

Instead of that, we should declare like the way bellow, cause the previous way not is good practice for closure. Cause each time MyObject create, the function will be reassigned.

```javascript
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};
```

### 8. Web workers - Service Worker - Worklets

#### Dedicate Worker

<figure align="center" width="100%">
    <img loading="lazy" src="https://i.imgur.com/Vw5TilC.png" alt="Dedicate worker"/>
      <figcaption>Fig.9 - Dedicate worker.</figcaption>
</figure>

>1. Dedicate Worker are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface.

We know that, Javascript is single thread. And to solve problem about blocking user interface when execute big task, Dedicate Worker was borned.

>2. Dedicate Worker are an effort to bring multi-threading to the JavaScript environment.
>3. Dedicate Worker are not a part of javascript, they are features of browser that can access through javascript.

Essentially, When a script creates a Web Worker, It will run in the browser, and not be limited by a tab. The browser will create a new process to execute the web worker's task, then pass a message back to the main script to return the result after done.

>4. Remember that a dedicated worker cannot access `window`, which means that it cannot modify or change `DOM`.

#### Service Worker

<figure align="center" width="100%">
  <img loading="lazy" src="https://i.imgur.com/BHkuXyk.jpg" alt="Service worker"/>
  <figcaption>Fig.10 - Service worker.</figcaption>
</figure>

1. Service worker is a kind of web worker (shared worker). Which focus on event-driven.
2. Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available)
3. Cause it work as a proxy, so people usually use it to control cache.
4. After the first time user access page, and service worker was installed, then the next time user access page, service worker will run.
5. One of applicability of service worker is on PWA (Progressive Web App).

##### Other use case ideas

Service workers are also intended to be used for such things as:
>
>* **_Background data synchronization_**:  Start up a service worker even when no users are at the site, so caches can be updated, etc.
>* _**Reacting to push messages**_: Start up a service worker to send users a message to tell them new content is available.
>* Responding to resource requests from other origins.
>* Receiving centralized updates to expensive-to-calculate data such as geolocation or gyroscope, so multiple pages can make use of one set of data.
>* Client-side compiling and dependency management of CoffeeScript, less, CJS/AMD modules, etc. for development purposes.
>* Hooks for background services.
>* Custom templating based on certain URL patterns.
>* Performance enhancements, for example pre-fetching resources that the user is likely to need in the near future, such as the next few pictures in a photo album.

#### Worklet

>The Worklet interface is a lightweight version of Web Workers and gives developers access to low-level parts of the rendering pipeline.

>With Worklets, you can run JavaScript and WebAssembly code to do graphics rendering or audio processing where high performance is required.

* PaintWorklet
* AudioWorklet
* AnimationWorklet
* LayoutWorklet

### 9. DOM / Shadow Dom / Virtual Dom

#### Original DOM

>The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
