<template>
  <div class="hello">
    <h4>Hello world component showing from {{parentName}}</h4>
    <p>{{msg}}</p>
    <button @click="triggerEvent()">Generate Random No</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props : ['parentName'],
  data() {
    return{
      msg : 'Welcome to hello world'
    }
  },
  methods : {
    triggerEvent(){
      this.$emit('customEvent', Math.random());
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    color: #2c3e50;
    background-color:darkgrey;
    padding : 2px;
  }

</style>
