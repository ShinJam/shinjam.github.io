---
title: Test for netlify cms path
date: 2020-06-03T03:11:50.044Z
cover: korea.jpg
category: gatsby
tags:
  - blog
  - test
  - cms
---
<!--StartFragment-->

## Folder Collections Path

By default the CMS stores folder collection content under the folder specified in the collection setting.

For example configuring`folder: posts`for a collection will save the content under`posts/post-title.md`.

You can now specify an additional`path`template (similar to the`slug`template) to control the content destination.

This allows saving content in subfolders, e.g. configuring`path: '{{year}}/{{slug}}'`will save the content under`posts/2019/post-title.md`.

<!--EndFragment-->