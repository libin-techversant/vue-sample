<template>
  <div id="app" class="app-class">
      <h2>This is the root component App.vue</h2>
      <!-- <page1/> -->
      <router-view/>
  </div>
</template>
<script>
import Page1 from '@/views/Page1'
export default {
  name : 'app',
  components :{
    'page1' : Page1
  }
}
</script>

<style scoped>
.app-class {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 620px;
  background-color: bisque;
  padding: 10px;

}

</style>
