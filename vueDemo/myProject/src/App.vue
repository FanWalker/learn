<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-text="title"></h1>
    <input type="text" v-model="newItem" v-on:keyup.enter='addItem'>
    <ol>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ol>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld'
*/
import Store from './store'
console.log(Store)
export default {
  name: 'app',
  data: function(){
    return {
      title: '请输入日程安排',
      items: Store.fetch()==null?[]:Store.fetch(),
      newItem: ''
    }
  },
  watch: {
    items: {
      handler: function(items){
        Store.save(items);
      },
      deep: true
    }
  },
  methods:{
    toggleFinish: function(item){
        console.log(item.isFinished);
        item.isFinished = !item.isFinished
    },
    addItem: function(){
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    }
  }
}
</script>

<style>
ol li {
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app ol{
  padding-top: 10px;
  display: block;
  width: 10%;
  margin: 0 auto;
}
.finished{
  color: red
}
</style>
