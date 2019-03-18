<template>
  <div id="app">
    <VelocityComponent animationType="transition.slideUpIn" :animation="logoAnimation">
        <img src="./assets/logo.png">
    </VelocityComponent>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          logoAnimation: {
              duration: 1000
          }
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
