<template>
  <div class="tabbarWrap">
    <Item txt='首页' mark='home' :curr='currnav' @change='getVal'>
      <template #normaImg>
        <img src='../assets/images/ic_tab_home_normal.png'>
      </template>
      <template #activeImg>
        <img src='../assets/images/ic_tab_home_active.png'>
      </template>
    </Item>
    <Item txt='书影音' mark='audio' :curr='currnav' @change='getVal'>
      <template #normaImg>
        <img src='../assets/images/ic_tab_subject_normal.png'>
      </template>
      <template #activeImg>
        <img src='../assets/images/ic_tab_subject_active.png'>
      </template>

    </Item>
    <Item txt='广播' mark='broadcast' :curr='currnav' @change='getVal'>
      <template #normaImg>
        <img src='../assets/images/ic_tab_status_normal.png'>
      </template>
      <template #activeImg>
        <img src='../assets/images/ic_tab_status_active.png'>
      </template>
    </Item>
    <Item txt='小组' mark='group' :curr='currnav' @change='getVal'>
      <template #normaImg>
        <img src='../assets/images/ic_tab_group_normal.png'>
      </template>
      <template #activeImg>
        <img src='../assets/images/ic_tab_group_active.png'>
      </template>
    </Item>
    <Item txt='我的' mark='mine' :curr='currnav' @change='getVal'>
      <template #normaImg>
        <img src='../assets/images/ic_tab_profile_normal.png'>
      </template>
      <template #activeImg>
        <img src='../assets/images/ic_tab_profile_active.png'>
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
.tabbarWrap{
  background: #fff;
  width: 10rem;
  max-width: 10rem;
  display: flex;
  text-align: center;
  border-top: 1/64rem solid #ccc;
  position: fixed;
  left:50%; 
  transform:translate(-50%);
  bottom: 0;
  font-size: 0px;
  z-index: 3;
}
</style>