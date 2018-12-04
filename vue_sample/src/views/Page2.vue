<template>
  <div class="page2">
      <h2>This is page2</h2>
      <div>
        Current value of count : {{$store.state.count}}<br>
        <button @click="$store.commit('updateCountMutation', 10)">Update state with mutation</button>
        <button @click="$store.dispatch('updateCountAction', 20)">Update state with action</button>
      </div>
      <div>
        <h2>Mixins and filters</h2>
        <button @click="helloMethod">Mixin method</button>
        <p>The sample text from mixin : {{sampleText}}</p>
        <p>after applying filter : {{sampleText | capitalize}}</p>
      </div>
  </div>
</template>
<script>
import Hello from '@/components/HelloWorld'
import exampleMixin from '@/sampleMixin'

export default {
  name : 'page1',
  props : ['parentName'],
  mixins : [exampleMixin],
  components : {
      'hello-world' : Hello
  },
  filters : {
    capitalize : function(str){
      return str.toUpperCase();
    }
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