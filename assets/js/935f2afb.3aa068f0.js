"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"sidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"Theory","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Components of a Build","href":"/docs/theory/components-of-a-build","docId":"theory/components-of-a-build","unlisted":false}]},{"type":"category","label":"Practice","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Automatically reformat all commits on a branch","href":"/docs/practice/rebase-and-reformat-git-branches-automatically","docId":"practice/rebase-and-reformat-git-branches-automatically","unlisted":false}]},{"type":"category","label":"Tips and Tricks","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Debug Bazel rules_go projects","href":"/docs/tips/debug-bazel-go-projects","docId":"tips/debug-bazel-go-projects","unlisted":false},{"type":"link","label":"Non-deterministic Builds","href":"/docs/tips/non-deterministic-builds","docId":"tips/non-deterministic-builds","unlisted":false}],"href":"/docs/tips/"},{"type":"category","label":"Improved chroot in Buildbarn","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"I Chroot in Buildbarn","href":"/docs/improved-chroot-in-buildbarn/chroot-in-buildbarn","docId":"improved-chroot-in-buildbarn/chroot-in-buildbarn","unlisted":false},{"type":"link","label":"II The Problem with Special Mounts","href":"/docs/improved-chroot-in-buildbarn/the-problem-with-special-filesystems","docId":"improved-chroot-in-buildbarn/the-problem-with-special-filesystems","unlisted":false},{"type":"link","label":"III Implementing Mountat","href":"/docs/improved-chroot-in-buildbarn/implementing-mountat","docId":"improved-chroot-in-buildbarn/implementing-mountat","unlisted":false},{"type":"link","label":"IV Trying to Implement Unmountat","href":"/docs/improved-chroot-in-buildbarn/implementing-unmountat","docId":"improved-chroot-in-buildbarn/implementing-unmountat","unlisted":false},{"type":"link","label":"V Integrating Mountat in Buildbarn","href":"/docs/improved-chroot-in-buildbarn/integrating-mountat","docId":"improved-chroot-in-buildbarn/integrating-mountat","unlisted":false},{"type":"link","label":"VI Reproducing the Problem","href":"/docs/improved-chroot-in-buildbarn/reproducing-the-problem","docId":"improved-chroot-in-buildbarn/reproducing-the-problem","unlisted":false}],"href":"/docs/improved-chroot-in-buildbarn/"}]},"docs":{"improved-chroot-in-buildbarn/chroot-in-buildbarn":{"id":"improved-chroot-in-buildbarn/chroot-in-buildbarn","title":"I Chroot in Buildbarn","description":"Buildbarn workers and runners have functionality to chroot into the input root,","sidebar":"sidebar"},"improved-chroot-in-buildbarn/implementing-mountat":{"id":"improved-chroot-in-buildbarn/implementing-mountat","title":"III Implementing Mountat","description":"Historically you needed absolute filepaths to create mounts,","sidebar":"sidebar"},"improved-chroot-in-buildbarn/implementing-unmountat":{"id":"improved-chroot-in-buildbarn/implementing-unmountat","title":"IV Trying to Implement Unmountat","description":"This continues from [implementing mountat with the new Linux mount API]","sidebar":"sidebar"},"improved-chroot-in-buildbarn/index":{"id":"improved-chroot-in-buildbarn/index","title":"Improved chroot in Buildbarn","description":"This is an ongoing series about improving chroot in Buildbarn.","sidebar":"sidebar"},"improved-chroot-in-buildbarn/integrating-mountat":{"id":"improved-chroot-in-buildbarn/integrating-mountat","title":"V Integrating Mountat in Buildbarn","description":"This is a living document describing the path to merging the patches from this work into [Buildbarn].","sidebar":"sidebar"},"improved-chroot-in-buildbarn/reproducing-the-problem":{"id":"improved-chroot-in-buildbarn/reproducing-the-problem","title":"VI Reproducing the Problem","description":"This document explains how to reproduce the problem and try the patches","sidebar":"sidebar"},"improved-chroot-in-buildbarn/the-problem-with-special-filesystems":{"id":"improved-chroot-in-buildbarn/the-problem-with-special-filesystems","title":"II The Problem with Special Mounts","description":"The [fuse and chroot setup]","sidebar":"sidebar"},"intro":{"id":"intro","title":"Introduction","description":"xkcd.com","sidebar":"sidebar"},"practice/rebase-and-reformat-git-branches-automatically":{"id":"practice/rebase-and-reformat-git-branches-automatically","title":"Automatically reformat all commits on a branch","description":"Preliminaries","sidebar":"sidebar"},"theory/components-of-a-build":{"id":"theory/components-of-a-build","title":"Components of a Build","description":"A build is a pretty abstract concept, for many developers it\'s what happens when you press f5 but before your application starts. So what does happen when you press f5? Well that depends on your underlying environment, but in general it runs a couple of actions.","sidebar":"sidebar"},"tips/debug-bazel-go-projects":{"id":"tips/debug-bazel-go-projects","title":"Debug Bazel rules_go projects","description":"Case study: Buildozer","sidebar":"sidebar"},"tips/index":{"id":"tips/index","title":"Tips and Tricks","description":"It can sometimes be difficult to evaluate","sidebar":"sidebar"},"tips/non-deterministic-builds":{"id":"tips/non-deterministic-builds","title":"Non-deterministic Builds","description":"Builds should be deterministic, if the inputs are unchanged they should produce the same output. In Bazel terminology this is often refered to as builds being hermetic, i.e. fully self enclosed with regards to its inputs.","sidebar":"sidebar"}}}')}}]);