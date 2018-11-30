<template>
  <div class="home">
      <h2>This is home page</h2>
      <router-link :to="'/page2'">Go to page 2</router-link>
      <button @click="goToPage1">Go to page 1</button>
  </div>
</template>
<script>
export default {
  name : 'home',
  methods : {
    goToPage1(){
      this.$router.push('page1/test')
    }
  }
}
</script>

<style scoped>
.home {
  color: #2c3e50;
  background-color: cadetblue;
  padding : 5px;
  height: 520px;
}

</style>