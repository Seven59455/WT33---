<template>
  <div id="app">
    <Tabbar v-if="tabbarShow"></Tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  components:{Tabbar},
  data(){
    return{
      tabbarShow:true
    }
  },
  watch:{
    $route(to,from){
      //console.log("watch $route(to,from),",to,from);
      if(to.name =="login"){
        this.tabbarShow = false;
      }else{
         this.tabbarShow = true;
      }
    }
  }
}
</script>

<style lang='less'>
*{
  margin: 0;
  padding: 0;
  font-family: '微软雅黑';
}
body{
  width: 10rem;
  margin: 0 auto;
}
</style>
