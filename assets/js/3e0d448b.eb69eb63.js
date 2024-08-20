"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7937],{3572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const o={},r="Non-deterministic Builds",a={id:"tips/non-deterministic-builds",title:"Non-deterministic Builds",description:"Builds should be deterministic, if the inputs are unchanged they should produce the same output. In Bazel terminology this is often refered to as builds being hermetic, i.e. fully self enclosed with regards to its inputs.",source:"@site/docs/tips/non-deterministic-builds.md",sourceDirName:"tips",slug:"/tips/non-deterministic-builds",permalink:"/docs/tips/non-deterministic-builds",draft:!1,unlisted:!1,editUrl:"https://github.com/meroton/docs/edit/main/docs/tips/non-deterministic-builds.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Debug Bazel rules_go projects",permalink:"/docs/tips/debug-bazel-go-projects"},next:{title:"Improved chroot in Buildbarn",permalink:"/docs/improved-chroot-in-buildbarn/"}},d={},c=[{value:"Automatic Detection of Non-Deterministic Actions",id:"automatic-detection-of-non-deterministic-actions",level:2},{value:"Sample Rate",id:"sample-rate",level:2},{value:"Timestamped Outputs",id:"timestamped-outputs",level:2},{value:"Do not Rerun Expensive Actions",id:"do-not-rerun-expensive-actions",level:2},{value:"Actions with Inherently Random Output",id:"actions-with-inherently-random-output",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"non-deterministic-builds",children:"Non-deterministic Builds"})}),"\n",(0,i.jsx)(t.p,{children:"Builds should be deterministic, if the inputs are unchanged they should produce the same output. In Bazel terminology this is often refered to as builds being hermetic, i.e. fully self enclosed with regards to its inputs."}),"\n",(0,i.jsx)(t.p,{children:"This is sometimes not the case, and in those instances your system might produce different artifacts when run with the same inputs."}),"\n",(0,i.jsx)(t.p,{children:"There are several reasons why this could happen"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An unspecified input that has been changed"}),"\n",(0,i.jsx)(t.li,{children:"A result which is based on random chance or statistical behavior"}),"\n",(0,i.jsx)(t.li,{children:"Timestamps or a wall time dependency"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Different reasons will have different methods of resolution. It is in general an error for a build to produce different results with the same input, however, the most common consequence of this error is a build performance penalty."}),"\n",(0,i.jsx)(t.p,{children:"If you can't fully eliminate non-determinism in your builds you should strive to avoid it and make sure that the consequence are only minor build performance detriments."}),"\n",(0,i.jsx)(t.h2,{id:"automatic-detection-of-non-deterministic-actions",children:"Automatic Detection of Non-Deterministic Actions"}),"\n",(0,i.jsx)(t.p,{children:"By rerunning a small subset of your actions and checking the output the build system can detect non-determinism. We rerun the actions with a small delay to automatically detect if that action would result in different outputs."}),"\n",(0,i.jsx)(t.p,{children:"This is not guaranteed to catch every instance of non-determinism, but is a great filter for most of them."}),"\n",(0,i.jsx)(t.h2,{id:"sample-rate",children:"Sample Rate"}),"\n",(0,i.jsx)(t.p,{children:"Sample Rate determines the fraction of actions that will be rerun. The default value is 0 (off) which won't generate any reports. The recommended value is 1% but it can be set up to 100% (rerun all actions)."}),"\n",(0,i.jsx)(t.h2,{id:"timestamped-outputs",children:"Timestamped Outputs"}),"\n",(0,i.jsx)(t.p,{children:"One common reason for non-determinism is timestamped outputs. Some part of the build process adds the current wall time to the output."}),"\n",(0,i.jsx)(t.p,{children:"Common fixes for this problem is to either set the date/time value to something predictable like the current commit time or a redacted value"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:'$ gcc input.c -Wno-builtin-macro-redefined -D__TIME__="REDACTED" -D__DATE__="REDACTED" -D__TIMESTAMP__="REDACTED"\n'})}),"\n",(0,i.jsx)(t.p,{children:"The exact method will depend on your build tool."}),"\n",(0,i.jsxs)(t.p,{children:["The periodicity of the timestamp might vary. In order to be able to timestamps which are not very granular the rerun actions are by default run with a 60 second delay. This allows us to detect timestamps with an ",(0,i.jsx)(t.code,{children:"HH:mm"})," format."]}),"\n",(0,i.jsx)(t.h2,{id:"do-not-rerun-expensive-actions",children:"Do not Rerun Expensive Actions"}),"\n",(0,i.jsx)(t.p,{children:"By default we only rerun actions which were completed within 10 seconds, this allows us to avoid rerunning very expensive actions. In most builds the vast majority of actions are completed in a fraction of a second."}),"\n",(0,i.jsx)(t.p,{children:"This value can be modified or unset in order to allow any action to be rerun. NOTE: If the action takes longer than the rerun delay they will be scheduled after the action has been completed."}),"\n",(0,i.jsx)(t.h2,{id:"actions-with-inherently-random-output",children:"Actions with Inherently Random Output"}),"\n",(0,i.jsx)(t.p,{children:"Some actions can by design have random output. If possible we recommend to seed the RNG with a known random value which is supplied as an input. Doing this tells bazel not to expect different runs with different seeds to have the same output."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);