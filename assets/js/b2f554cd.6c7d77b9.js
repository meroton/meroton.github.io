"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"bb-deploy-updates-2022-04","metadata":{"permalink":"/blog/bb-deploy-updates-2022-04","editUrl":"https://github.com/meroton/docs/edit/master/blog/2022-05-04-updates-to-bb-deploy.mdx","source":"@site/blog/2022-05-04-updates-to-bb-deploy.mdx","title":"Updates to Buildbarn deployment repo","description":"The sample configuration project for Buildbarn was recently updated after a long hiatus. As an aid for people to understand which changes have been done see the following high level summary.","date":"2022-05-04T00:00:00.000Z","formattedDate":"May 4, 2022","tags":[{"label":"meroton","permalink":"/blog/tags/meroton"},{"label":"release","permalink":"/blog/tags/release"},{"label":"buildbarn","permalink":"/blog/tags/buildbarn"}],"readingTime":1.63,"truncated":false,"authors":[{"name":"Benjamin Ingberg","imageURL":"/img/benjamin-avatar.png","key":"benjamin"}],"frontMatter":{"slug":"bb-deploy-updates-2022-04","title":"Updates to Buildbarn deployment repo","authors":"benjamin","tags":["meroton","release","buildbarn"]},"nextItem":{"title":"Purpose of the Articles","permalink":"/blog/about"}},"content":"The [sample configuration project for Buildbarn](https://github.com/buildbarn/bb-deployments) was recently updated after a long hiatus. As an aid for people to understand which changes have been done see the following high level summary.\\n\\n## April 2022 Updates\\n\\nThis includes updates to Buildbarn since December 2020.\\n\\n### Authorizer Overhaul\\n\\nAuthorizers have been rehauled to be more flexible it is now part of each individual cache and execution configuration.\\n\\nUsing a JWT authorization bearer token has been added as an authorization method.\\n\\n### Hierarchical Blob Access\\n\\nUsing hierarchical blob access allows blobs in instance name `foo/bar` to be accessed from instance `foo/bar/baz` but not instance `foo` or `foo/qux`.\\n\\n### Action Result Expiration\\n\\nAn expiry can be added to action result which lets the action cache purge the result of an exection that was performed too far in the past. This can be used to ensure that all targets are rebuilt periodically even if they are accessed frequently enough to not normally be purged from the cache.\\n\\n### Read Only Cache Replicas\\n\\nCache read traffic can now be sent to a read-only replica which is periodically probed for availability.\\n\\n### Concurrency Limiting Blob Replication\\n\\nLimit the number of concurrent replications to prevent network starvation\\n\\n### Run Commands as Another User\\n\\nAllows the commands to be run as a different user, on most platforms this means the bb-runner instance must run as root.\\n\\n### Size Class Analysis\\n\\nAllows executioners of different size classes to be used, the scheduler will attempt to utilize executioners efficiently but there is an inherent tradeof between throughput and latency. Once configured the scheduler will automatically attempt to keep track of which actions are best run on which executioners.\\n\\n### Execution Routing Policy\\n\\nThe scheduler accepts an execution routing policy configuration that allows it to determine how to defer builds to different executioners.\\n\\nIf you see any other changes you feel should get a mention feel free to submit a pull request at github usin the link below."},{"id":"about","metadata":{"permalink":"/blog/about","editUrl":"https://github.com/meroton/docs/edit/master/blog/2022-02-22-about.mdx","source":"@site/blog/2022-02-22-about.mdx","title":"Purpose of the Articles","description":"The purpose of these articles is to have a freeform area discussing ideas, technical issues, solutions and news in an indepth relaxed manner. It is not to serve as reference material, structured reference material should be available in the documentation section.","date":"2022-02-22T00:00:00.000Z","formattedDate":"February 22, 2022","tags":[{"label":"meroton","permalink":"/blog/tags/meroton"}],"readingTime":0.505,"truncated":false,"authors":[{"name":"Benjamin Ingberg","imageURL":"/img/benjamin-avatar.png","key":"benjamin"}],"frontMatter":{"slug":"about","title":"Purpose of the Articles","authors":"benjamin","tags":["meroton"]},"prevItem":{"title":"Updates to Buildbarn deployment repo","permalink":"/blog/bb-deploy-updates-2022-04"}},"content":"The purpose of these articles is to have a freeform area discussing ideas, technical issues, solutions and news in an indepth relaxed manner. It is not to serve as reference material, structured reference material should be available in the documentation section.\\n\\nThe article format allows more in depth on discussions for reacurring subjects. In contrast to the documentation published articles aren\'t changed, if the subject requires a revisit in the future then we publish a new post and add references to the old.\\n\\nIf you see any errors feel free to submit a pull request at github using the link below."}]}')}}]);