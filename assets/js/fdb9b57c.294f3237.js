"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},r="Components of a Build",l={unversionedId:"theory/components-of-a-build",id:"theory/components-of-a-build",title:"Components of a Build",description:"A build is a pretty abstract concept, for many developers it's what happens when you press f5 but before your application starts. So what does happen when you press f5? Well that depends on your underlying environment, but in general it runs a couple of actions.",source:"@site/docs/theory/components-of-a-build.md",sourceDirName:"theory",slug:"/theory/components-of-a-build",permalink:"/docs/theory/components-of-a-build",draft:!1,editUrl:"https://github.com/meroton/docs/edit/main/docs/theory/components-of-a-build.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Tips and Tricks",permalink:"/docs/tips/"}},s={},c=[{value:"What is an Action?",id:"what-is-an-action",level:2},{value:"Incremental Builds",id:"incremental-builds",level:2},{value:"Deterministic Compilations",id:"deterministic-compilations",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"components-of-a-build"},"Components of a Build"),(0,o.kt)("p",null,"A build is a pretty abstract concept, for many developers it's what happens when you press ",(0,o.kt)("inlineCode",{parentName:"p"},"f5")," but before your application starts. So what does happen when you press ",(0,o.kt)("inlineCode",{parentName:"p"},"f5"),"? Well that depends on your underlying environment, but in general it runs a couple of actions."),(0,o.kt)("h2",{id:"what-is-an-action"},"What is an Action?"),(0,o.kt)("p",null,"An action is something that takes input and produces output, an example of a simple action could be described by the command ",(0,o.kt)("inlineCode",{parentName:"p"},"cp\xa0example.txt\xa0example-copy.txt")," which executes the executable ",(0,o.kt)("inlineCode",{parentName:"p"},"cp")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"example.txt")," as its input and creates ",(0,o.kt)("inlineCode",{parentName:"p"},"example-copy.txt")," as its output."),(0,o.kt)("p",null,"For a more relevant but still small example consider the following ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," project which consists of a static library ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.c")," file consuming that library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// main.c\n#include "lib.h"\n\nvoid main() {\n  hello();\n}\n\n---\n\n// lib.h\nvoid hello();\nvoid world();\n\n---\n\n// lib.c\n#include "lib.h"\n#include "stdio.h"\n\nvoid hello() {\n  printf("Hello ");\n}\n\nvoid world() {\n  printf("World!);\n}\n\n')),(0,o.kt)("p",null,"We can compile this project with these 4 commands each representing an action"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," $> cc -c -o lib.o lib.c      # compile library into object file\n $> ar rcs lib.a lib.o        # turn library object files into a static library (an archive)\n $> cc -c -o main.o main.c    # compile main.c into an object file\n $> cc main.o lib.a -o main   # link our library and our object file into an executable\n")),(0,o.kt)("h2",{id:"incremental-builds"},"Incremental Builds"),(0,o.kt)("p",null,"The previous actions can be displayed with this dependency graph",(0,o.kt)("sup",null,(0,o.kt)("a",{parentName:"p",href:"#note-1"},"1"))),(0,o.kt)("a",{title:"Simplified dependency graph for our example",href:"#note-1"},(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"",src:"/img/dependency_graph.drawio.svg"}),(0,o.kt)("figcaption",null))),(0,o.kt)("p",null,"If we make a small modification to the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.c")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// main.c\n#include "lib.h"\n\nvoid main() {\n  hello();\n  world();\n}\n')),(0,o.kt)("p",null,"Then we only have to perform two actions, recompiling the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.c")," file and relinking (this is what is usually called an incremental build)."),(0,o.kt)("a",{title:"Incremental build graph for our example"},(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"",src:"/img/dependency_graph_incremental.drawio.svg"}),(0,o.kt)("figcaption",null))),(0,o.kt)("p",null,"A lot of developers have issues with their incremental builds where they are not stable, therefore requiring a clean build before building again. There are a few common reasons this would happen:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Race conditions, files can be modified during the build leading to some files incorrectly being consided unchanged since the last build"),(0,o.kt)("li",{parentName:"ol"},"Imperfect method of checking for changes, such as comparing timestamps of the files instead of the content"),(0,o.kt)("li",{parentName:"ol"},"Changed but unspecified dependencies, happens when your dependency graph is incomplete")),(0,o.kt)("p",null,"In a large project the vast majority of files will be untouched in between two different builds, therefore developers can expect a huge performance increase by by making sure that the incremental builds work correctly, as well as saving them a lot of headaches about peculiar bugs happening randomly."),(0,o.kt)("h2",{id:"deterministic-compilations"},"Deterministic Compilations"),(0,o.kt)("p",null,"The dependency graph helps us figure out which actions might need to be rerun, but sometimes an action might result in the same result as before. In that case we wouldn't want unnecessary actions to run further down in the tree."),(0,o.kt)("p",null,"Consider the case where we add a comment to our header file, documenting what the code does."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// lib.h\n\n// Prints "Hello" to the standard output\nvoid hello();\n\n')),(0,o.kt)("p",null,"Studying our dependency graph we see that we need to compilate of ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.o")," as well as a compilation of ",(0,o.kt)("inlineCode",{parentName:"p"},"main.o")," the output of those compilations do not change. This means the creation of a static library and the linking step can be short-circuited and the result of the previous compilation returned instead."),(0,o.kt)("a",{title:"Short-circuited incremental build graph for our example"},(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"",src:"/img/dependency_graph_short_circuited.drawio.svg"}),(0,o.kt)("figcaption",null))),(0,o.kt)("p",null,"This works because our build step is reproducible (often called a deterministic build), running it several times produces the exact same output. For the vast majority of software this is the intended behaviour. There are several advantages to having reproducible builds and there are very few valid reasons not to. However, sometimes the world doesn't work the way we want it to and fixing the issue is outside of our power, perhaps a piece of third party software is adding random timestamps or ids to the output. At those times you can often ignore the issue, try to move the non-determinism away from hot paths is your code so as to minimize the amount of wasted effort."),(0,o.kt)("p",null,"If you purposefully want the output to be non-deterministic it is better to add a dependency to a random source than to introduce it in your codebase, i.e. have the current time or a random seed as a dependency."),(0,o.kt)("hr",null),(0,o.kt)("span",{id:"note-1"},"Note 1:"),(0,o.kt)("p",null,"As a simplification we do not illustrate the implied action dependencies. I.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"main.o")," is not dependent on ",(0,o.kt)("inlineCode",{parentName:"p"},"main.c")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.h")," but only on the action described by ",(0,o.kt)("inlineCode",{parentName:"p"},"cc -c main.c -o main.o")," which in turn is dependent on ",(0,o.kt)("inlineCode",{parentName:"p"},"main.c")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.h"),"."),(0,o.kt)("p",null,"There are also a few implied dependencies here, notably the compiler, the c-standard library and its header files (usually located in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/include"),") as well as a few implied flags about compilation target. This is rarely a problem for the standard library but when you include more esoteric libraries version incompatibilities will rear its ugly head. This entire class of problem can be eliminated by containerizing our builds, i.e. the compilation is run by a well defined compiler inside a container, the container becomes part of the dependency graph and any forgotten dependencies will become immediately apparent (since the container wont know of them)."))}d.isMDXComponent=!0}}]);