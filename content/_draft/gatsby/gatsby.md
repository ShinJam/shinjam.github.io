---
title: "The Great Gatsby Bootcamp"
date: "2019-04-04"
category: "gatsby"
cover: "./grass.png"
coverAnnotation: "photo by unsplash"
---

I just launched a new bootcamp!

![Grass](./grass.png)

## Topics Covered

1. Gatsby
2. GraphQL
3. React


```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
]
```