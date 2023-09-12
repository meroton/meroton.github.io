"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={slug:"bazel-6-errors-build-without-the-bytes",title:"Bazel 6 Errors when using Build without the Bytes",authors:"benjamin",tags:["bazel","bugs"]},i=void 0,o={permalink:"/blog/bazel-6-errors-build-without-the-bytes",editUrl:"https://github.com/meroton/docs/edit/main/blog/2023-02-07-bazel-errors-when-using-bazel-6.mdx",source:"@site/blog/2023-02-07-bazel-errors-when-using-bazel-6.mdx",title:"Bazel 6 Errors when using Build without the Bytes",description:"_ UPDATE:  Bazel has a workaround for this issue",date:"2023-02-07T00:00:00.000Z",formattedDate:"February 7, 2023",tags:[{label:"bazel",permalink:"/blog/tags/bazel"},{label:"bugs",permalink:"/blog/tags/bugs"}],readingTime:3.285,hasTruncateMarker:!1,authors:[{name:"Benjamin Ingberg",imageURL:"/img/benjamin-avatar.png",key:"benjamin"}],frontMatter:{slug:"bazel-6-errors-build-without-the-bytes",title:"Bazel 6 Errors when using Build without the Bytes",authors:"benjamin",tags:["bazel","bugs"]},prevItem:{title:"Updates to Buildbarn deployment repo as of Febuary 2023",permalink:"/blog/bb-deployments-updates-2023-02"},nextItem:{title:"BuildBar at the Meroton Office",permalink:"/blog/buildbar-at-meroton-office"}},s={authorsImageUrls:[void 0]},u=[{value:"Background",id:"background",level:2},{value:"Before v6.0.0",id:"before-v600",level:2},{value:"After v6.0.0",id:"after-v600",level:2}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"}," UPDATE: ")," Bazel has a workaround for this issue\npreventing the permanent build failure loop from 6.1.0 and\na proper fix with the introduction of\n",(0,r.kt)("a",{parentName:"em",href:"https://bazel.build/reference/command-line-reference#flag--experimental_remote_cache_ttl"},(0,r.kt)("inlineCode",{parentName:"a"},"--experimental_remote_cache_ttl")),"\nin Bazel 7")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Starting from v6.0.0, Bazel crashes when building without the bytes.\nBecause it sets ",(0,r.kt)("inlineCode",{parentName:"p"},"--experimental_action_cache_store_output_metadata"),"\nwhen using ",(0,r.kt)("inlineCode",{parentName:"p"},"--remote_download_minimal")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--remote_download_toplevel"),"."),(0,r.kt)("p",null,"Effectively this leads to Bazel getting stuck in a build failure loop\nwhen your remote cache evicts an item you need from the cache."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"developer@machine:~$ bazel test @abseil-hello//:hello_test --remote_download_\nminimal\n\n[0 / 6] [Prepa] BazelWorkspaceStatusAction stable-status.txt\nERROR: /home/developer/.cache/bazel/_bazel_developer/139b99b96c4ab6cba5122193\n1a36e346/external/abseil-hello/BUILD.bazel:26:8: Linking external/abseil-hell\no/hello_test failed: (Exit 34): 42 errors during bulk transfer:\njava.io.FileNotFoundException: /home/developer/.cache/bazel/_bazel_developer/\n139b99b96c4ab6cba51221931a36e346/execroot/cache_test/bazel-out/k8-fastbuild/b\nin/external/com_google_absl/absl/base/_objs/base/spinlock.pic.o (No such file\n or directory)\n...\nTarget @abseil-hello//:hello_test failed to build\nUse --verbose_failures to see the command lines of failed build steps.\nINFO: Elapsed time: 3.820s, Critical Path: 0.88s\nINFO: 5 processes: 4 internal, 1 remote.\nFAILED: Build did NOT complete successfully\n@abseil-hello//:hello_test                                   FAILED TO BUILD\n")),(0,r.kt)("p",null,"The key here is ",(0,r.kt)("strong",{parentName:"p"},"(Exit 34): xx errors during bulk transfer"),".\n34 is Bazel's error code for Remote Error."),(0,r.kt)("p",null,"The recommended solution is to set the flag explicitly to false,\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"--experimental_action_cache_store_output_metadata=false"),".\nTo quickly solve the issue on your local machine you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel clean"),".\nHowever, this will just push the error into the future."),(0,r.kt)("p",null,"The bug is independent of which remote cache system you use\nand is tracked at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazel/issues/17366"},"GitHub"),"."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"When performing an analysis of what to build\nBazel will ask the remote cache which items have already been built.\nBazel will only schedule build actions for items\nthat do not already exist in the cache.\nIf running a build without the bytes",(0,r.kt)("sup",{parentName:"p",id:"fnref-1-13c049"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1-13c049",className:"footnote-ref"},"1")),"\nthe intermediary results will not be downloaded to the client."),(0,r.kt)("p",null,"Should the cached items be evicted\nthen Bazel will run into an unrecoverable error.\nIt wants the remote system to perform an action using inputs from the cache,\nbut they have disappeared.\nAnd Bazel can not upload them,\nas they were never downloaded to the client.\nThe build would then dutifully crash\n(some work has been put into trying to\n",(0,r.kt)("a",{parentName:"p",href:"https://groups.google.com/g/bazel-dev/c/WwNN4kiYSpc"},"resolve this on the bazel side"),"\nbut it has not been considered a priority)."),(0,r.kt)("p",null,"This puts an implicit requirement on the remote cache implementation.\nArtifacts need to be saved for as long as Bazel needs them.\nThe problem here is that this is an undefined period of time.\nBazel will not proactively check if the item still exists,\nnor in any other manner inform the cache that\nit will need the item in the future."),(0,r.kt)("h2",{id:"before-v600"},"Before v6.0.0"),(0,r.kt)("p",null,"Bazel tied the lifetime of which items already exists in the cache\n(the existence cache)\nto the analysis cache.\nWhenever the analysis cache was purged it would also drop the existence cache."),(0,r.kt)("p",null,"The analysis cache is purged quite frequently.\nIt would therefore be rare in practice,\nthat the existence cache would be out of date.\nFurthermore, since the existence cache was an in-memory cache,\nBazel crashing would forcefully evict the existence cache.\nThereby fixing the issue."),(0,r.kt)("h2",{id:"after-v600"},"After v6.0.0"),(0,r.kt)("p",null,"With the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--experimental_action_cache_store_output_metadata")," flag enabled by default\nthe existence cache is instead committed to disk and\nnever dropped during normal operation."),(0,r.kt)("p",null,"This means two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The implied requirement on the remote cache is effectively infinite."),(0,r.kt)("li",{parentName:"ol"},"Should this requirement not be met the build will fail.\nAnd since the existence cache is committed to disk Bazel will just\nfail again the next time you run it.")),(0,r.kt)("p",null,"Currently the only user-facing way of purging the existence cache\nis to run ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel clean"),".\nWhich is generally considered an anti-pattern."),(0,r.kt)("p",null,"If you are using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildbarn/bb-clientd#-to-perform-remote-builds-without-the-bytes"},"bb-clientd")," ",(0,r.kt)("inlineCode",{parentName:"p"},"--remote_output_service"),"\nto run builds without the bytes\n(an alternative strategy to ",(0,r.kt)("inlineCode",{parentName:"p"},"--remote_download_minimal"),")\nthis will not affect you."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1-13c049"},"When using Bazel with remote execution\nremote builds are run in a remote server cluster.\nThere is therefore no need for each developer\nto download the partial results of build.\nBazel calls this feature\n",(0,r.kt)("a",{parentName:"li",href:"https://blog.bazel.build/2019/05/07/builds-without-bytes.html"},"Remote Builds Without the Bytes"),".\nThe progress of the feature can be tracked at\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bazelbuild/bazel/issues/6862"},"GitHub"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-1-13c049",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);