<template>
  <div class="tv">
    <h2>最新电视剧</h2>
    <div class="tvs">
      <ul class="newUl" :style="{ width: (fn.length * 200) / 64 + 'rem' }">
        <li v-for="(item, index) in fn" :key="index">
          <img :src="item.cover" />
          <h4>{{ item.title }}</h4>
          <p>评分:{{ item.rate }}</p>
        </li>
      </ul>
    </div>

    <h2>过往电视剧</h2>
    <div class="tvs">
      <ul class="newUl" :style="{ width: (fn2.length * 200) / 64 + 'rem' }">
        <li v-for="(item, index) in fn2" :key="index">
          <img :src="item.cover" />
          <h4>{{ item.title }}</h4>
          <p>评分:{{ item.rate }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  mounted() {
    this.$axios.get("../../../../static/data/tv.json").then((res) => {
      //console.log(res.data.subjects)
      this.arr = res.data.subjects
    })
  },
  computed: {
    fn() {
      let newArr = this.arr.filter((item) => {
        return item.is_new == true
      })
      return newArr
    },
    fn2() {
      let newArr = this.arr.filter((item) => {
        return item.is_new == false
      })
      return newArr
    }
  }
};
</script>

<style lang='less'>
.tv {
  width: 10rem;
  padding: 20/64rem;
  box-sizing: border-box;
  h2 {
    font-size: 25/64rem;
    padding: 10/64rem 0 10/64rem 10/64rem;
  }
  .tvs{
    overflow-x: scroll;
    padding-bottom: 10/64rem;
    .newUl {
      display: flex;
      li {
        width: 200/64rem;
        list-style: none;
        margin-right: 10/64rem;
        text-align: center;
        img {
          width: 200/64rem;
          height: 260/64rem;
        }
        h4{
          font-size: 22/64rem;
          height: 50/64rem;
          line-height: 50/64rem;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap
        }
      }
    }
  }
}
</style>
