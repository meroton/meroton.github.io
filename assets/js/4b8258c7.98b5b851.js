"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={slug:"tips-trix-and-nondeterminism",title:"Tips, Tricks & Non-Deterministic Builds",authors:"benjamin",tags:["meroton","bazel","optimizing"]},a="Tips, Tricks & Non-Deterministic Builds",s={permalink:"/blog/tips-trix-and-nondeterminism",editUrl:"https://github.com/meroton/docs/edit/main/blog/2022-08-28-tips-trix-and-non-deterministic-builds.mdx",source:"@site/blog/2022-08-28-tips-trix-and-non-deterministic-builds.mdx",title:"Tips, Tricks & Non-Deterministic Builds",description:"When you have a remote build and cache cluster it can sometimes be hard to track down what exactly is using all of your building resources. To help with this we have started a tips and trix section in the documentation where we will share methods we use to debug and resolve slow builds.",date:"2022-08-28T00:00:00.000Z",formattedDate:"August 28, 2022",tags:[{label:"meroton",permalink:"/blog/tags/meroton"},{label:"bazel",permalink:"/blog/tags/bazel"},{label:"optimizing",permalink:"/blog/tags/optimizing"}],readingTime:1.21,hasTruncateMarker:!1,authors:[{name:"Benjamin Ingberg",imageURL:"/img/benjamin-avatar.png",key:"benjamin"}],frontMatter:{slug:"tips-trix-and-nondeterminism",title:"Tips, Tricks & Non-Deterministic Builds",authors:"benjamin",tags:["meroton","bazel","optimizing"]},prevItem:{title:"Remote Executors for the Free Environment",permalink:"/blog/remote-executors-for-free-tier"},nextItem:{title:"Updates to Buildbarn deployment repo",permalink:"/blog/bb-deploy-updates-2022-04"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you have a remote build and cache cluster it can sometimes be hard to track down what exactly is using all of your building resources. To help with this we have started a tips and trix section in the documentation where we will share methods we use to debug and resolve slow builds."),(0,i.kt)("p",null,"The first section is about build non-determinism. Ideally your build actions should produce the same output when run with the same input, in practice this is sometimes not the case. If you are lucky a non-deterministic action won't be noticed since the inputs for the non-deterministic action is unchanged it won't be rebuilt."),(0,i.kt)("p",null,"If you're not so lucky the non-determinism stems from a bug in the implementation and you should definitiely pay attention to them. But how do you know which if any actions are non-deterministic?"),(0,i.kt)("p",null,"This is not trivial but we have added ",(0,i.kt)("a",{parentName:"p",href:"/docs/tips/non-deterministic-builds"},"a server side feature")," which allows detection of non-determinism with virtually no effort on your part."),(0,i.kt)("p",null,"Once activated it reruns a configured fraction of your actions and automatically flags them if they produce different outputs. The scheduling is done outside of your bazel invocation so your build throughput will be unaffected at the cost of an increase in the number of resources consumed. We suggest 1% which will only increase your resource use by a trivial amount but you could of course set it to 100% which would double the cost of your builds."))}d.isMDXComponent=!0}}]);