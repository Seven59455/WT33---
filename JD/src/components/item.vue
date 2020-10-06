<template>
  <div class="item" @click='fn'>
      <template v-if='!flag'><slot name='normaImg'></slot></template>
      <template v-if='flag'><slot name='activeImg'></slot></template>
  </div>
</template>

<script>
export default {
    props:['mark','curr'],
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
    height: 90/75rem;
    flex: 1;
    img{
        width: 120/75rem;
    }
}
</style>