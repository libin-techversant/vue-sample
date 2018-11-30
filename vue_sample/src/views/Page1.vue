<template>
  <div class="page1">
      <h2>This is page1</h2>
      <hello-world :parentName="'PAGE 1'"/>
      <hello-world :parentName="'PAGE 1 again'"/>
  </div>
</template>
<script>
import Hello from '@/components/HelloWorld'
export default {
  name : 'page1',
  components : {
      'hello-world' : Hello
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