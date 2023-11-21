"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8966],{9665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(5893),a=n(1151);const o={slug:"bazel-6-errors-build-without-the-bytes",title:"Bazel 6 Errors when using Build without the Bytes",authors:"benjamin",tags:["bazel","bugs"]},r=void 0,l={permalink:"/blog/bazel-6-errors-build-without-the-bytes",editUrl:"https://github.com/meroton/docs/edit/main/blog/2023-02-07-bazel-errors-when-using-bazel-6.mdx",source:"@site/blog/2023-02-07-bazel-errors-when-using-bazel-6.mdx",title:"Bazel 6 Errors when using Build without the Bytes",description:"_ UPDATE:  Bazel has a workaround for this issue",date:"2023-02-07T00:00:00.000Z",formattedDate:"February 7, 2023",tags:[{label:"bazel",permalink:"/blog/tags/bazel"},{label:"bugs",permalink:"/blog/tags/bugs"}],readingTime:3.285,hasTruncateMarker:!1,authors:[{name:"Benjamin Ingberg",imageURL:"/img/benjamin-avatar.png",key:"benjamin"}],frontMatter:{slug:"bazel-6-errors-build-without-the-bytes",title:"Bazel 6 Errors when using Build without the Bytes",authors:"benjamin",tags:["bazel","bugs"]},unlisted:!1,prevItem:{title:"Updates to Buildbarn deployment repo as of Febuary 2023",permalink:"/blog/bb-deployments-updates-2023-02"},nextItem:{title:"BuildBar at the Meroton Office",permalink:"/blog/buildbar-at-meroton-office"}},s={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"Before v6.0.0",id:"before-v600",level:2},{value:"After v6.0.0",id:"after-v600",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["** UPDATE: ** Bazel has a workaround for this issue\npreventing the permanent build failure loop from 6.1.0 and\na proper fix with the introduction of\n",(0,i.jsx)(t.a,{href:"https://bazel.build/reference/command-line-reference#flag--experimental_remote_cache_ttl",children:(0,i.jsx)(t.code,{children:"--experimental_remote_cache_ttl"})}),"\nin Bazel 7"]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Starting from v6.0.0, Bazel crashes when building without the bytes.\nBecause it sets ",(0,i.jsx)(t.code,{children:"--experimental_action_cache_store_output_metadata"}),"\nwhen using ",(0,i.jsx)(t.code,{children:"--remote_download_minimal"})," or ",(0,i.jsx)(t.code,{children:"--remote_download_toplevel"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Effectively this leads to Bazel getting stuck in a build failure loop\nwhen your remote cache evicts an item you need from the cache."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"developer@machine:~$ bazel test @abseil-hello//:hello_test --remote_download_\nminimal\n\n[0 / 6] [Prepa] BazelWorkspaceStatusAction stable-status.txt\nERROR: /home/developer/.cache/bazel/_bazel_developer/139b99b96c4ab6cba5122193\n1a36e346/external/abseil-hello/BUILD.bazel:26:8: Linking external/abseil-hell\no/hello_test failed: (Exit 34): 42 errors during bulk transfer:\njava.io.FileNotFoundException: /home/developer/.cache/bazel/_bazel_developer/\n139b99b96c4ab6cba51221931a36e346/execroot/cache_test/bazel-out/k8-fastbuild/b\nin/external/com_google_absl/absl/base/_objs/base/spinlock.pic.o (No such file\n or directory)\n...\nTarget @abseil-hello//:hello_test failed to build\nUse --verbose_failures to see the command lines of failed build steps.\nINFO: Elapsed time: 3.820s, Critical Path: 0.88s\nINFO: 5 processes: 4 internal, 1 remote.\nFAILED: Build did NOT complete successfully\n@abseil-hello//:hello_test                                   FAILED TO BUILD\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The key here is ",(0,i.jsx)(t.strong,{children:"(Exit 34): xx errors during bulk transfer"}),".\n34 is Bazel's error code for Remote Error."]}),"\n",(0,i.jsxs)(t.p,{children:["The recommended solution is to set the flag explicitly to false,\nwith ",(0,i.jsx)(t.code,{children:"--experimental_action_cache_store_output_metadata=false"}),".\nTo quickly solve the issue on your local machine you can run ",(0,i.jsx)(t.code,{children:"bazel clean"}),".\nHowever, this will just push the error into the future."]}),"\n",(0,i.jsxs)(t.p,{children:["The bug is independent of which remote cache system you use\nand is tracked at ",(0,i.jsx)(t.a,{href:"https://github.com/bazelbuild/bazel/issues/17366",children:"GitHub"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,i.jsxs)(t.p,{children:["When performing an analysis of what to build\nBazel will ask the remote cache which items have already been built.\nBazel will only schedule build actions for items\nthat do not already exist in the cache.\nIf running a build without the bytes",(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-1-13c049",id:"user-content-fnref-1-13c049","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\nthe intermediary results will not be downloaded to the client."]}),"\n",(0,i.jsxs)(t.p,{children:["Should the cached items be evicted\nthen Bazel will run into an unrecoverable error.\nIt wants the remote system to perform an action using inputs from the cache,\nbut they have disappeared.\nAnd Bazel can not upload them,\nas they were never downloaded to the client.\nThe build would then dutifully crash\n(some work has been put into trying to\n",(0,i.jsx)(t.a,{href:"https://groups.google.com/g/bazel-dev/c/WwNN4kiYSpc",children:"resolve this on the bazel side"}),"\nbut it has not been considered a priority)."]}),"\n",(0,i.jsx)(t.p,{children:"This puts an implicit requirement on the remote cache implementation.\nArtifacts need to be saved for as long as Bazel needs them.\nThe problem here is that this is an undefined period of time.\nBazel will not proactively check if the item still exists,\nnor in any other manner inform the cache that\nit will need the item in the future."}),"\n",(0,i.jsx)(t.h2,{id:"before-v600",children:"Before v6.0.0"}),"\n",(0,i.jsx)(t.p,{children:"Bazel tied the lifetime of which items already exists in the cache\n(the existence cache)\nto the analysis cache.\nWhenever the analysis cache was purged it would also drop the existence cache."}),"\n",(0,i.jsx)(t.p,{children:"The analysis cache is purged quite frequently.\nIt would therefore be rare in practice,\nthat the existence cache would be out of date.\nFurthermore, since the existence cache was an in-memory cache,\nBazel crashing would forcefully evict the existence cache.\nThereby fixing the issue."}),"\n",(0,i.jsx)(t.h2,{id:"after-v600",children:"After v6.0.0"}),"\n",(0,i.jsxs)(t.p,{children:["With the\n",(0,i.jsx)(t.code,{children:"--experimental_action_cache_store_output_metadata"})," flag enabled by default\nthe existence cache is instead committed to disk and\nnever dropped during normal operation."]}),"\n",(0,i.jsx)(t.p,{children:"This means two things:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The implied requirement on the remote cache is effectively infinite."}),"\n",(0,i.jsx)(t.li,{children:"Should this requirement not be met the build will fail.\nAnd since the existence cache is committed to disk Bazel will just\nfail again the next time you run it."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Currently the only user-facing way of purging the existence cache\nis to run ",(0,i.jsx)(t.code,{children:"bazel clean"}),".\nWhich is generally considered an anti-pattern."]}),"\n",(0,i.jsxs)(t.p,{children:["If you are using the ",(0,i.jsx)(t.a,{href:"https://github.com/buildbarn/bb-clientd#-to-perform-remote-builds-without-the-bytes",children:"bb-clientd"})," ",(0,i.jsx)(t.code,{children:"--remote_output_service"}),"\nto run builds without the bytes\n(an alternative strategy to ",(0,i.jsx)(t.code,{children:"--remote_download_minimal"}),")\nthis will not affect you."]}),"\n",(0,i.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{id:"user-content-fn-1-13c049",children:["\n",(0,i.jsxs)(t.p,{children:["When using Bazel with remote execution\nremote builds are run in a remote server cluster.\nThere is therefore no need for each developer\nto download the partial results of build.\nBazel calls this feature\n",(0,i.jsx)(t.a,{href:"https://blog.bazel.build/2019/05/07/builds-without-bytes.html",children:"Remote Builds Without the Bytes"}),".\nThe progress of the feature can be tracked at\n",(0,i.jsx)(t.a,{href:"https://github.com/bazelbuild/bazel/issues/6862",children:"GitHub"}),". ",(0,i.jsx)(t.a,{href:"#user-content-fnref-1-13c049","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var i=n(7294);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);