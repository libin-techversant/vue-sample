export default {
    data(){
        return {
            sampleText : 'abcdefgh'
        }
    },
    methods : {
      hello(){
        console.log("Hello from mixin");
      },
      helloMethod(){
        alert("Hello again from mixin");
      }
    },
    created(){
      this.hello();
    }
  }