# vue-animation-velocity

> A vue.js project, and the animation created by velocity.js and the plugin velocity-vue without jQuery.  
> 这是一个vue的项目，里面的动画是基于velocity.js以及插件velocity-vue创建，没有使用jQuery。

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
Velocity可以应用在IE8和Android2.3以后版本的设备上，在这种环境下它模仿了jQuery's $.queue()，因此可以和 jQuery's $.animate()、$.fade()、以及 $.delay()进行无缝地交互。由于Velocity的语法和$.animate()是完全一致的，所以你的代码无需改动。

#### 秘密“武器”
JavaScript和jQuery被“错误地”合并在了一起。Velocity直接使用JavaScript创建的动画是很快的，使用jQuery创建的相对慢些。尽管Velocity和jQuery一起工作，但是它使用自己的动画栈来释放其性能。这个过程基于两个基本原理：  
1、同步DOM —— 以渐变叠加的方式使[layout thrashing](http://wilsonpage.co.uk/preventing-layout-thrashing/)最小化  
2、设置缓存值使得DOM查询最小化

#### 资源

##### Demos
+ [观看视频](https://www.youtube.com/watch?v=MDLiVB6g2NY&hd=1)（10分钟），该教程介绍了如何使用Velocity创建一个[3D demo](http://velocityjs.org/demo.html)。  
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

##### 使用Velocity基于jQuery的情况
Velocity.js与jQuery可以无缝的协作，jQuery的$.animate(), $.delay(), 以及$.fade()函数可以在Velocity中使用。使用过程中并没有导致性能的下降。  

需要注意的是你可以抵消Velocity文件的大小通过去掉一些jQuery中未用到的模块，这样一来就不能再使用jQuery自身的动画函数。  

浏览器支持：IE8和Android2.3以后版本。如果低于IE8，Velocity将不会加载，直接使用jQuery的 $.animate()。

##### 使用Velocity不依赖jQuery的情况
当你的页面中没有加载jQuery的时候也可以使用Velocity。那么这种情况将不再支持IE8，IE9是其支持的IE最低版本。  

如果页面中引入了Zepto，这种情况下Velocity的使用和依赖jQuery一样，页面中所有的案例均适用。

如果页面中既没有jQuery也没有Zepto， Velocity会将自己作为window对象的一个属性。这种环境下，所有的动画将由Velocity的[utility function](http://velocityjs.org/#utilityFunction)触发，dom元素会被作为第一个参数传入到Velocity():  

```js
Velocity(document.getElementById("dummy"), { opacity: 0.5 }, { duration: 1000 });
```
需要注意的是，本页中代码案例展示的通过jQuery的$访问Velocity的核心对象必须被改为直接访问Velocity全局对象，简言之就是$.Velocity 现在变成了 Velocity。  

此外，当不依赖jQuery和Zepto时使用Velocity时，你将不再能使用$.queue() 和 $.delay()函数。因此，你希望对Velocity的[ begin and complete](http://velocityjs.org/#beginAndComplete)回调函数自定义队列逻辑，同时使用Velocity的[delay option](http://velocityjs.org/#delay)来触发延迟。  

如果想了解更详细的关于不依赖jQuery的攻略，可以读一下[这篇文章](http://www.smashingmagazine.com/2014/09/04/animating-without-jquery/)。

##### 模块加载器：RequireJS
1) 如果你使用Velocity基于jQuery，那么将jQuery作为Velocity的依赖项。对于Velocity UI包（可选项），将Velocity作为它的依赖项。

> 注意，当使用jQuery插件时，jQuery必须全局的，同时不能使用jQuery.noConflict()。
 ```js
 require.config({
    paths: {
        "jquery": "/path/to/jquery-x.x.x",
        "velocity": "path/to/velocity",
        // 可选项, 如果你使用 UI pack:
        "velocity-ui": "path/to/velocity.ui"
    },
    shim: {
        "velocity": {
            deps: [ "jquery" ]
        },
        // 可选项, 如果你使用 UI pack:
        "velocity-ui": {
            deps: [ "velocity" ]
        }
    }
});
require([ "jquery", "velocity", "velocity-ui" ], function ($, Velocity) {
    /* Your app code here. */
    $("body").velocity({ opacity: 0.5 });
});
 ```
2) 如果你使用RequireJS加载Velocity依赖Zepto，只需要在上面的配置中用“Zepto”代替“jQuery”。（注意：Zepto本身并不兼容模块加载器，因此你需要在RequireJS回调函数中传入$，然后在函数内部定义var $ = window.Zepto）  

3) 如果你仅仅使用Velocity本身，只需要像下面那样配置即可（使用在vue项目中，下面代码需要放在main.js中）：
```js
var Velocity = require("path/to/velocity.js");
// 可选项: 如果需要使用 UI pack, 在Velocity之后引用. (不需要为他定义一个变量.)
require("path/to/velocity.ui.js");
/* 在程序中调用. */
Velocity(document.body, { opacity: 0.5 });
```

##### 模块加载器：Browserify

1) 使用jQuery
```js
window.jQuery = window.$ = require("path/to/jquery-x.x.x.js");
require("path/to/velocity.js");
// 可选项: 如果需要使用 UI pack, 在Velocity之后引用. (不需要为他定义一个变量.)
require("path/to/velocity.ui.js");
/* Your app code here. */
$("body").velocity({ opacity: 0.5 });
```
2) 不使用jQuery
```js
var Velocity = require("path/to/velocity.js");
// 可选项: 如果需要使用 UI pack, 在Velocity之后引用. (不需要为他定义一个变量.)
require("path/to/velocity.ui.js");
/* Your app code here. */
Velocity(document.body, { opacity: 0.5 });
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
