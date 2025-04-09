"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8701],{5241:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=a(4848),o=a(8453);const i={slug:"bazel-buildbarn-and-bonanza",title:"Bazel, Buildbarn and Bonanza",authors:"benjamin",tags:["buildbarn","bazel"]},r="Bazel, Buildbarn and Bonanza",s={permalink:"/blog/bazel-buildbarn-and-bonanza",editUrl:"https://github.com/meroton/docs/edit/main/blog/2025-03-24-bazel-buildbarn-and-bonanza/2025-03-24-bazel-buildbarn-and-bonanza.md",source:"@site/blog/2025-03-24-bazel-buildbarn-and-bonanza/2025-03-24-bazel-buildbarn-and-bonanza.md",title:"Bazel, Buildbarn and Bonanza",description:"In the Buildbarn event at Snowflake this week, Ed Schouten presented the work on",date:"2025-03-24T00:00:00.000Z",tags:[{inline:!0,label:"buildbarn",permalink:"/blog/tags/buildbarn"},{inline:!0,label:"bazel",permalink:"/blog/tags/bazel"}],readingTime:2.18,hasTruncateMarker:!1,authors:[{name:"Benjamin Ingberg",imageURL:"/img/benjamin-avatar.png",key:"benjamin",page:null}],frontMatter:{slug:"bazel-buildbarn-and-bonanza",title:"Bazel, Buildbarn and Bonanza",authors:"benjamin",tags:["buildbarn","bazel"]},unlisted:!1,nextItem:{title:"Understanding the KLM",permalink:"/blog/understanding-the-klm"}},l={authorsImageUrls:[void 0]},d=[];function c(e){const n={a:"a",code:"code",h1:"h1",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In the Buildbarn event at Snowflake this week, Ed Schouten presented the work on\nthe ",(0,t.jsx)(n.a,{href:"https://github.com/buildbarn/bonanza",children:"Bonanza project"}),". Bonanza is a prototype for a drop in replacement Bazel with\nimprovements to its communication protocols and written as a client that performs\nall of its actions remotely, deduplicated and cacheable."]}),"\n",(0,t.jsx)(n.h1,{id:"how-is-it-different-from-bazel",children:"How is it different from Bazel?"}),"\n",(0,t.jsx)(n.p,{children:"Bazel is written in an interesting manner. It is designed from the ground up to\nrepresent a stable description of a build that is reproducible from any\ndeveloper's machine. Any developer can check out the same source code ask Bazel\nto analyze it and get the exact commands Bazel would run to perform the\nbuild."}),"\n",(0,t.jsxs)(n.p,{children:["This involves a lot of computation: Resolving bazel modules, downloading\nrepository rules, executing them, analyzing the ",(0,t.jsx)(n.code,{children:".bzl"})," and ",(0,t.jsx)(n.code,{children:"BUILD.bazel"})," files,\nand finally executing the actions themselves."]}),"\n",(0,t.jsxs)(n.p,{children:["Bazel internally represents these computation steps as pure functions returning\ndeterministic values from a stable key, internally represented as ",(0,t.jsx)(n.code,{children:"SkyFunctions"}),"\nreturning ",(0,t.jsx)(n.code,{children:"SkyValues"})," from ",(0,t.jsx)(n.code,{children:"SkyKeys"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"SkyFunction"})," should return the same ",(0,t.jsx)(n.code,{children:"SkyValue"})," given the same ",(0,t.jsx)(n.code,{children:"SkyKey"})," which\nmakes it a good candidate for being computed only once and have the result\ncached and fed through to the next step. But peculiarly only the action\nexecution itself has been offloaded to remote cache and execution."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"cache all the things",src:a(7111).A+"",width:"842",height:"998"})}),"\n",(0,t.jsx)(n.p,{children:"This is what Bonanza attempts to resolve. Instead of having all of that state\ncomputed and represented locally, repeated by each developer and discarded\nwhenever a flag changes, Bonanza is designed from the ground up to offload all\ncomputations, downloads, and analysis to a remote cacheable system. This\nessentially reduces the client side to a very light weight program with the\nprimary purpose of scanning the source code for modifications and uploading any\nlocal changes."}),"\n",(0,t.jsx)(n.h1,{id:"whats-the-current-state",children:"What's the current state?"}),"\n",(0,t.jsx)(n.p,{children:"The project is still in an early state prototype state. In the presentation Ed\ndemonstrated how far the prototype has come, and it was very impressive. The\nBonanza client as of today is capable of analyzing the bb-storage codebase."}),"\n",(0,t.jsxs)(n.p,{children:["There is still a lot remaining before it's a production ready system but it is\nvery impressive progress. Bonanza is capable of running the full ",(0,t.jsx)(n.code,{children:"bzlmod"}),"\nresolution, fetching all relevant repository rules from upstream, run those\nrepository rules, and analyzing the resulting codebase, basically performing\neverything a Bazel ",(0,t.jsx)(n.code,{children:"cquery"})," does, all with fully remote and cacheable manner."]}),"\n",(0,t.jsx)(n.p,{children:"For shops which lean heavily on remote caching and execution the remaining\nlocal load is often the bottleneck for your builds, the ability to offload the\nremaining pieces to your build cluster may be the next evolution of your build\nsystem."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7111:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/all_the_things-49c295edfd8fdfa47bb93be35ebfa40b.webp"},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var t=a(6540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);