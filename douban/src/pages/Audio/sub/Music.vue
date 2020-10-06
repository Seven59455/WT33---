<template>
  <div class="music">
    <div class="musics" v-for="(item, index) in groupArr" :key="index">
      <h2>{{ item.title }}</h2>
      <div class="musicUl">
        <ul :style="{ width: (item.group_list.length * 200) / 64 + 'rem' }">
          <li v-for="(item1, index) in item.group_list" :key="index">
            <img :src="item1.cover_url" />
            <h3>{{item1.title}}</h3>
            <p>{{item1.author}}</p>
            <p>评分：{{item1.score}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupArr: [],
    };
  },
  mounted() {
    this.$axios.get("../../../../static/data/music.json").then((res) => {
      //console.log(res.data.group);
      this.groupArr = res.data.group;
    });
  },
};
</script>

<style lang='less'>
.music {
  width: 10rem;
  padding: 20/64rem;
  box-sizing: border-box;
  .musics {
    h2 {
      font-size: 25/64rem;
      padding: 10/64rem;
    }
    .musicUl{
      overflow-x: scroll;
      padding-bottom: 10/64rem;
      ul {
        display: flex;
        li {
          width: 200/64rem;
          margin-right: 10/64rem;
          list-style: none;
          font-size: 22/64rem;
          text-align: center;
          img {
            width: 200/64rem;
            height: 270/64rem;
          }
          h3{
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
}
</style>
