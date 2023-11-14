"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return n?o.createElement(m,i(i({ref:t},b),{},{components:n})):o.createElement(m,i({ref:t},b))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={slug:"buildbarn-block-sizes",title:"Buildbarn Block Sizes",authors:"benjamin",tags:["buildbarn"]},i=void 0,l={permalink:"/blog/buildbarn-block-sizes",editUrl:"https://github.com/meroton/docs/edit/main/blog/2023-04-11-buildbarn-block-size/2023-04-11-buildbarn-block-size.md",source:"@site/blog/2023-04-11-buildbarn-block-size/2023-04-11-buildbarn-block-size.md",title:"Buildbarn Block Sizes",description:"When starting out with remote caching,",date:"2023-04-11T00:00:00.000Z",formattedDate:"April 11, 2023",tags:[{label:"buildbarn",permalink:"/blog/tags/buildbarn"}],readingTime:2.53,hasTruncateMarker:!1,authors:[{name:"Benjamin Ingberg",imageURL:"/img/benjamin-avatar.png",key:"benjamin"}],frontMatter:{slug:"buildbarn-block-sizes",title:"Buildbarn Block Sizes",authors:"benjamin",tags:["buildbarn"]},prevItem:{title:"BazelCon 2023",permalink:"/blog/bazelcon-2023"},nextItem:{title:"Updates to Buildbarn deployment repo as of Febuary 2023",permalink:"/blog/bb-deployments-updates-2023-02"}},s={authorsImageUrls:[void 0]},c=[{value:"How do I fix it?",id:"how-do-i-fix-it",level:2},{value:"What does new/old/current/spare mean?",id:"what-does-newoldcurrentspare-mean",level:2}],b={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When starting out with remote caching,\nan error you are likely to run into is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java.io.IOException: com.google.devtools.build.lib.remote.ExecutionStatusException:\nINVALID_ARGUMENT: Failed to store previous blob 1-<HASH>-<LARGE_NUM>:\nShard 1: Blob is <LARGE_NUM> bytes in size,\nwhile this backend is only capable of storing blobs of up to 238608384 bytes in size\n")),(0,r.kt)("p",null,"This is because your storage backend is too small.\nYou are attempting to upload a blob larger than the largest blob accepted by your storage backend."),(0,r.kt)("h2",{id:"how-do-i-fix-it"},"How do I fix it?"),(0,r.kt)("p",null,"The largest blob you can store is the size of your your storage device\ndivided by the number of blocks in your device."),(0,r.kt)("p",null,"To store larger blobs,\neither increase the size of your storage device\nor decrease the number of blocks it is split into.\nLarger storage devices will take more disk,\nwhile fewer blocks will decrease the granularity which your cache works with."),(0,r.kt)("p",null,"In\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildbarn/bb-deployments"},"bb-deployments"),"\nthis setting is found in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildbarn/bb-deployments/blob/d63c032b2b4d96f93cb889f95add15c26118d771/docker-compose/config/storage.jsonnet"},"storage.jsonnet"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  // ...\n  contentAddressableStorage: {\n    backend: {\n      'local': {\n        // ...\n        oldBlocks: 8,\n        currentBlocks: 24,\n        newBlocks: 1,\n        blocksOnBlockDevice: {\n          source: {\n            file: {\n              path: '/storage-cas/blocks',\n              sizeBytes: 8 * 1024 * 1024 * 1024, // 8GiB\n            },\n          },\n          spareBlocks: 3,\n        },\n        // ...\n      },\n    },\n  },\n  // ...\n}\n")),(0,r.kt)("p",null,"To facilitate getting started bb-deployments emulates a block device by using an 8GiB large file.\nThis file is small enough to fit most builds while not taking over the disk completely from a developers machine."),(0,r.kt)("p",null,"The device is then split into 36 blocks (8+24+1+3),\nwhere each block can then store a maximum of 238608384 bytes (8GiB / 36 - some alignment)."),(0,r.kt)("p",null,"In production it is preferable to use a large raw block device for this purpose."),(0,r.kt)("h2",{id:"what-does-newoldcurrentspare-mean"},"What does new/old/current/spare mean?"),(0,r.kt)("p",null,"In depth documentation about all the settings are available in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildbarn/bb-storage/blob/master/pkg/proto/configuration/blobstore/blobstore.proto"},"configuration proto files"),"."),(0,r.kt)("p",null,"In essence the storage works as a ringbuffer where the assignment of each block is rotated.\nConsider a 5 block configuration with 1 old, 2 current, 1 new and 1 spare block."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"diagram",src:n(5456).Z,width:"1190",height:"559"})),(0,r.kt)("p",null,"As data is referenced from an old block\nit gets written into a new block.\nWhen the new block is full the role rotates."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"diagram",src:n(3022).Z,width:"1190",height:"559"})),(0,r.kt)("p",null,"There are some tradeoffs in behaviour to consider when choosing your block layout. Fewer blocks will allow larger individual blobs at the cost of granularity. Here is a quick summary of the meaning of the different fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Old")," - Region where reads are actively copied over to new, too small value and your device behaves more like a FIFO than a LRU cache, too large and your device does a lot of uneccesary copying."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Current")," - Stable region, should be the majority of your device."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New")," - Region for writing new data to, must be 1 for AC and should be 1-4 for CAS. Having a couple of new blocks allows data to be better spread out over the device so as to not expire at the same time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spare")," - Region for giving ongoing reads some time to finish before data starts getting overwritten.")))}u.isMDXComponent=!0},5456:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-04-11-buildbarn-block-size-1-15e36bcc18a3d4fcef69de02f8941f0e.svg"},3022:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-04-11-buildbarn-block-size-2-6e29080d339215d72c87cdd8a8a0000b.svg"}}]);