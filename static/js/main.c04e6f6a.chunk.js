(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{15:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var s=c(0),a=c.n(s),r=c(9),i=c.n(r),n=(c(15),c(1)),x=function(){return Object(n.jsxs)("div",{className:"flex items-center justify-between px-7 py-4 w-full bg-gray-900 border-b bg-opacity-80 blur border-gray-100 border-opacity-10",children:[Object(n.jsx)("div",{className:"",children:Object(n.jsx)("span",{className:"sm:text-xl md:text-4xl font-semibold text-gray-200",children:"Memory Card"})}),Object(n.jsxs)("div",{className:"md:text-xl text-gray-200",children:[Object(n.jsx)("span",{children:"Score: ".concat(5," |")}),Object(n.jsx)("span",{children:" Best: ".concat(6)})]})]})},l=c(10),o=c.n(l),d=function(){return Object(n.jsx)("div",{className:"text-center sm:text-lg md:text-xl lg:text-2xl text-green-500 font-mono py-4 px-7 font-semibold",children:Object(n.jsx)(o.a,{onInit:function(t){t.changeDelay(70).typeString("Put your memory to the test ").pauseFor(500).deleteAll().typeString("Click on a card but not more than once!").start()}})})},b=c(6),m=c(7),j=function(t){var e=t.svgSrc,c=t.svgText,s=t.handleClick;return Object(n.jsxs)("div",{className:"rounded-lg flex flex-col space-y-2 justify-center items-center cursor-pointer p-4 bg-gray-600 md:w-44 md:h-52 mx-4 my-2 border-t border-l border-opacity-20 bg-opacity-30 blur-xl shadow-lg transform ease-in duration-200 hover:scale-105",onClick:function(){return s(c)},children:[Object(n.jsx)("div",{className:"p-4",children:Object(n.jsx)("img",{src:e,className:"",alt:""})}),Object(n.jsx)("span",{className:"text-gray-200 text-lg font-semibold ",children:c})]})},p=c(23),u=c(22),v=c.p+"static/media/c.0316787c.svg",g=c.p+"static/media/ch.c2e1e9b9.svg",f=c.p+"static/media/cpp.bd9fc7e8.svg",h=c.p+"static/media/css.0b24b108.svg",y=c.p+"static/media/go.40c6002e.svg",O=c.p+"static/media/haskell.3b6e206d.svg",S=c.p+"static/media/html.0e2d7499.svg",N=c.p+"static/media/java.58ba969b.svg",C=c.p+"static/media/js.a940676b.svg",P=c.p+"static/media/matlab.52a7ce72.svg",w=c.p+"static/media/node.8710f73b.svg",k=c.p+"static/media/php.1be1c09f.svg",H=c.p+"static/media/python.65ff7863.svg",M=c.p+"static/media/react.429a3c6c.svg",J=c.p+"static/media/ruby.c4aae4c6.svg",T=c.p+"static/media/ts.900d540f.svg",R=c.p+"static/media/kotlin.885dfefd.svg",G=c.p+"static/media/svelte.b3aa7feb.svg",L=c.p+"static/media/vim.1262dbc8.svg",E=c.p+"static/media/vue.d720a5a4.svg",B=function(){var t=Object(s.useState)([[{src:v,text:"C"},{src:N,text:"Java"},{src:P,text:"Matlab"},{src:f,text:"C++"}],[{src:y,text:"Go"},{src:g,text:"C#"},{src:h,text:"CSS"},{src:S,text:"HTML"},{src:H,text:"Python"},{src:k,text:"PHP"}],[{src:h,text:"CSS"},{src:w,text:"NodeJS"},{src:J,text:"Ruby"},{src:y,text:"Go"},{src:S,text:"HTML"},{src:k,text:"PHP"},{src:H,text:"Python"},{src:g,text:"C#"}],[{src:C,text:"JavaScript"},{src:g,text:"C#"},{src:S,text:"HTML"},{src:k,text:"PHP"},{src:H,text:"Python"},{src:M,text:"React"},{src:w,text:"NodeJS"},{src:y,text:"Go"},{src:T,text:"TypeScript"},{src:O,text:"Haskell"},{src:J,text:"Ruby"},{src:h,text:"CSS"}],[{src:g,text:"C#"},{src:L,text:"Vim"},{src:R,text:"Kotlin"},{src:E,text:"Vue"},{src:k,text:"PHP"},{src:S,text:"HTML"},{src:w,text:"NodeJS"},{src:y,text:"Go"},{src:T,text:"TypeScript"},{src:O,text:"Haskell"},{src:M,text:"React"},{src:G,text:"Svelte"},{src:H,text:"Python"},{src:J,text:"Ruby"},{src:h,text:"CSS"},{src:C,text:"JavaScript"}]]),e=Object(m.a)(t,2),c=e[0],a=e[1],r=Object(s.useState)(0),i=Object(m.a)(r,2),x=i[0],l=i[1],o=Object(s.useState)([]),d=Object(m.a)(o,2),B=d[0],I=d[1],V=function(){var t=Object(b.a)(c[x]);t=function(t){for(var e,c=t.length;0!==c;){e=Math.floor(Math.random()*c),c--;var s=[t[e],t[c]];t[c]=s[0],t[e]=s[1]}return t}(t);var e=Object(b.a)(c);e[x]=t,a(e)};Object(s.useEffect)((function(){B.length===c[x].length&&(console.log(x),4!==x?(l(x+1),D()):D())}),[B]);var A=function(t){if(!1===F(t)){var e=Object(b.a)(B);e.push(t),I(e),V()}else K()},D=function(){I([])},F=function(t){var e=!1;return B.forEach((function(c){c===t&&(e=!0)})),e},K=function(){l(0),D()};return Object(n.jsxs)("div",{className:"px-8 py-6 flex justify-center items-center flex-wrap w-full overflow-y-auto",children:[Object(n.jsx)("div",{className:"text-center sm:text-lg md:text-xl lg:text-2xl mb-8 text-green-500 font-mono font-semibold",children:Object(n.jsxs)("span",{children:["level:","".concat(x+1)]})}),Object(n.jsx)("div",{className:"flex justify-center items-center flex-wrap w-full",children:c[x].map((function(t,e){return Object(n.jsx)(u.a.div,{variants:{hidden:{opacity:0,scale:0},visible:function(t){return{opacity:1,transition:{delay:.2*t},scale:1}}},initial:"hidden",animate:"visible",custom:e,children:Object(n.jsx)(j,{svgSrc:t.src,svgText:t.text,handleClick:A},Object(p.a)())},Object(p.a)())}))})]})};var I=function(){return Object(n.jsxs)("div",{className:"bg-gray-900 h-screen bg-hero-pattern bg-no-repeat bg-cover",children:[Object(n.jsx)(x,{}),Object(n.jsx)(d,{}),Object(n.jsx)(B,{})]})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c04e6f6a.chunk.js.map