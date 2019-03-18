<template>
    <div class="hello">
        <VelocityComponent :visible="title1Show" :animationType="title1AnimType" :animation="title1Animation" @complete="title1Complete">
            <h1>{{ msg }}</h1>
        </VelocityComponent>
        <VelocityComponent :visible="title2Show" :animationType="title2AnimType" :animation="title2Animation" @complete="title2Complete">
            <h2>Essential Links</h2>
        </VelocityComponent>
        <ul>
            <li><a href="https://vuejs.org" target="_blank"> Core Docs </a></li>
            <li> <a href="https://forum.vuejs.org" target="_blank" > Forum </a></li>
            <li> <a href="https://chat.vuejs.org" target="_blank"> Community Chat </a></li>
            <li> <a href="https://twitter.com/vuejs" target="_blank"> Twitter </a> </li>
            <br>
            <li> <a href="http://vuejs-templates.github.io/webpack/" target="_blank"> Docs for This Template</a> </li>
        </ul>
        <VelocityComponent :visible="true" animationType="custom" :animationStyle="title3AnimStyle" :animation="title3Animation" @complete="title3Complete">
            <h2>Ecosystem</h2>
        </VelocityComponent>
        <ul>
            <li> <a href="http://router.vuejs.org/" target="_blank"> vue-router </a> </li>
            <li><a href="http://vuex.vuejs.org/" target="_blank"> vuex </a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank"> vue-loader</a></li>
            <li> <a href="https://github.com/vuejs/awesome-vue" target="_blank"> awesome-vue </a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        // 动画部分
        title1Show: false, // 初始值为false即默认不展示，进入动画执行后再展示
        title1AnimType: '', // 如果为空，则不执行动画
        title1Animation: {
            duration: 1000
        },
        title2Show: false, // 初始值为false即默认不展示，进入动画执行后再展示
        title2AnimType: '', // 如果为空，则不执行动画
        title2Animation: {
            delay: 2000,
            duration: 1000
        },
        title3AnimStyle: {
            color: '#DC143C'
        },
        title3Animation: {
            delay: 3000,
            duration: 1000
        },
    }
  },
  created() {},
  mounted() {
      // 组件挂载以后执行title1动画
      this.title1AnimType = 'transition.flipBounceXIn'
  },
  methods: {
      title1Complete() {
          console.log('title1动画执行完成，要开始执行下一个动画了哦！注意看，有延迟的。');
          this.title2AnimType = 'transition.swoopIn'
      },
      title2Complete() {
          console.log('title2动画执行完成！');
      },
      title3Complete() {
          console.log('title3动画执行完成，这是自定义动画！');
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
