<template>
  <div class="page1">
      <h2>This is page1</h2>
      <hello-world :parentName="'PAGE 1'" @customEvent="consoleRandomNumber"/>
      <hello-world :parentName="'PAGE 1 again'" @customEvent="displayrandomNumber"/>
      <span>The route param is {{param}}</span>
  </div>
</template>
<script>
import Hello from '@/components/HelloWorld'
export default {
  name : 'page1',
  props : ['param'],
  components : {
      'hello-world' : Hello
  },
  methods:{
    displayrandomNumber(number){
      alert(number)
    },
    consoleRandomNumber(number){
      console.log(number)
    }
  }
}
</script>

<style scoped>
.page1 {
  color: #2c3e50;
  background-color: cadetblue;
  padding : 5px;
  height: 520px;
}

</style>