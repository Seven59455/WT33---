<template>
  <div id="app">
    <Tabbar v-if="tabbarShow"></Tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components:{Tabbar},
  data(){
    return{
      tabbarShow:true
    }
  },
  watch:{
    $route(to,from){
      //console.log("watch $route(to,from),",to,from);
      if(to.name =="login" || to.name=="registered"){
        this.tabbarShow = false;
      }else{
         this.tabbarShow = true;
      }
    }
  }
}
</script>

<style lang='less'>
body{
  width: 10rem;
  margin: 0 auto;
}
</style>
