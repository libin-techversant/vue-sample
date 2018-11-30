<template>
  <div class="page2">
      <h2>This is page2</h2>
      <hello-world :parentName="'PAGE 2'"/>
  </div>
</template>
<script>
import Hello from '@/components/HelloWorld'
export default {
  name : 'page1',
  props : ['parentName'],
  components : {
      'hello-world' : Hello
  }
}
</script>

<style>
.page2 {
  color: #2c3e50;
  background-color: cadetblue;
  padding : 5px;
  height: 520px;
}

</style>