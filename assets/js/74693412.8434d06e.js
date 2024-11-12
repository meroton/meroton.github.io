"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7445],{4643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(4848),r=n(8453);const o={slug:"understanding-the-klm",title:"Understanding the KLM",authors:"benjamin",tags:["buildbarn"]},s="How big should the KLM be?",a={permalink:"/blog/understanding-the-klm",editUrl:"https://github.com/meroton/docs/edit/main/blog/2024-11-11-understanding-the-klm/2024-11-11-understanding-the-klm.md",source:"@site/blog/2024-11-11-understanding-the-klm/2024-11-11-understanding-the-klm.md",title:"Understanding the KLM",description:"When running a remote cache and execution cluster based on Buildbarn the Key",date:"2024-11-11T00:00:00.000Z",tags:[{inline:!0,label:"buildbarn",permalink:"/blog/tags/buildbarn"}],readingTime:5.69,hasTruncateMarker:!1,authors:[{name:"Benjamin Ingberg",imageURL:"/img/benjamin-avatar.png",key:"benjamin",page:null}],frontMatter:{slug:"understanding-the-klm",title:"Understanding the KLM",authors:"benjamin",tags:["buildbarn"]},unlisted:!1,nextItem:{title:"Introducing Meroton\u2019s New Course: Buildbarn Fundamentals",permalink:"/blog/introducing-buildbarn-fundamentals"}},h={authorsImageUrls:[void 0]},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"When running a remote cache and execution cluster based on Buildbarn the Key\nLocation Map (KLM) is a term that you will run into and it is important to take\nproper care when sizing the KLM and the number of KLM attempts."}),"\n",(0,i.jsx)(t.p,{children:"If you are just looking for a ballpark number to get you started, set the number\nof get attempts to 16 and the number of put attempts to 64 and use the following\ntable."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"CAS"}),(0,i.jsx)(t.th,{children:"AC"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Average Object Size"}),(0,i.jsx)(t.td,{children:"125KB"}),(0,i.jsx)(t.td,{children:"1KB"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Storage Size"}),(0,i.jsx)(t.td,{children:"500TB"}),(0,i.jsx)(t.td,{children:"1GB"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"KLM Entries"}),(0,i.jsx)(t.td,{children:"16 000 000"}),(0,i.jsx)(t.td,{children:"4 000 000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"KLM Size"}),(0,i.jsx)(t.td,{children:"1056MB"}),(0,i.jsx)(t.td,{children:"264MB"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"These are arbitrarily chosen values which are unlikely to match your actual\nworkload. I recommend reading the rest of the article to understand your\nsettings and how to reason about this. You can then use the prometheus metrics\nin the end to validate if your settings are a good match for your workload."}),"\n",(0,i.jsx)(t.h1,{id:"how-does-the-klm-work",children:"How does the KLM work?"}),"\n",(0,i.jsxs)(t.p,{children:["The KLM is a ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Hash_table",children:"hash table"})," which\ndescribes the position in your storage layer where your desired data is written\nand is indexed by hashing the key of your storage data."]}),"\n",(0,i.jsx)(t.p,{children:"Given a limited key space hash functions will have collisions, it is therefore\nimportant that the KLM is significantly larger than required for fitting a key\nfor every object. To keep the likelihood of a collision low a naive\nimplementation would require an enourmous hash table but using a technique\ncalled Robin Hood hashing this requirement can be kept down to a small factor\nlarger than the size of the key set requirement."}),"\n",(0,i.jsxs)(t.p,{children:["For example, in a blobstore which can fit ",(0,i.jsx)(t.code,{children:"n"})," objects and that has a KLM which\ncan fit ",(0,i.jsx)(t.code,{children:"2n"})," entries every hash would have a 50% chance of corresponding to an\nalready occupied slot. With Robin Hood hashing we can repeat this process\nmultiple times by incrementing an attempts counter giving us multiple possible\nlocations for the same object."]}),"\n",(0,i.jsx)(t.p,{children:"When querying for an object we can then search up to the maximum number of\nallowed iterations to find our object in one of these slots. When inserting we\nperform a similar solution, namely incrementing the number of attempts whenever\nwe encounter a collision but taking care to insert the younger of the colliding\nobjects in the colliding slot and pushing the older object forward."}),"\n",(0,i.jsxs)(t.p,{children:["The number of attempts we allow the KLM to look for a free slot is described by\nthe two parameters ",(0,i.jsx)(t.code,{children:"key_location_map_maximum_get_attempts"})," and the\n",(0,i.jsx)(t.code,{children:"key_location_map_maximum_put_attempts"})," described by the\n",(0,i.jsx)(t.a,{href:"https://github.com/buildbarn/bb-storage/blob/0941111f29e31905e4081e6262bccf0c123940ed/pkg/proto/configuration/blobstore/blobstore.proto#L429",children:(0,i.jsx)(t.code,{children:"LocalBlobAccessConfiguration"})}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"so-how-big-should-the-klm-be",children:"So, how big should the KLM be?"}),"\n",(0,i.jsxs)(t.p,{children:["Given a utilization rate ",(0,i.jsx)(t.code,{children:"r"})," the chance of finding the object within ",(0,i.jsx)(t.code,{children:"k"}),"\niterations is ",(0,i.jsx)(t.code,{children:"1-r^k"}),", we can therefore either decrease the utilization rate (by\nincreasing the size of the KLM) or increase the number of attempts."]}),"\n",(0,i.jsx)(t.p,{children:"Due to the random access nature of the KLM the KLM greatly benefits from being\nsmall enough to fit in memory, even if the KLM itself is disk backed. Should the\nKLM be too big to fit in memory it will be constantly paged in and out\ndetrimenting the system performance."}),"\n",(0,i.jsx)(t.p,{children:"Simularly, there also needs to be a max number of iterations, in the degenerate\ncase where the storage fits more entries than the klm is capable of inserting is\nfull the algorithm would never terminate since every single slot would be\noccupied."}),"\n",(0,i.jsx)(t.p,{children:"Having a KLM that is too small for the number of iterations used is bad."}),"\n",(0,i.jsx)(t.p,{children:"This is somewhat mitigated by the insertion order where the oldest entries get\npushed out first, since they are less likely to be relevant. This gives a\ngraceful degradation for when your KLM is too small. You should choose a KLM so\nthat the number of times you reach the maximum number of iterations is\nacceptably low."}),"\n",(0,i.jsx)(t.h1,{id:"how-rare-should-you-keep-the-maximum-nuber-of-iterations",children:"How rare should you keep the maximum nuber of iterations?"}),"\n",(0,i.jsx)(t.p,{children:"It should be rare, but most objects that get discarded due to the KLM being full\nwill tend to be old and unused. There is however a point where it is no longer\nmeaningful to have a larger KLM."}),"\n",(0,i.jsx)(t.p,{children:"Ultimately, any time you read or write to a disk there is a risk of failure.\nPopularly this is described as happening due to cosmic radiation but more\nrealistically it is due random hardware failures from imperfections in the\nhardware."}),"\n",(0,i.jsxs)(t.p,{children:["Picking ",(0,i.jsx)(t.code,{children:"k"})," and ",(0,i.jsx)(t.code,{children:"r"})," values that gives a risk of dataloss below the Uncorrectable\nBit Error Rate (UBER) of a disk is simply wasteful, should you wish to reduce\nthe risk below this value you need to look at mirroring data."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://documents.westerndigital.com/content/dam/doc-library/en_us/assets/public/western-digital/product/internal-drives/wd-gold-ssd/product-brief-wd-gold-enterprise-class-nvme-ssd.pdf",children:"Western\nDigital"}),"\nadvertises that their Gold enterprise NVME disks has an UBER rate of 1 in 10^17,\ni.e. about once per 10 petabytes of read data so will serve as a decent\nstandard."]}),"\n",(0,i.jsx)(t.p,{children:"For a random CAS object of 125KB this corresponds to a failure rate of about 1\nin 10^11 reads, giving us this neat graph."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"diagram",src:n(2964).A+"",width:"605",height:"340"})}),"\n",(0,i.jsx)(t.p,{children:"That is, for a KLM using the recommended 16 iterations giving it more than 5\nentries per object in the storage is a waste since you are just as likely to\nfail to read the object due to disk errors as due to the KLM accidentally\npushing it out."}),"\n",(0,i.jsx)(t.p,{children:"Similarly for 32 iterations there is no point in having more than 2 entries per\nobject, and for 8 iterations there is no point in having more than 20 entries\nper object."}),"\n",(0,i.jsx)(t.p,{children:"As for number of put iterations, just keep it at 4x the number of get\niterations. There is no fancy math here, it just needs to be bigger than the\nnumber of get iterations and it is very cheap since you will only put objects a\nminiscule fraction of the amount of times you will get objects."}),"\n",(0,i.jsx)(t.p,{children:"The thought of data randomly getting lost might upset you spiritually, but you\ncan comfort yourself with that you are far more likely to lose due to AWS\nengineer tripping on a cable in the datacenter."}),"\n",(0,i.jsx)(t.h1,{id:"how-do-i-verify-if-my-klms-are-properly-sized",children:"How do I verify if my KLMs are properly sized?"}),"\n",(0,i.jsx)(t.p,{children:"Buildbarn exposes the behavior of the hashing strategy in it's Prometheus\nmetrics, they are exposed in the following metrics:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"hashing_key_location_map_get_attempts"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"hashing_key_location_map_get_too_many_attempts_total"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"hashing_key_location_map_put_iterations"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"hashing_key_location_map_put_too_many_iterations_total"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These metrics exposes the required number of get and put attempts respectively\nas well as how many times we exceeded the maximum number of iterations, you can\nread the ratio between how many iterations were required to figure out how full\nthe klm is. I.e. if you perform half as many attempts with 2 iterations as with\n1 iteration this implies the klm is half full."}),"\n",(0,i.jsxs)(t.p,{children:["There are ready made Grafana dashboards which visualizes these metrics in in\n",(0,i.jsx)(t.a,{href:"https://github.com/buildbarn/bb-deployments",children:"bb-deployments"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2964:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/failure_rate-00397007b81f92d538f10370aeb9eb29.svg"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);