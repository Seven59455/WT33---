<template>
  <div class="music">
    <div class="musics" v-for="(item, index) in groupArr" :key="index">
      <h2>{{ item.title }}</h2>
      <div class="musicUl">
        <ul :style="{ width: (item.city_list.length * 200)/64 + 'rem' }">
          <li v-for="(item1, index) in item.city_list" :key="index">
            <img :src="item1.img_url" />
            <h3>{{item1.group_name}}</h3>
            <p>{{item1.group_time}}</p>
            <p class="address">{{item1.group_address}}</p>
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
      groupArr: []
    };
  },
  mounted() {
    this.$axios.get("../../../../static/data/city.json").then((res) => {
      console.log(res.data.city);
      this.groupArr = res.data.city;
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
          .address{
              height: 30/64rem;
              line-height: 30/64rem;
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
