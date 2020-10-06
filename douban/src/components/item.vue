<template>
  <div class="item" @click='fn'>
      <template v-if='!flag'><slot name='normaImg'></slot></template>
      <template v-if='flag'><slot name='activeImg'></slot></template>
      <p :class="{active:flag}">{{txt}}</p>
  </div>
</template>

<script>
export default {
    props:['txt','mark','curr'],
    computed: {
        flag(){
           return this.mark == this.curr
        }
    },
    methods: {
        fn(){
            this.$emit('change',this.mark)
            this.$router.push('/' + this.mark)
        }
    }
}
</script>

<style lang='less'>
.item{
    width: 20%;
    height: 95/64rem;
    flex: 1;
    img{
        width: 60/64rem;
        margin: 0 auto;
    }
    p{
        color: #666;
        font-size: 25/64rem;
    }
    p.active{
        color: green;
    }
}
</style>