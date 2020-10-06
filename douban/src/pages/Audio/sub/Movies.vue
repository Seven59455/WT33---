<template>
  <div class="movie-box">
    <h2>正在上映的电影-北京</h2>
    <SwiperSpaceBetween>
      <template #swiper-item>
        <div class="swiper-slide" v-for="(item,index) in movies.recommend_one" :key="index">
          <img :src="item.cover_url" alt="">
          <span>{{item.title}}</span>
          <span>评分：{{item.score}}</span>
          <el-rate
            :value="item.score*1/2"
            disabled
            text-color="#ff9900"
            :max="5">
          </el-rate>
        </div>
      </template>
    </SwiperSpaceBetween>
    <h2>即将上映的电影</h2>
    <SwiperSpaceBetween>
      <template #swiper-item>
        <div class="swiper-slide" v-for="(item,index) in movies.recommend_two" :key="index">
          <img :src="item.cover_url" alt="">
          <span>{{item.title}}</span>
          <span>评分：{{item.score}}</span>
          <el-rate
            :value="item.score*1/2"
            disabled
            text-color="#ff9900"
            :max="5">
          </el-rate>
        </div>
      </template>
    </SwiperSpaceBetween>
  </div>
</template>

<script>
import SwiperSpaceBetween from '../../../components/SwiperSpaceBetween'
export default {
  mounted () {
    this.getMovie()
  },
  data () {
    return {
      movies: {}
    }
  },
  components: {
    SwiperSpaceBetween
  },
  methods: {
    async getMovie () {
      const { data: res } = await this.$axios.get('../../../static/data/broadcast.json')
      this.movies = res
    }
  }
}
</script>

<style lang="less" scoped>
.movie-box {
  padding-left: 20/64rem;
  padding-bottom: 30/64rem;
  h2 {
    padding: 40/64rem 0 30/64rem 0;
    font-size: 28/64rem;
  }
  .el-rate__icon {
    font-size: 25/64rem !important;
  }
}
</style>
