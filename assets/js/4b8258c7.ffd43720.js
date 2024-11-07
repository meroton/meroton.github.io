"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2978],{8488:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=i(4848),o=i(8453);const s={slug:"tips-trix-and-nondeterminism",title:"Tips, Tricks & Non-Deterministic Builds",authors:"benjamin",tags:["meroton","bazel","optimizing"]},r="Tips, Tricks & Non-Deterministic Builds",a={permalink:"/blog/tips-trix-and-nondeterminism",editUrl:"https://github.com/meroton/docs/edit/main/blog/2022-08-28-tips-trix-and-non-deterministic-builds.mdx",source:"@site/blog/2022-08-28-tips-trix-and-non-deterministic-builds.mdx",title:"Tips, Tricks & Non-Deterministic Builds",description:"When you have a remote build and cache cluster it can sometimes be hard to track down what exactly is using all of your building resources. To help with this we have started a tips and trix section in the documentation where we will share methods we use to debug and resolve slow builds.",date:"2022-08-28T00:00:00.000Z",tags:[{inline:!0,label:"meroton",permalink:"/blog/tags/meroton"},{inline:!0,label:"bazel",permalink:"/blog/tags/bazel"},{inline:!0,label:"optimizing",permalink:"/blog/tags/optimizing"}],readingTime:1.21,hasTruncateMarker:!1,authors:[{name:"Benjamin Ingberg",imageURL:"/img/benjamin-avatar.png",key:"benjamin",page:null}],frontMatter:{slug:"tips-trix-and-nondeterminism",title:"Tips, Tricks & Non-Deterministic Builds",authors:"benjamin",tags:["meroton","bazel","optimizing"]},unlisted:!1,prevItem:{title:"Remote Executors for the Free Environment",permalink:"/blog/remote-executors-for-free-tier"},nextItem:{title:"Updates to Buildbarn deployment repo as of April 2022",permalink:"/blog/bb-deploy-updates-2022-04"}},l={authorsImageUrls:[void 0]},u=[];function c(e){const t={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"When you have a remote build and cache cluster it can sometimes be hard to track down what exactly is using all of your building resources. To help with this we have started a tips and trix section in the documentation where we will share methods we use to debug and resolve slow builds."}),"\n",(0,n.jsx)(t.p,{children:"The first section is about build non-determinism. Ideally your build actions should produce the same output when run with the same input, in practice this is sometimes not the case. If you are lucky a non-deterministic action won't be noticed since the inputs for the non-deterministic action is unchanged it won't be rebuilt."}),"\n",(0,n.jsx)(t.p,{children:"If you're not so lucky the non-determinism stems from a bug in the implementation and you should definitely pay attention to them. But how do you know which if any actions are non-deterministic?"}),"\n",(0,n.jsxs)(t.p,{children:["This is not trivial but we have added ",(0,n.jsx)(t.a,{href:"/docs/tips/non-deterministic-builds",children:"a server side feature"})," which allows detection of non-determinism with virtually no effort on your part."]}),"\n",(0,n.jsx)(t.p,{children:"Once activated it reruns a configured fraction of your actions and automatically flags them if they produce different outputs. The scheduling is done outside of your bazel invocation so your build throughput will be unaffected at the cost of an increase in the number of resources consumed. We suggest 1% which will only increase your resource use by a trivial amount but you could of course set it to 100% which would double the cost of your builds."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(6540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);