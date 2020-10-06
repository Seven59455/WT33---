<template>
  <div class="read">
    <ul>
      <li v-for="(item,index) in arr" :key='index'>
        <img :src="item.cover_url">
        <h4>{{item.author}}</h4>
       <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    }
  },
  mounted() {
    this.$axios.get('../../../../static/data/read.json').then((res) => {
      console.log(res.data.recommend_one)
      this.arr = res.data.recommend_one
    })
  }
};
</script>

<style lang='less'>
.read{
  padding: 20/64rem;
  width: 10rem;
  box-sizing: border-box;
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
      width: 32.33%;
      list-style: none;
      text-align: center;
      margin-bottom: 20/64rem;
      h4{
        font-size: 22/64rem;
        height: 40/64rem;
        line-height: 40/64rem;
      }
      p{
        font-size: 22/64rem;
        height: 20/64rem;
        line-height: 20/64rem;
      }
      img{
        width: 100%;
      }
    }
  }
}
</style>
