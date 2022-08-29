"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4125:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const o={},a="Non-deterministic Builds",s={unversionedId:"tips/non-deterministic-builds",id:"tips/non-deterministic-builds",title:"Non-deterministic Builds",description:"Builds should be deterministic, if the inputs are unchanged they should produce the same output. In Bazel terminology this is often refered to as builds being hermetic, i.e. fully self enclosed with regards to its inputs.",source:"@site/docs/tips/non-deterministic-builds.md",sourceDirName:"tips",slug:"/tips/non-deterministic-builds",permalink:"/docs/tips/non-deterministic-builds",editUrl:"https://github.com/meroton/docs/edit/main/docs/tips/non-deterministic-builds.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tips and Tricks",permalink:"/docs/tips/"}},l=[{value:"Automatic Detection of Non-Deterministic Actions",id:"automatic-detection-of-non-deterministic-actions",children:[],level:2},{value:"Sample Rate",id:"sample-rate",children:[],level:2},{value:"Timestamped Outputs",id:"timestamped-outputs",children:[],level:2},{value:"Do not Rerun Expensive Actions",id:"do-not-rerun-expensive-actions",children:[],level:2},{value:"Actions with Inherently Random Output",id:"actions-with-inherently-random-output",children:[],level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"non-deterministic-builds"},"Non-deterministic Builds"),(0,r.kt)("p",null,"Builds should be deterministic, if the inputs are unchanged they should produce the same output. In Bazel terminology this is often refered to as builds being hermetic, i.e. fully self enclosed with regards to its inputs."),(0,r.kt)("p",null,"This is sometimes not the case, and in those instances your system might produce different artifacts when run with the same inputs."),(0,r.kt)("p",null,"There are several reasons why this could happen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An unspecified input that has been changed"),(0,r.kt)("li",{parentName:"ul"},"A result which is based on random chance or statistical behavior"),(0,r.kt)("li",{parentName:"ul"},"Timestamps or a wall time dependency")),(0,r.kt)("p",null,"Different reasons will have different methods of resolution. It is in general an error for a build to produce different results with the same input, however, the most common consequence of this error is a build performance penalty."),(0,r.kt)("p",null,"If you can't fully eliminate non-determinism in your builds you should strive to avoid it and make sure that the consequence are only minor build performance detriments."),(0,r.kt)("h2",{id:"automatic-detection-of-non-deterministic-actions"},"Automatic Detection of Non-Deterministic Actions"),(0,r.kt)("p",null,"By rerunning a small subset of your actions and checking the output the build system can detect non-determinism. We rerun the actions with a small delay to automatically detect if that action would result in different outputs."),(0,r.kt)("p",null,"This is not guaranteed to catch every instance of non-determinism, but is a great filter for most of them."),(0,r.kt)("h2",{id:"sample-rate"},"Sample Rate"),(0,r.kt)("p",null,"Sample Rate determines the fraction of actions that will be rerun. The default value is 0 (off) which won't generate any reports. The recommended value is 1% but it can be set up to 100% (rerun all actions)."),(0,r.kt)("h2",{id:"timestamped-outputs"},"Timestamped Outputs"),(0,r.kt)("p",null,"One common reason for non-determinism is timestamped outputs. Some part of the build process adds the current wall time to the output."),(0,r.kt)("p",null,"Common fixes for this problem is to either set the date/time value to something predictable like the current commit time or a redacted value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ gcc input.c -Wno-builtin-macro-redefined -D__TIME__="REDACTED" -D__DATE__="REDACTED" -D__TIMESTAMP__="REDACTED"\n')),(0,r.kt)("p",null,"The exact method will depend on your build tool."),(0,r.kt)("p",null,"The periodicity of the timestamp might vary. In order to be able to timestamps which are not very granular the rerun actions are by default run with a 60 second delay. This allows us to detect timestamps with an ",(0,r.kt)("inlineCode",{parentName:"p"},"HH:mm")," format."),(0,r.kt)("h2",{id:"do-not-rerun-expensive-actions"},"Do not Rerun Expensive Actions"),(0,r.kt)("p",null,"By default we only rerun actions which were completed within 10 seconds, this allows us to avoid rerunning very expensive actions. In most builds the vast majority of actions are completed in a fraction of a second."),(0,r.kt)("p",null,"This value can be modified or unset in order to allow any action to be rerun. NOTE: If the action takes longer than the rerun delay they will be scheduled after the action has been completed."),(0,r.kt)("h2",{id:"actions-with-inherently-random-output"},"Actions with Inherently Random Output"),(0,r.kt)("p",null,"Some actions can by design have random output. If possible we recommend to seed the RNG with a known random value which is supplied as an input. Doing this tells bazel not to expect different runs with different seeds to have the same output."))}c.isMDXComponent=!0}}]);