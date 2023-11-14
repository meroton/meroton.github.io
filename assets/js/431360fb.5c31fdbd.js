"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={slug:"memory-adventure",title:"Memory Adventure",authors:"nils",tags:["bazel","buildbarn"]},i="Dude, where is the RAM?",l={permalink:"/blog/memory-adventure",editUrl:"https://github.com/meroton/docs/edit/main/blog/2023-11-13-memory-adventure/2023-11-13-adventure.mdx",source:"@site/blog/2023-11-13-memory-adventure/2023-11-13-adventure.mdx",title:"Memory Adventure",description:"An adventure in finding a memory thief in Starlark-land",date:"2023-11-13T00:00:00.000Z",formattedDate:"November 13, 2023",tags:[{label:"bazel",permalink:"/blog/tags/bazel"},{label:"buildbarn",permalink:"/blog/tags/buildbarn"}],readingTime:7.945,hasTruncateMarker:!1,authors:[{name:"Nils Wireklint",imageURL:"/img/nils-avatar.jpg",key:"nils"}],frontMatter:{slug:"memory-adventure",title:"Memory Adventure",authors:"nils",tags:["bazel","buildbarn"]},nextItem:{title:"BazelCon 2023",permalink:"/blog/bazelcon-2023"}},s={authorsImageUrls:[void 0]},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Toolbox",id:"toolbox",level:2},{value:"Expected Memory consumption",id:"expected-memory-consumption",level:2},{value:"Reported Memory Consumption",id:"reported-memory-consumption",level:2},{value:"Bazel dump --rules",id:"bazel-dump---rules",level:3},{value:"Skylark Memory Profile",id:"skylark-memory-profile",level:3},{value:"Eclipse Memory Analyzer",id:"eclipse-memory-analyzer",level:3},{value:"Build Time",id:"build-time",level:2},{value:"Pessimization with limited memory",id:"pessimization-with-limited-memory",level:2},{value:"Future work",id:"future-work",level:2}],p={toc:m};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An adventure in finding a memory thief in Starlark-land"),(0,r.kt)("p",null,"This is a summary and follow-up to ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=IXimf4DCAoY#t=7h21m57s"},"my talk")," at BazelCon-2023.\nWith abridged code examples, the full instructions are available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/meroton/memory-adventure"},"together with the code"),"."),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"First, we lament Bazel's out-of-memory errors,\nand point out that the often useful Starlark stacktrace does not always show up.\nSome allocation errors just crash Bazel without giving and indication of which allocation failed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"allocation",src:n(7132).Z,width:"1358",height:"952"})),(0,r.kt)("p",null,"This diagram illustrates a common problem for memory errors,\nthe allocation that fails may not be the problem,\nit is just the straw that breaks the camel's back.\nAnd the real thief may already have allocated its memory."),(0,r.kt)("p",null,"We have seen many errors when working with clients,\nand they typically hide in big corporate code bases.\nWhich complicates troubleshooting, discussion and error reporting.\nSo we create a synthetic repository to try to illustrate the problem,\nand have something to discuss.\nThe code and instructions are available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/meroton/memory-adventure"},"here"),"."),(0,r.kt)("p",null,"Errors and poor performance in the analysis phase\nare not good at all.\nThis is because the analysis must always be done\nbefore starting to build all actions.\nWith big projects the number of configuration to build for can be very large,\nso one cannot rely on CI runners to build the same configuration over and over,\nto retain the analysis cache.\nInstead it is on the critical-path for all builds,\nespecially if the actions themselves are cached remotely."),(0,r.kt)("p",null,'To illustrate (some of the problem) we have a reproduction repository\nwith example code base with some Python and C programs.\nTo introduce memory problems, and make it a little more complex\nwe add two rules: one CPU intensive rule ("spinlock")\nand one memory intensive aspect ("traverse").\nThe "traverse" aspect encodes the full dependency tree of all targets\nand writes that to a file with ',(0,r.kt)("inlineCode",{parentName:"p"},"ctx.actions.write"),".\nSo the allocations are tied to the Action object."),(0,r.kt)("h2",{id:"toolbox"},"Toolbox"),(0,r.kt)("p",null,"We have a couple of tools available, many are discussed in the ",(0,r.kt)("a",{parentName:"p",href:"https://bazel.build/rules/performance#memory-profiling"},"memory optimization guide"),",\nbut we find that some problems can slip through the cracks."),(0,r.kt)("p",null,"First off, there are the post-build analysis tools in bazel:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bazel info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bazel dump --rules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bazel aquery --skyframe_state"))),(0,r.kt)("p",null,"These are a good starting point and have served us well on many occasions.\nBut with this project they seem to miss some allocations\nWe will return to that later.\nAdditionally, these tool will not give any information if the Bazel server crashes.\nYou will need to increase the memory and run the same build again."),(0,r.kt)("p",null,"Then one can use Java tools to inspect what the JVM is doing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eclipse.dev/mat/documentation/"},"Eclipse Memory Analyzer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jmap"))),(0,r.kt)("p",null,"The best approach here is to ask Bazel to save the heap if it crashes,\nso it can be analyzed post-mortem: ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel --heap_dump_on_oom")),(0,r.kt)("p",null,"And lastly, use Bazel's profiling information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bazel --profile=profile.gz --generate_json_trace_profile --noslim_profile"))),(0,r.kt)("p",null,"This contains structured information\nand is written continuously to disk,\nso if Bazel crashes we can still parse it,\nwe just need to discard partially truncated events."),(0,r.kt)("h2",{id:"expected-memory-consumption"},"Expected Memory consumption"),(0,r.kt)("p",null,"As the two rules write their string allocations to output files\nwe get a clear picture of the expected RAM usage (or at least a lower bound)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ bazel clean\n$ bazel build \\\n  --aspects @example//memory:eat.bzl%traverse \\\n  --output_groups=default,eat_memory \\\n  //...\n# Memory intensive tree traversal (in KB)\n$ find bazel-out/ -name '*.tree' | xargs du | cut -f1 | paste -sd '+' | bc\n78504\n# CPU intensive spinlocks (in KB)\n$ find bazel-out/ -name '*.spinlock' | xargs du | cut -f1 | paste -sd '+' | bc\n3400\n")),(0,r.kt)("p",null,"Here is a table with the data:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Memory for each target"),(0,r.kt)("th",{parentName:"tr",align:null},"Total"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Memory intensive"),(0,r.kt)("td",{parentName:"tr",align:null},"0-17 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"79 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU intensive"),(0,r.kt)("td",{parentName:"tr",align:null},"136 KB"),(0,r.kt)("td",{parentName:"tr",align:null},"3.4 MB")))),(0,r.kt)("h2",{id:"reported-memory-consumption"},"Reported Memory Consumption"),(0,r.kt)("p",null,"Next, we check with the diagnostic tools."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ bazel version\nBazelisk version: development\nBuild label: 6.4.0\n")),(0,r.kt)("h3",{id:"bazel-dump---rules"},"Bazel dump --rules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ bazel $STARTUP_FLAGS --host_jvm_args=-Xmx"10g" dump --rules\nWarning: this information is intended for consumption by developers\nonly, and may change at any time. Script against it at your own risk!\n\nRULE                              COUNT     ACTIONS          BYTES         EACH\ncc_library                            4          17        524,320      131,080\nnative_binary                         1           4        524,288      524,288\ncc_binary                             6          54        262,176       43,696\ntoolchain_type                       14           0              0            0\ntoolchain                            74           0              0            0\n...\n\nASPECT                             COUNT     ACTIONS          BYTES         EACH\ntraverse                              85          81        262,432        3,087\nspinlock14                            35          66        524,112       14,974\nspinlock15                            35          66              0            0\n...\n')),(0,r.kt)("p",null,"First, there are some common rules that we do not care about here,\nthen we have the Aspects.\n",(0,r.kt)("inlineCode",{parentName:"p"},"traverse")," is the memory intensive aspect,\nwhich is applied on the command line\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"spinlock<N>")," are the CPU intensive rules,\nwith identical implementations just numbered (there are 25 of them)."),(0,r.kt)("p",null,'It is a little surprising that only one have allocations.\nAnd the action count for each aspect does not make sense either,\nas this is not a transitive aspect.\nIt just runs a single action each time the rule is instantiated.\nThe hypothesis is that this is a display problem,\nwith code shared between rules.\nThere are 25 rules, with 25 distinct implementation functions,\nbut they in turn call the same function with the action.\nSo the "count" and "actions" columns are glued together,\nbut the "bytes" is reported for just one of the rules (it would be bad if this was double-counted).'),(0,r.kt)("p",null,"Either way,\nthe total number of bytes does not add up to what we expect.\nCompare the output to the lower-bound determined before:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Memory for each target"),(0,r.kt)("th",{parentName:"tr",align:null},"Total"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Memory intensive"),(0,r.kt)("td",{parentName:"tr",align:null},"0-17 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"79 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU intensive"),(0,r.kt)("td",{parentName:"tr",align:null},"136 KB"),(0,r.kt)("td",{parentName:"tr",align:null},"3.4 MB")))),(0,r.kt)("h3",{id:"skylark-memory-profile"},"Skylark Memory Profile"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is not part of the video.")),(0,r.kt)("p",null,"The skylark memory profiler is much more advanced,\nand can be dumped after a successful build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ bazel $STARTUP_FLAGS --host_jvm_args=-Xmx"$mem" dump \\\n    --skylark_memory="$dir/memory.pprof"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ pprof manual/2023-10-30/10g-2/memory.pprof\nMain binary filename not available.\nType: memory\nTime: Oct 30, 2023 at 12:16pm (CET)\nEntering interactive mode (type "help" for commands, "o" for options)\n(pprof) top\nShowing nodes accounting for 2816.70kB, 73.34% of 3840.68kB total\nShowing top 10 nodes out of 19\n      flat  flat%   sum%        cum   cum%\n     512kB 13.33% 13.33%      512kB 13.33%  impl2\n  256.16kB  6.67% 20.00%   256.16kB  6.67%  traverse_impl\n  256.11kB  6.67% 26.67%   256.11kB  6.67%  _add_linker_artifacts_output_groups\n  256.09kB  6.67% 33.34%   256.09kB  6.67%  alias\n  256.09kB  6.67% 40.00%   256.09kB  6.67%  rule\n  256.08kB  6.67% 46.67%   256.08kB  6.67%  to_list\n  256.06kB  6.67% 53.34%   256.06kB  6.67%  impl7\n  256.04kB  6.67% 60.01%   256.04kB  6.67%  _is_stamping_enabled\n  256.04kB  6.67% 66.67%   256.04kB  6.67%  impl18\n  256.03kB  6.67% 73.34%   768.15kB 20.00%  cc_binary_impl\n')),(0,r.kt)("p",null,"Here the Memory intensive aspect shows up with 256kB,\nwhich is inline with the output from ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel dump --rules"),",\nbut not reflecting the big allocations we knows it makes."),(0,r.kt)("h3",{id:"eclipse-memory-analyzer"},"Eclipse Memory Analyzer"),(0,r.kt)("p",null,"The final tool we have investigated is the Java heap analysis tool\n",(0,r.kt)("a",{parentName:"p",href:"https://eclipse.dev/mat/documentation/"},"Eclipse Memory Analyzer"),",\nwhich can easily be used with Bazel's ",(0,r.kt)("inlineCode",{parentName:"p"},"--heap_dump_on_oom")," flag.\nOn the other hand it is a little tricker to find a heap dump from a successful build."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"eclipse-analysis",src:n(1215).Z,width:"1082",height:"402"})),(0,r.kt)("p",null,"Here we see the (very) big allocation clear as day,\nbut have no information of its provenance."),(0,r.kt)("p",null,"We have not found how to track this back to a Skylark function, Skyframe evaluator\nor anything that could be cross-referenced with the profiling information."),(0,r.kt)("h2",{id:"build-time"},"Build Time"),(0,r.kt)("p",null,"The next section of the talk shows the execution time of the build\nwith varying memory limits."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"combined",src:n(5257).Z,width:"640",height:"480"})),(0,r.kt)("p",null,"This is benchmarked with 5 data points for each memory limit,\nand the plot shows failure if there was at least one crash among the data points.\nThere is a region where the build starts to succeed more and more often, but sometimes crashes.\nSo the Crash and not-crash graphs overlap a little,\nyou want to have some leeway to avoid flaky builds from occasional out-of-memory crashes."),(0,r.kt)("p",null,"We see that the Skymeld graph requires a lot less memory than a regular build,\nthat is because our big allocations are all tied to Action objects.\nEnabling Skymeld lets Bazel start executing Actions as soon as they are ready,\nso the resident set of Action objects does not grow so large,\nand the allocations can be freed much sooner."),(0,r.kt)("h2",{id:"pessimization-with-limited-memory"},"Pessimization with limited memory"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pessimization",src:n(6720).Z,width:"1212",height:"827"})),(0,r.kt)("p",null,"We saw a hump in the build time for the Skymeld graph,\nwhere the builds did succeed in the 300 - 400 MB range,\nbut the build speed gradually increased, reaching a plateau at around 500 MB.\nThis is a pattern we have seen before,\nwhere more RAM, or more efficient rules can improve build performance."),(0,r.kt)("p",null,"This is probably because the memory pressure and the Java Garbage Collector\ninterferes with the Skyframe work.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=8Dc8R_Zrf6M&t=3039s"},"Benjamin Peterson's great talk")," about the Skyframe for more information."),(0,r.kt)("h2",{id:"future-work"},"Future work"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"example profile",src:n(7983).Z,width:"809",height:"664"})),(0,r.kt)("p",null,"This section details future work for more tools and signals\nthat we can find from Bazel's profile information\n",(0,r.kt)("inlineCode",{parentName:"p"},"--profile=profile.gz --generate_json_trace_profile --noslim_profile"),".\nWritten in the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome://tracing")," format\nit is easy to parse for both successful and failed builds."),(0,r.kt)("p",null,"This contains events for the garbage collector,\nand all executed Starlark functions."),(0,r.kt)("p",null,"These can be correlated\nto find which functions are active during, or before, garbage collection events.\nAdditionally, one could collect this information for all failed builds,\nand see if some functions are overrepresented\namong the last active functions for each evaluator in the build."))}u.isMDXComponent=!0},5257:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/build-time-memory-plot-39f61e675034b7e845f9abdbfa8951f4.png"},1215:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eclipse-memory-analyzer-5f46da77b0ac91a7a92dc4c2d3b445b3.png"},7983:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-chrome-tracing-424c445f4f5a56244ed23a270ba7c0c3.png"},6720:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/low-memory-pessimization-667ab96247ad01ee0ec7d5b75b830d84.png"},7132:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/memory-allocation-failure-298bf3c0d8e472754fd513fa6c0ce57d.png"}}]);