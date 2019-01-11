<template>
  <div class="page3">
      <h2>This is page3</h2>
      <router-link :to="{ name: 'page3', params: { id: 1 }}">id 1</router-link>
      <br/><router-link :to="{ name: 'page3', params: { id: 2 }}">id 2</router-link>
  </div>
</template>
<script>
import Hello from '@/components/HelloWorld'
export default {
  name : 'page3',
  components : {
      'hello-world' : Hello
  },
  methods:{
    alertId(id){
      alert(id)
    }
  },
  watch: {
    '$route' (to, from) {
      this.alertId(to.params.id)
    }
  },
  created(){
    this.alertId(this.$route.params.id)
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