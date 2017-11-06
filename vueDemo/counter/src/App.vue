<template>
  <div id="app">
    <img src="./assets/logo.png">
    <increment></increment>
    <display></display>

  </div>
</template>

<script>
import display from './components/display.vue'
import increment from './components/increment.vue'

export default {

  components: {
    display,
    increment
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
