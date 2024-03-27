"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7315],{8824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(5893),o=n(1151);const r={title:"V Integrating Mountat in Buildbarn",sidebar_position:5},s="Integrating mountat in Buildbarn",a={id:"improved-chroot-in-buildbarn/integrating-mountat",title:"V Integrating Mountat in Buildbarn",description:"This is a living document describing the path to merging the patches from this work into [Buildbarn].",source:"@site/docs/improved-chroot-in-buildbarn/integrating-mountat.md",sourceDirName:"improved-chroot-in-buildbarn",slug:"/improved-chroot-in-buildbarn/integrating-mountat",permalink:"/docs/improved-chroot-in-buildbarn/integrating-mountat",draft:!1,unlisted:!1,editUrl:"https://github.com/meroton/docs/edit/main/docs/improved-chroot-in-buildbarn/integrating-mountat.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"V Integrating Mountat in Buildbarn",sidebar_position:5},sidebar:"sidebar",previous:{title:"IV Trying to Implement Unmountat",permalink:"/docs/improved-chroot-in-buildbarn/implementing-unmountat"},next:{title:"Reproducing the problem",permalink:"/docs/improved-chroot-in-buildbarn/reproducing-the-problem"}},h={},d=[{value:"Requirements",id:"requirements",level:2},{value:"First hack: use dumb-old &#39;mount&#39; in the runner",id:"first-hack-use-dumb-old-mount-in-the-runner",level:2},{value:"Second best-effort: use new &#39;mountat&#39; but hack unmounting through absolute paths",id:"second-best-effort-use-new-mountat-but-hack-unmounting-through-absolute-paths",level:2},{value:"Use the mtab as a workaround",id:"use-the-mtab-as-a-workaround",level:3},{value:"Third attempt: with relative-path unmount",id:"third-attempt-with-relative-path-unmount",level:2},{value:"Alternative: unmount in a subprocess",id:"alternative-unmount-in-a-subprocess",level:3},{value:"Desired solution: full mountat semantics with unmountat",id:"desired-solution-full-mountat-semantics-with-unmountat",level:2},{value:"Observe filesystem operations in the docker",id:"observe-filesystem-operations-in-the-docker",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"integrating-mountat-in-buildbarn",children:"Integrating mountat in Buildbarn"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This is a living document describing the path to merging the patches from this work into ",(0,i.jsx)(t.a,{href:"https://github.com/buildbarn/bb-remote-execution/",children:"Buildbarn"}),".\nWe will post better patches here as we develop them."]})}),"\n",(0,i.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Linux 5.2:\n",(0,i.jsx)(t.a,{href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/ChangeLog-5.2",children:"for the new mount api"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Super user privileges:\nWe want to limit this to just ",(0,i.jsx)(t.code,{children:"CAP_MOUNT"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"first-hack-use-dumb-old-mount-in-the-runner",children:"First hack: use dumb-old 'mount' in the runner"}),"\n",(0,i.jsxs)(t.p,{children:["This is the proof-of-concept patch, to demonstrate that these two mounts is the missing piece.\nThis hacks around the filesystem veil by observing the ",(0,i.jsx)(t.em,{children:"command"})," object's\nchroot attribute,\nwhich is set for the processes metadata before the ",(0,i.jsx)(t.em,{children:"runner"})," ",(0,i.jsx)(t.code,{children:"fork"}),"s and ",(0,i.jsx)(t.code,{children:"exec"}),"s the ",(0,i.jsx)(t.em,{children:"action"}),".\nThis is not something that should be observed and this patch will not be merged.\nBut we have used it for a while and you can use it too."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/buildbarn/bb-remote-execution/issues/115",children:"https://github.com/buildbarn/bb-remote-execution/issues/115"}),"\n\xa7 Proof of Concept Patch"]}),"\n",(0,i.jsx)(t.p,{children:"This will not be submitted to the code,\nbut serves as a good demonstration of the problem."}),"\n",(0,i.jsx)(t.h2,{id:"second-best-effort-use-new-mountat-but-hack-unmounting-through-absolute-paths",children:"Second best-effort: use new 'mountat' but hack unmounting through absolute paths"}),"\n",(0,i.jsxs)(t.p,{children:["Through ",(0,i.jsx)(t.a,{href:"/docs/improved-chroot-in-Buildbarn/implementing-mountat/",children:"implementing mountat"})," (",(0,i.jsx)(t.a,{href:"https://github.com/meroton/prototype-mountat/blob/main/cmd/mountat/main.go#L231",children:"in golang"}),")\nwe can now mount the special filesystems with ",(0,i.jsx)(t.code,{children:"mountat"}),",\nfollowing the provided abstractions.\nBut the unmounting code ",(0,i.jsx)(t.a,{href:"/docs/improved-chroot-in-Buildbarn/implementing-unmountat/",children:"is not implemented"}),"\nso we have to use a hack/workaround\nthat parses the ",(0,i.jsx)(t.code,{children:"fstab"})," for the mounts we created so they can be unmounted."]}),"\n",(0,i.jsx)(t.h3,{id:"use-the-mtab-as-a-workaround",children:"Use the mtab as a workaround"}),"\n",(0,i.jsxs)(t.p,{children:["With every mount the kernel thankfully registers it in ",(0,i.jsx)(t.code,{children:"/etc/mtab"}),",\nand even though our program does not know the absolute paths,\nno one fools the kernel.\nSo with just a little peek behind the ",(0,i.jsx)(t.em,{children:"veil"}),", or with this escape hatch, the ",(0,i.jsx)(t.em,{children:"curtain"}),".\nWe can unmount our files as well.\nThis is deemed acceptable for now,\nas this inhermiticity is in the exit code path of our programs,\nwe would not want to escape the abstraction during normal mode of operation."]}),"\n",(0,i.jsx)(t.p,{children:"1: Parse the fstab for a mountpoint basename\nand a directory path segment,\nthat must be unique to find the real mount.\nso the application should preferably create a parent to the filesystem\nwith a known name.\nOr, if we can use a known base directory\nbut the intermediary directory names are unknown."}),"\n",(0,i.jsxs)(t.p,{children:["2: Call ",(0,i.jsx)(t.code,{children:"umount"})," on the mountpoint,\nsome filesystems are (almost) always busy\nso you may need ",(0,i.jsx)(t.code,{children:"MNT_FORCE"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["This is a little bit of a hack, but works well in practice.\nThe implementation needs more error handling than what is ergonomic in C.\nYou can read the implementation here: ",(0,i.jsx)(t.a,{href:"https://github.com/meroton/prototype-mountat/blob/main/cmd/mountat/main.go",children:"mountat"}),".\nThis is written in ",(0,i.jsx)(t.code,{children:"go"}),", just like ",(0,i.jsx)(t.a,{href:"https://github.com/buildbarn/bb-remote-execution/",children:"Buildbarn"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"We will not pursue adding this to Buildbarn."}),"\n",(0,i.jsx)(t.h2,{id:"third-attempt-with-relative-path-unmount",children:"Third attempt: with relative-path unmount"}),"\n",(0,i.jsxs)(t.p,{children:["To change the directory with ",(0,i.jsx)(t.code,{children:"fchdir"})," is a noticeable side-effect,\nbut better than the two previous alternatives.\nThe most pragmatic solution is to add a semaphore around this code,\nto make sure that we return the program's working directory after unmounts."]}),"\n",(0,i.jsxs)(t.p,{children:["After submitting the initial PR we found that ",(0,i.jsx)(t.a,{href:"https://github.com/buildbarn/bb-storage/blob/ece87ab6dc2a9e1e592d2032f5a02c3694765cfc/pkg/filesystem/local_directory_unix.go#L271",children:"Buildbarn already did this"}),'.\nBy creating the semaphore again and getting a "duplicate symbol definition" error from the LSP.\nThat\'s how it goes sometimes...']}),"\n",(0,i.jsx)(t.h3,{id:"alternative-unmount-in-a-subprocess",children:"Alternative: unmount in a subprocess"}),"\n",(0,i.jsxs)(t.p,{children:["One could also take it further with a subprocess,\nso the directory change is completely isolated.\nThe extra overhead is acceptable\nas unmounting is not in the ",(0,i.jsx)(t.em,{children:"action"}),"'s critical path."]}),"\n",(0,i.jsxs)(t.p,{children:["This requires a ",(0,i.jsx)(t.a,{href:"https://github.com/meroton/prototype-mountat/blob/cmd/relative-unmount/main.go",children:"separate program"})," that performs the unmount,\nand code in the main program that forks and executes the unmounter.\nBazel has everything we need for that,\nthe only thing to remember is that the directory file descriptor\nmust be sent to the child.\nWe just duplicate it with ",(0,i.jsx)(t.code,{children:"unix.Dup"})," so it is inherited.\nThis is implemented in the ",(0,i.jsx)(t.a,{href:"https://github.com/meroton/prototype-mountat/blob/main/cmd/mountat/main.go",children:"mountat"})," program\nand we will prepare a pull request so you can try it out in the ",(0,i.jsx)(t.a,{href:"https://github.com/buildbarn/bb-remote-execution/",children:"Buildbarn"})," code."]}),"\n",(0,i.jsx)(t.p,{children:"But this would make it much harder to run the program as a standalone program,\nas it needs to bring the companion program.\nManaging two files is much more inconvenient than a single file.\nTo solve this one could redesign the program\nto itself implement the unmounting code path if launched with special arguments.\nThis is a useful technique but makes it harder to understand what the program does."}),"\n",(0,i.jsx)(t.h2,{id:"desired-solution-full-mountat-semantics-with-unmountat",children:"Desired solution: full mountat semantics with unmountat"}),"\n",(0,i.jsx)(t.p,{children:"This should be possible,\nthe documentation does indicate that we can do so.\nI hope someone can spot my errors, so we find the solution."}),"\n",(0,i.jsx)(t.p,{children:"But maybe the vagaries of filesystems and mounts\nare so that this is not something Linux wants?"}),"\n",(0,i.jsx)(t.h1,{id:"tips-and-tricks-from-development",children:"Tips and Tricks from development"}),"\n",(0,i.jsx)(t.h2,{id:"observe-filesystem-operations-in-the-docker",children:"Observe filesystem operations in the docker"}),"\n",(0,i.jsx)(t.p,{children:"You can see what mounts are active (and removed!) inside the docker image.\nA new id is generated each time the image starts,\nso two commands are needed.\nYou should see two mounts for each active action,\nand no remaining mounts for completed actions."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'id="$(docker-compose $ docker ps                 \\\n  | grep docker-compose-runner-fuse-distroless-1 \\\n  | cut -d \' \' -f1)"\ndocker-compose $ docker exec -it "$id" bash\n\nroot@21dee4887020:/tmp# mount -v | grep /worker/build\nbb_worker on /worker/build type fuse.SimpleRawFileSystem (rw,relatime,user_id=0,group_id=0,allow_other)\n/proc on /worker/build/f3fb7c74c3b342a0/root/proc type proc (rw,noexec,relatime)\n/sys on /worker/build/f3fb7c74c3b342a0/root/sys type sysfs (rw,noexec,relatime)\n...\n'})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(7294);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);