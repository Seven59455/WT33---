<template>
    <div>
        <Header title='首页'>
            <template #img2>
                <img src='@/assets/images/ic_chat_white.png'>
            </template>
        </Header>

        <Banner swiperID='a003'> 
          <template #swiper-slide class="banner">
            <div class="swiper-slide">
              <img src="@/assets/images/banner/01.jpg">
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/banner/02.jpg">
            </div>
            <div class="swiper-slide">
              <img src="@/assets/images/banner/03.jpg">
            </div>
          </template>
        </Banner>
        <Newslist v-for="(item,index) in arr" :key='index'
          :imgUrl='item.target.cover_url'
          :title='item.title'
          :txt='item.target.desc'
          :author='item.target.author.name'
        ></Newslist>
    </div>
</template>

<script>
import Header from '@/components/header'
import Banner from '@/components/banner'
import Newslist from '@/components/newslist'
export default {
    components:{Header,Banner,Newslist},
    data(){
      return{
        arr:[]
      }
    },
    mounted(){
      this.$axios.get('../../../static/data/homeData.json').then(
        res =>{
          console.log(res.data.recommend_feeds)
          this.arr = res.data.recommend_feeds
          
        }
      )
    }
}
</script>

<style lang='less'>
.banner{
  margin-top: 80/64rem;
  margin-bottom: 30/64rem;
}
img{
  width: 100%;
}
</style>