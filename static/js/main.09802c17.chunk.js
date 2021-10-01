(this["webpackJsonpjust-calling-random-api"]=this["webpackJsonpjust-calling-random-api"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(15),r=a.n(n),i=(a(20),a(21),a.p+"static/media/github.b5d4c591.svg"),o=a(0);function l(e){return Object(o.jsxs)("div",{className:"mx-4 my-8",children:[Object(o.jsxs)("div",{className:"flex items-baseline ",children:[Object(o.jsx)("a",{className:"flex-auto",href:"/",children:Object(o.jsx)("h1",{className:"my-2 text-4xl font-bold font-sans px-4 font-bold",children:"Just Calling Random APIs"})}),Object(o.jsx)("div",{className:"",children:Object(o.jsx)("a",{href:"https://github.com/vedangj044/just-calling-random-api",target:"blank",class:"inline-block",children:Object(o.jsx)("embed",{class:"h-8 w-8 pointer-events-none",src:i})})})]}),Object(o.jsx)("hr",{})]})}function d(e){return Object(o.jsx)("div",{className:"grid place-items-center mx-4 my-8",children:Object(o.jsxs)("div",{className:"flex flex-col bg-blue-100 rounded-md md:px-16 px-4 max-w-2xl",children:[Object(o.jsx)("h2",{className:"text-4xl pt-8 font-light",children:"Why this page exists? "}),Object(o.jsxs)("p",{className:"text-lg py-4 pb-4 font-regular",children:["This page is for anyone around the globe who wants to start their open-source journey with ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{className:"text-green-900 font-semibold",href:"https://hacktoberfest.digitalocean.com/",target:"blank",children:" Hacktoberfest "})}),". All you have to do is choose any publically available API, create a react component which calls your chosen API and display its response on the main page. You can find all the details and step-by-step procedures to make your first PR. Let's get going!"]}),Object(o.jsx)("div",{className:"flex pb-5",children:Object(o.jsx)("button",{className:"bg-blue-500 rounded-md p-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50",children:Object(o.jsx)("a",{href:"https://github.com/vedangj044/just-calling-random-api",target:"blank",children:"Start Here"})})})]})})}var j=a(2);function m(e){return Object(o.jsx)("a",{href:"https://github.com/"+e.username,target:"blank",children:Object(o.jsxs)("div",{className:"inline-flex items-center hover:bg-blue-100 p-2 rounded-md cursor-pointer",children:[Object(o.jsx)("img",{className:"rounded-full h-8 w-8",src:e.profilePic,alt:"Contributor's avatar"}),Object(o.jsx)("h1",{className:"px-2 text-xl",children:e.username})]})})}function b(e){return Object(o.jsx)("a",{href:e.apiUrl,target:"blank",children:Object(o.jsxs)("div",{className:"inline-flex items-center hover:bg-blue-100 p-2 rounded-md cursor-pointer",children:[Object(o.jsx)("img",{className:"rounded-full h-8 w-8",src:"https://static.thenounproject.com/png/1429392-200.png",alt:"Hyperlink icon"}),Object(o.jsx)("h1",{className:"px-2 text-xl",children:e.apiName})]})})}function u(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(e){return n(e.content)}))}),[]),Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2",children:"Random Quotes API"}),Object(o.jsx)("h1",{className:"text-2xl font-medium pb-6",children:s}),Object(o.jsx)(m,{username:"vedangj044",profilePic:"https://avatars.githubusercontent.com/u/43697446?v=4"}),Object(o.jsx)(b,{apiUrl:"https://github.com/lukePeavey/quotable",apiName:"Quotable"})]})}function h(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){fetch("https://api.adviceslip.com/advice").then((function(e){return e.json()})).then((function(e){return n(e.slip.advice)}))}),[]),Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2",children:"Random Advice API"}),Object(o.jsx)("h1",{className:"text-2xl font-medium pb-6",children:s}),Object(o.jsx)(m,{username:"ashutoshkrris",profilePic:"https://avatars.githubusercontent.com/u/47353498?v=4"}),Object(o.jsx)(b,{apiUrl:"https://api.adviceslip.com/",apiName:"Advice Slip"})]})}var x=a(4),p=a.n(x),f=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){p.a.get("https://animechan.vercel.app/api/random/").then((function(e){console.log(e.data),s(e.data)}))}),[]),Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2 text-purple-700 font-bold",children:"Random Anime Quotes"}),Object(o.jsx)("h1",{className:"text-2xl font-medium pb-4",children:a.quote}),Object(o.jsxs)("p",{className:"text-blue-600 font-semibold",children:["- ",a.character]}),Object(o.jsxs)("p",{className:"text-red-600",children:["in ",a.anime]}),Object(o.jsx)(m,{username:"apoorvcodes",profilePic:"https://avatars.githubusercontent.com/u/75479355?s=400&u=2b406b118766febb2515a268559e7d3fb9529ace&v=4"}),Object(o.jsx)(b,{apiUrl:"hhttps://github.com/rocktimsaikia/anime-chan",apiName:"Anime-chan"})]})})};function O(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){fetch("https://swapi.dev/api/people/".concat(Math.floor(50*Math.random()),"?format=json")).then((function(e){return e.json()})).then((function(e){return n(e.name)}))}),[]),Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2",children:"The Star Wars API"}),Object(o.jsxs)("h1",{className:"text-2xl font-medium pb-6",children:["Random Star Wars character: ",s]}),Object(o.jsx)(m,{username:"DiFronzo",profilePic:"https://storage.ko-fi.com/cdn/useruploads/d3dceedd-102c-4380-80e9-3a748287882c.png"}),Object(o.jsx)(b,{apiUrl:"https://swapi.dev/",apiName:"SWAPI"})]})}function g(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){fetch("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return n(e.joke)}))}),[]),Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2",children:"Random Dad Joke API"}),Object(o.jsx)("h1",{className:"text-2xl font-medium pb-6",children:s}),Object(o.jsx)(m,{username:"savioxavier",profilePic:"https://avatars.githubusercontent.com/u/38729705?v=4"}),Object(o.jsx)(b,{apiUrl:"https://icanhazdadjoke.com/api",apiName:"icanhazdadjoke"})]})}var v=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){p.a.get("https://meowfacts.herokuapp.com/").then((function(e){console.log(e.data),s(e.data.data[0])}))}),[]),console.log(a),Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2 text-red-700 font-bold",children:"Random Cat Facts"}),Object(o.jsx)("h1",{className:"text-2xl font-medium pb-6",children:a}),Object(o.jsx)(m,{username:"STILLWATER",profilePic:"https://avatars.githubusercontent.com/st1llwater"}),Object(o.jsx)(b,{apiUrl:"https://github.com/wh-iterabb-it/meowfacts",apiName:"Meow-Facts"})]})})},N=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){p.a.get("https://geek-jokes.sameerkumar.website/api?format=json").then((function(e){console.log(e.data),s(e.data.joke)}))}),[]),console.log(a),Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2 text-green-700 italic",children:"Random Geek Jokes"}),Object(o.jsx)("h1",{className:"text-2xl font-medium pb-6",children:a}),Object(o.jsx)(m,{username:"Samyak Jain",profilePic:"https://avatars.githubusercontent.com/samyakjain2020"}),Object(o.jsx)(b,{apiUrl:"https://github.com/sameerkumar18/geek-joke-api",apiName:"Geek Jokes"})]})})};var y=function(){return Object(o.jsxs)("div",{className:"mx-0 xl:mx-40 font-body",children:[Object(o.jsx)(l,{}),Object(o.jsx)(d,{}),Object(o.jsx)(u,{}),Object(o.jsx)(h,{}),Object(o.jsx)(f,{}),Object(o.jsx)(O,{}),Object(o.jsx)(g,{}),Object(o.jsx)(v,{}),Object(o.jsx)(N,{})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.09802c17.chunk.js.map