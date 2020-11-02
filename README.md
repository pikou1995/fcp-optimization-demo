# 项目介绍

在一系列评价网络应用质量的工具中，[lighthouse](https://developers.google.com/web/tools/lighthouse) 越来越脱颖而出。而且它集成进了 chrome 中，很方便使用。  
其中最新的 Lighthouse6 中，[FCP](https://web.dev/first-contentful-paint/)是其六个指标中第一个指标，它测量的是在用户访问网页时浏览器需要多长时间呈现第一块 DOM 内容。图片，非空白的&lt;canvas&gt;，SVG 被认为是 DOM 内容，但在不包括 iframe 内的。FCP 在 v6 版本比重占 15%(v5 占 20%)，是优化开始的第一步。  
这个 demo 就是总结一下自己的优化经验，在一个普通的 `webpack + antd` 的项目中怎么进行优化。  
master 分支是未优化的分支，optimized 分支是优化后的分支  
更多介绍和讨论在我的博客[issue](https://github.com/pikou1995/pikou1995.github.io/issues/12)中查看

# 快速上手

```sh
npm i #安装依赖
npm start #开始启动
```

启动后可在 http://localhost:8080 测试网站质量。打包分析在 http://localhost:8888
