<template>
  <div class="tabbarWrap">
    <Item mark='index' :curr='currnav' @change='getVal'>
      <template #normaImg>
        <img src='../assets/images/icon/icon-home.png'>
      </template>
      <template #activeImg>
        <img src='../assets/images/icon/icon-home-active.png'>
      </template>
    </Item>
    <Item mark='class' :curr='currnav' @change='getVal'>
      <template #normaImg>
        <img src='../assets/images/icon/icon-catergry.png'>
      </template>
      <template #activeImg>
        <img src='../assets/images/icon/icon-catergry-active.png'>
      </template>
    </Item>
    <Item mark='find' :curr='currnav' @change='getVal'>
      <template #normaImg>
        <img src='../assets/images/icon/icon-find.png'>
      </template>
      <template #activeImg>
        <img src='../assets/images/icon/icon-find-active.png'>
      </template>
    </Item>
    <Item mark='cart' :curr='currnav' @change='getVal'>
      <template #normaImg>
        <img src='../assets/images/icon/icon-cart.png'>
      </template>
      <template #activeImg>
        <img src='../assets/images/icon/icon-cart-active.png'>
      </template>
    </Item>
    <Item mark='mine' :curr='currnav' @change='getVal'>
      <template #normaImg>
        <img src='../assets/images/icon/icon-me.png'>
      </template>
      <template #activeImg>
        <img src='../assets/images/icon/icon-me-active.png'>
      </template>
    </Item>
  </div>
</template>

<script>
import Item from './item'
export default {
  components:{Item},
  data() {
    return {
      currnav:'home'
    }
  },
  methods: {
    getVal(inmark){
      this.currnav = inmark
    }
  }
}
</script>

<style>
body{
  width: 10rem;
  max-width: 10rem;
}
.tabbarWrap{
  background: #fff;
  width: 10rem;
  max-width: 100rem;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  border-top: 10/75rem solid red;
  left:50%; 
  transform:translate(-50%);
  font-size: 0rem;
  
}
</style>