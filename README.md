# vue-animation-velocity

> A vue.js project, and the animation created by velocity.js without jQuery.  
> 这是一个vue的项目，里面的动画是基于velocity.js创建，并且没有使用jQuery。

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

> 加速的JavaScript动画  [去官网看看](http://velocityjs.org/)

#### 概述  
Velocity.js 是一款动画引擎，它和jQuery's $.animate()有着相同的API，并且在有无jQuery依赖的情况下均可使用（具体使用方法见下文）。Velocity.js执行非常快，在color animation（颜色动画）, transforms（变换）, loops（循环）, easings, SVG support（支持SVG）以及scrolling（滚动）方面有突出的表现，它是jQuery和CSS过渡的最佳结合。

#### 下载
[点击下载](https://raw.githubusercontent.com/julianshapiro/velocity/master/velocity.min.js)。在页面中引入Velocity.js，然后将所有基于jQuery's $.animate()创建的动画实例用$.velocity()替换，你会在所有浏览器和设备中看到性能的提升——尤其是在移动设备上。

#### 兼容性
Velocity可以应用在包括IE8和Android2.3在内的版本设备上，在这种环境下它模仿了jQuery's $.queue()，因此可以和 jQuery's $.animate()、$.fade()、以及 $.delay()进行无缝地交互。由于Velocity的语法和$.animate()是完全一致的，所以你的代码无需改动。

#### 秘密“武器”
JavaScript和jQuery被“错误地”合并在了一起。Velocity直接使用JavaScript创建的动画是很快的，使用jQuery创建的相对慢些。尽管Velocity和jQuery一起工作，但是它使用自己的动画栈来释放其性能。这个过程基于两个基本原理：  
1、同步DOM —— 以渐变叠加的方式使[layout thrashing](http://wilsonpage.co.uk/preventing-layout-thrashing/)最小化  
2、设置缓存值使得DOM查询最小化

#### 资源

##### Demos
+ [观看视频](https://www.youtube.com/watch?v=MDLiVB6g2NY&hd=1)（10分钟），该教程介绍了如何使用Velocity创建一个3D demo。  
+ [观看视频](https://www.youtube.com/watch?v=CdwvR6a39Tg&hd=1)（5分钟）, 该教程介绍了Velocity's UI包如何提升用户界面。  

##### 相关文章
+ [阅读文章](http://davidwalsh.name/css-js-animation)，关于Velocity与CSS和jQuery性能对比的技术概述。  
+ [阅读文章](http://www.sitepoint.com/incredibly-fast-ui-animation-using-velocity-js/)，关于Velocity性能优化的技术故障。  
+ [阅读文章](http://davidwalsh.name/svg-animation)，介绍使用Velocity创建SVG动画。 
+ [阅读文章](http://www.smashingmagazine.com/2014/09/04/animating-without-jquery/)，介绍在不依赖jQuery的情况如何使用Velocity创建动画。

##### 关于作者
+ 感谢[Stripe](https://stripe.com/blog/stripe-open-source-retreat)发起了Velocity的开发。  
+ 感谢[BrowserStack](http://browserstack.com/)提供测试服务。  
+ 感谢[Yehonatan Daniv](https://github.com/ydaniv)在GitHub上提供用户支持。  

#### 基础：Bugs
如果你在使用Velocity的过程中遇到一个问题，首先你要确定的是否是最新版本。你可以在[GitHub](http://github.com/julianshapiro/velocity)上面获取，检查[FAQ](https://github.com/julianshapiro/velocity/issues/47)看看你的问题是否已经被解答。

#### 基础：性能
从不使用jQuery的$.animate() 和 $.fade() 函数，他们放慢了其他一切，包括其他动画库。  
坚持使用Velocity内置方法而不是探测自己的方法（或者依赖jQuery），循环、反转、延迟、展示/隐藏元素、属性数学（+, -, *, /）以及硬件加速都可以使用Velocity实现。参考下面的文档。

#### 基础：依赖
##### 更新 
> Velocity的版本已经到1.0.0，有三个重要的改变：  
+ jquery.velocity.js 改名为 velocity.js，因为Velocity不再需要在函数中引入jQuery。如果你依然在Velocity中使用jQuery，你不需要在代码中改变任何事情，Velocity依然可以很好的运行。  
+ 有两个向后不兼容的改变：1. 当把访问元素传递到begin/complete/progress/promise回调函数时，你必须遍历它们（比如使用$.each()或者.forEach()），因为它们现在传递前被内置在一个数组中。2. 去掉了back，bounce和elastic easings，使用spring physics代替。
+ 如果你正在使用模块加载器，比如RequireJS 和 Browserify， 阅读这部分的末尾了解如何加载Velocity。

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
