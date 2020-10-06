<template>
  <div>
    <Header :showMoreIcon='false'>
      <template #center>
        <h2>京东注册</h2>
      </template>
      <template #right>
        <span class="login" @click="login">登录</span>
      </template>
    </Header>
  </div>
</template>

<script>
import Header from '../../components/header'
export default {
  components:{Header},
  methods: {
    login(){
      this.$router.push('/login')
    }
  },
}
</script>

<style>
.login{
  color: #000;
}
</style>