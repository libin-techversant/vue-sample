<template>
  <div class="home">
      <h2>This is home page</h2>
      <router-link :to="'/page2'">Go to page 2</router-link>
      <button @click="goToPage1">Go to page 1</button>
      <pre v-if="Object.keys(users).length > 0">
        {{JSON.stringify(users,undefined, 10)}}
      </pre>
  </div>
</template>
<script>
export default {
  name : 'home',
  data(){
    return {
      users : {}
    }
  },
  methods : {
    goToPage1(){
      this.$router.push('page1/test')
    }, 
    callApi(){
      this.$http.get('https://reqres.in/api/users?page=1').then(response => {
        this.users = response.data;
      },error => {
        console.log(error);
      });
    }
  },
  created(){
    this.callApi();
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
pre {
  width : 50px;
}
</style>