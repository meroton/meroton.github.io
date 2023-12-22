"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8405],{976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(5893),r=t(1151),i=t(4866),o=t(5162);const l={slug:"Automatically-reformat-all-commits-on-a-branch",title:"Automatically Reformat all Commits on a Branch",authors:"nils",tags:["git","unix","linting"]},s="Automatically reformat all commits on a branch",c={permalink:"/blog/Automatically-reformat-all-commits-on-a-branch",editUrl:"https://github.com/meroton/docs/edit/main/blog/2023-12-22-rebase-and-reformat-git-branches-automatically.md",source:"@site/blog/2023-12-22-rebase-and-reformat-git-branches-automatically.md",title:"Automatically Reformat all Commits on a Branch",description:"If you have a formatter tool",date:"2023-12-22T00:00:00.000Z",formattedDate:"December 22, 2023",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"unix",permalink:"/blog/tags/unix"},{label:"linting",permalink:"/blog/tags/linting"}],readingTime:3.495,hasTruncateMarker:!1,authors:[{name:"Nils Wireklint",imageURL:"/img/nils-avatar.jpg",key:"nils"}],frontMatter:{slug:"Automatically-reformat-all-commits-on-a-branch",title:"Automatically Reformat all Commits on a Branch",authors:"nils",tags:["git","unix","linting"]},unlisted:!1,nextItem:{title:"Improved Chroot in Buildbarn",permalink:"/blog/improved-chroot-in-buildbarn"}},u={authorsImageUrls:[void 0]},d=[{value:"Example commits",id:"example-commits",level:2},{value:"Rebase algorithm",id:"rebase-algorithm",level:2},{value:"Oneliners",id:"oneliners",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["If you have a formatter tool\nthat can rewrite your code\nyou can run it automatically on all unmerged commits.\nThis will show you how to script ",(0,a.jsx)(n.code,{children:"git-rebase"}),"\nto do so without any conflicts."]}),"\n",(0,a.jsx)(n.p,{children:"There are two ways to do it manually, forward or backward.\nThe forward pass amends each commit\nand deals with the conflicts when stepping to the next commit.\nIn contrast the backwards pass, formats each commit from the end,\nwhich will avoid conflicts but for long commit chains it can be almost as boring."}),"\n",(0,a.jsx)(n.p,{children:"This pattern comes up when working with long-lived feature branches,\nor tasks that were almost done, and then pre-empted by other prioritized work.\nHere are a few oneliners you can run to tidy up your commits."}),"\n",(0,a.jsxs)(n.p,{children:["See also the full technical guide for developing this ",(0,a.jsx)(n.code,{children:"git-rebase"})," workflow\nin ",(0,a.jsx)(n.a,{href:"/docs/practice/rebase-and-reformat-git-branches-automatically",children:"our documentation"}),".\nWhich contains more details on rebasing with ",(0,a.jsx)(n.code,{children:"git"}),",\nusing a scriptable editor to automate the ",(0,a.jsx)(n.code,{children:"git-rebase"})," todo-list,\nas well as the squashed commit messages."]}),"\n",(0,a.jsx)(n.h2,{id:"example-commits",children:"Example commits"}),"\n",(0,a.jsx)(n.p,{children:"Say you have three unmerged commits:"}),"\n",(0,a.jsx)(n.p,{children:"21cc7b5 My amazing feature\ne05fd9f Other complimentary work\nacb9fae Fix annoying bug"}),"\n",(0,a.jsxs)(n.p,{children:["They contain important work, but you forgot to run some linters,\nor the main branch added more lint requirements\nafter the feature work was started.\nThis will run linters that can automatically fix issues on each commit\nthrough a scripted ",(0,a.jsx)(n.code,{children:"git-rebase"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"rebase-algorithm",children:"Rebase algorithm"}),"\n",(0,a.jsx)(n.p,{children:"We have a three-step process to update each commit."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"1: Create a fixup commit with the applied lint suggestions,\nwhich we immediately revert\nso the next commit still applies"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"title=reformat.sh",children:"#!/bin/sh\n\n# Formatters and fixers go here.\n# Replace with your tools of choice! rustfmt, gofmt, black, ...\n./run-all-linters-and-autofixers.sh\n\n# Add a new commit with the changes and revert it again.\ngit add -u\ngit commit --allow-empty --fixup HEAD\n# 'git-revert' does not support '--allow-empty'.\ngit revert --no-commit HEAD\ngit commit --allow-empty --no-edit\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"2: Squash the fixup commit into the original feature commit"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"3: Squash the revert down into the next feature commit"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"These tabs show how the commits evolve and are squashed,\nthe extra commits are grouped to indicate the target commit.\nThe revert of the first commit is grouped with the second feature commit,\nand so on.\nWe discard the final revert."}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(o.Z,{value:"original",label:"Original",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"21cc7b5 My amazing feature\n\n\n\ne05fd9f Other complimentary work\n\n\n\nacb9fae Fix annoying bug\n\n\n\n"})})}),(0,a.jsx)(o.Z,{value:"reformated",label:"1: Reformated",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'21cc7b5 My amazing feature\n01900c5 fixup! My amazing feature\n\n55feaba Revert "fixup! My amazing feature"\ne05fd9f Other complimentary work\nd122da7 fixup! Other complimentary work\n\n249b0d3 Revert "fixup! Other complimentary work"\nacb9fae Fix annoying bug\n50e426a fixup! Fix annoying bug\n\n7e84259 Revert "fixup! Fix annoying bug"\n'})})}),(0,a.jsx)(o.Z,{value:"fixed-up",label:"2: Fixed-up",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'9ed9557 My amazing feature\n\n\n55feaba Revert "fixup! My amazing feature"\n0db521b Other complimentary work\n\n\n249b0d3 Revert "fixup! Other complimentary work"\ne2e991b Fix annoying bug\n\n\n7e84259 Revert "fixup! Fix annoying bug"\n'})})}),(0,a.jsx)(o.Z,{value:"fully-squashed",label:"3: Fully-squashed",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"9ed9557 My amazing feature\n\n\n\n8e76352 Other complimentary work\n\n\n\nf286036 Fix annoying bug\n\n\n\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"oneliners",children:"Oneliners"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"git"})," allows us to set any editor to edit the todo-list, ",(0,a.jsx)(n.code,{children:"$GIT_SEQUENCE_EDITOR"}),",\nand the commit message, ",(0,a.jsx)(n.code,{children:"$EDITOR"}),".\nWe choose ",(0,a.jsx)(n.code,{children:"vim"})," as it is often available, and easier to use than ",(0,a.jsx)(n.code,{children:"sed"})," and ",(0,a.jsx)(n.code,{children:"awk"}),".\nIt is nice to have a ",(0,a.jsx)(n.em,{children:"scriptable"})," interactive editor\nto make changes to the workflow and try out the commands."]}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"/docs/practice/rebase-and-reformat-git-branches-automatically",children:"full technical guide"})," for details and more tips on ",(0,a.jsx)(n.code,{children:"git-rebase"})," and ",(0,a.jsx)(n.code,{children:"vim"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Reformat:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'$ env                          \\\n    GIT_SEQUENCE_EDITOR="true" \\\n    git rebase -i --exec ./reformat.sh origin/main\n'})}),"\n",(0,a.jsx)(n.p,{children:"Fixup (autosquash):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"# More robust autosquash, that handles duplicated commit messages.\n# If your commit messages are all unique you can use '--autosquash' instead.\n# See the technical guide for more details.\n$ env                                                             \\\n    GIT_SEQUENCE_EDITOR=\"vim +'g/^\\w* \\w* fixup!/s/^pick/fixup/'\" \\\n    git rebase -i origin/main\n"})}),"\n",(0,a.jsx)(n.p,{children:"Squash:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"$ env                                                                                               \\\n    EDITOR=\"sed -i '1,9d'\"                                                                          \\\n    GIT_SEQUENCE_EDITOR=\"vim +'g/^#/d' +'normal! Gdk' +'g/^pick \\w* Revert \\\"fixup!/normal! j0ces'\" \\\n    git rebase -i origin/main\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["We have not developed the ",(0,a.jsx)(n.em,{children:"incantation"}),", ",(0,a.jsx)(n.code,{children:"git-rebase"})," command,\nto preserve the author date from the original commits.\nWe will address that next!"]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(6010);const r={tabItem:"tabItem_Ymn6"};var i=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),r=t(6010),i=t(2466),o=t(6550),l=t(469),s=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??f;return h({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function v(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),r=l[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var a=t(7294);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);