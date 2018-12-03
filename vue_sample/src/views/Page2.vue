<template>
  <div class="page2">
      <h2>This is page2</h2>
      <div>
        <button @click="$store.commit('updateCountMutation', 10)">Update state with mutation</button>
        <button @click="$store.dispatch('updateCountAction', 20)">Update state with action</button>
        Current value of count : {{$store.state.count}}
      </div>
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