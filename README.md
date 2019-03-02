# vue-animation-velocity

> A vue.js project, and the animation created by velocity.js  这是一个vue的项目，里面的动画是基于velocity.js创建

## Build Setup 创建与安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
---

## Velocity.js 中文文档

> 加速的JavaScript动画  [官网](http://velocityjs.org/)

### 概述  
Velocity.js 是一款动画引擎，它和jQuery's $.animate()有着相同的API，并且在有误jQuery依赖的情况下均可使用（具体使用方法见下文）。Velocity.js执行非常快，在color animation（颜色动画）, transforms（变换）, loops（循环）, easings, SVG support（支持SVG）以及scrolling（滚动）方面有突出的表现，它是jQuery和CSS过渡的最佳结合。

### 下载
[点击下载](https://raw.githubusercontent.com/julianshapiro/velocity/master/velocity.min.js)。在页面中引入Velocity.js，然后将所有基于jQuery's $.animate()创建的动画实例用$.velocity()替换，你会在所有浏览器和设备中看到性能的提升——尤其是在移动设备上。

### 兼容性
Velocity可以应用在包括IE8和Android2.3在内的版本设备上，在这种环境下它模仿了jQuery's $.queue()，因此可以和 jQuery's $.animate()、$.fade()、以及 $.delay()进行无缝地交互。由于Velocity的语法和$.animate()是完全一致的，所以你的代码无需改动。
### 秘密“武器”
JavaScript和jQuery被“错误地”合并在了一起。Velocity直接使用JavaScript创建的动画是很快的，使用jQuery创建的相对慢些。尽管Velocity和jQuery一起工作，但是它使用自己的动画栈来释放其性能。这个过程基于两个基本原理：  
1、同步DOM —— 以渐变叠加的方式使[layout thrashing](http://wilsonpage.co.uk/preventing-layout-thrashing/)最小化  
2、设置缓存值使得DOM查询最小化

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
