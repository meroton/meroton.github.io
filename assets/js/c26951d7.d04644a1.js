"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9822],{2429:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=o(4848),i=o(8453);const s={slug:"buildbarn-block-sizes",title:"Buildbarn Block Sizes",authors:"benjamin",tags:["buildbarn"]},r=void 0,a={permalink:"/blog/buildbarn-block-sizes",editUrl:"https://github.com/meroton/docs/edit/main/blog/2023-04-11-buildbarn-block-size/2023-04-11-buildbarn-block-size.md",source:"@site/blog/2023-04-11-buildbarn-block-size/2023-04-11-buildbarn-block-size.md",title:"Buildbarn Block Sizes",description:"When starting out with remote caching,",date:"2023-04-11T00:00:00.000Z",tags:[{inline:!0,label:"buildbarn",permalink:"/blog/tags/buildbarn"}],readingTime:2.53,hasTruncateMarker:!1,authors:[{name:"Benjamin Ingberg",imageURL:"/img/benjamin-avatar.png",key:"benjamin",page:null}],frontMatter:{slug:"buildbarn-block-sizes",title:"Buildbarn Block Sizes",authors:"benjamin",tags:["buildbarn"]},unlisted:!1,prevItem:{title:"BazelCon 2023",permalink:"/blog/bazelcon-2023"},nextItem:{title:"Updates to Buildbarn deployment repo as of Febuary 2023",permalink:"/blog/bb-deployments-updates-2023-02"}},l={authorsImageUrls:[void 0]},c=[{value:"How do I fix it?",id:"how-do-i-fix-it",level:2},{value:"What does new/old/current/spare mean?",id:"what-does-newoldcurrentspare-mean",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"When starting out with remote caching,\nan error you are likely to run into is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"java.io.IOException: com.google.devtools.build.lib.remote.ExecutionStatusException:\nINVALID_ARGUMENT: Failed to store previous blob 1-<HASH>-<LARGE_NUM>:\nShard 1: Blob is <LARGE_NUM> bytes in size,\nwhile this backend is only capable of storing blobs of up to 238608384 bytes in size\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is because your storage backend is too small.\nYou are attempting to upload a blob larger than the largest blob accepted by your storage backend."}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-fix-it",children:"How do I fix it?"}),"\n",(0,t.jsx)(n.p,{children:"The largest blob you can store is the size of your your storage device\ndivided by the number of blocks in your device."}),"\n",(0,t.jsx)(n.p,{children:"To store larger blobs,\neither increase the size of your storage device\nor decrease the number of blocks it is split into.\nLarger storage devices will take more disk,\nwhile fewer blocks will decrease the granularity which your cache works with."}),"\n",(0,t.jsxs)(n.p,{children:["In\n",(0,t.jsx)(n.a,{href:"https://github.com/buildbarn/bb-deployments",children:"bb-deployments"}),"\nthis setting is found in\n",(0,t.jsx)(n.a,{href:"https://github.com/buildbarn/bb-deployments/blob/d63c032b2b4d96f93cb889f95add15c26118d771/docker-compose/config/storage.jsonnet",children:"storage.jsonnet"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{\n  // ...\n  contentAddressableStorage: {\n    backend: {\n      'local': {\n        // ...\n        oldBlocks: 8,\n        currentBlocks: 24,\n        newBlocks: 1,\n        blocksOnBlockDevice: {\n          source: {\n            file: {\n              path: '/storage-cas/blocks',\n              sizeBytes: 8 * 1024 * 1024 * 1024, // 8GiB\n            },\n          },\n          spareBlocks: 3,\n        },\n        // ...\n      },\n    },\n  },\n  // ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"To facilitate getting started bb-deployments emulates a block device by using an 8GiB large file.\nThis file is small enough to fit most builds while not taking over the disk completely from a developers machine."}),"\n",(0,t.jsx)(n.p,{children:"The device is then split into 36 blocks (8+24+1+3),\nwhere each block can then store a maximum of 238608384 bytes (8GiB / 36 - some alignment)."}),"\n",(0,t.jsx)(n.p,{children:"In production it is preferable to use a large raw block device for this purpose."}),"\n",(0,t.jsx)(n.h2,{id:"what-does-newoldcurrentspare-mean",children:"What does new/old/current/spare mean?"}),"\n",(0,t.jsxs)(n.p,{children:["In depth documentation about all the settings are available in the\n",(0,t.jsx)(n.a,{href:"https://github.com/buildbarn/bb-storage/blob/master/pkg/proto/configuration/blobstore/blobstore.proto",children:"configuration proto files"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In essence the storage works as a ringbuffer where the assignment of each block is rotated.\nConsider a 5 block configuration with 1 old, 2 current, 1 new and 1 spare block."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"diagram",src:o(8291).A+"",width:"1190",height:"559"})}),"\n",(0,t.jsx)(n.p,{children:"As data is referenced from an old block\nit gets written into a new block.\nWhen the new block is full the role rotates."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"diagram",src:o(3888).A+"",width:"1190",height:"559"})}),"\n",(0,t.jsx)(n.p,{children:"There are some tradeoffs in behaviour to consider when choosing your block layout. Fewer blocks will allow larger individual blobs at the cost of granularity. Here is a quick summary of the meaning of the different fields."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Old"})," - Region where reads are actively copied over to new, too small value and your device behaves more like a FIFO than a LRU cache, too large and your device does a lot of uneccesary copying."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Current"})," - Stable region, should be the majority of your device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"New"})," - Region for writing new data to, must be 1 for AC and should be 1-4 for CAS. Having a couple of new blocks allows data to be better spread out over the device so as to not expire at the same time."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Spare"})," - Region for giving ongoing reads some time to finish before data starts getting overwritten."]}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8291:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/2023-04-11-buildbarn-block-size-1-15e36bcc18a3d4fcef69de02f8941f0e.svg"},3888:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/2023-04-11-buildbarn-block-size-2-6e29080d339215d72c87cdd8a8a0000b.svg"},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var t=o(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);