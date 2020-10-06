<template>
  <div>
    <Header
      :bgColor="'linear-gradient(to bottom,rgba(0,0,0,.8),rgba(0,0,0,.4), rgba(0,0,0,.1))'"
      :showBackIcon="false"
      :showMoreIcon="false"
    >
      <template #center>
        <div class="searchBox">
          <i class="icon-jd"></i>
          <i class="icon-search"></i>
          <input type="text" placeholder="请输入你要查找的内容" />
        </div>
      </template>
      <template #right>
        <span class="home-login" @click="login">登录</span>
      </template>
    </Header>

    <div class="main">
      <nut-swiper
        direction="horizontal"
        :loop="true"
        :canDragging="false"
        :paginationVisible="true"
        :autoPlay="3000"
        ref="demo3"
      >
        <div class="nut-swiper-slide gray">
          <img src="../../assets/images/img/1.jpg">
        </div>
        <div class="nut-swiper-slide gray_1">
          <img src="../../assets/images/img/2.jpg">
        </div>
        <div class="nut-swiper-slide gray">
          <img src="../../assets/images/img/3.jpg">
        </div>
        <div class="nut-swiper-slide gray_1">
          <img src="../../assets/images/img/4.jpg">
        </div>        
        <div class="nut-swiper-slide gray">
          <img src="../../assets/images/img/5.jpg">
        </div>
        <div class="nut-swiper-slide gray_1">
          <img src="../../assets/images/img/6.jpg">
        </div>
        <div class="nut-swiper-slide gray">
          <img src="../../assets/images/img/7.jpg">
        </div>
        <div class="nut-swiper-slide gray_1">
          <img src="../../assets/images/img/8.jpg">
        </div>
      </nut-swiper>
    </div>
  
    <nav>
      <ul class="navUl">
        <li><img src="../../assets/images/icon/nav0.png"><p>分类查询</p></li>
        <li><img src="../../assets/images/icon/nav1.png"><p>物流查询</p></li>
        <li><img src="../../assets/images/icon/nav2.png"><p>购物车</p></li>
        <li><img src="../../assets/images/icon/nav3.png"><p>我的京东</p></li>
        <li><img src="../../assets/images/icon/nav4.png"><p>京东生鲜</p></li>
        <li><img src="../../assets/images/icon/nav5.png"><p>领券中心</p></li>
        <li><img src="../../assets/images/icon/nav6.png"><p>京东超市</p></li>
        <li><img src="../../assets/images/icon/nav7.png"><p>我的关注</p></li>
      </ul>
    </nav>
    <div class="fuli"><img src="../../assets/images/img/fuli.jpg" ></div>
    <div class="discount">
      <ul class="disUl">
        <li><img src="../../assets/images/icon/seckill-icon.png"></li>
        <li class="change miao">掌上秒杀</li>
        <li class="time">0 6 ：5 8 : 3 9</li>
        <li class="change lun">京东轮番秒</li>
      </ul>
      <ol class="disOl">
        <li>
          <img src="../../assets/images/img/pro01.jpg">
          <strong>￥80</strong><br/>
          <del>￥150</del>
        </li>
                <li>
          <img src="../../assets/images/img/pro02.jpg">
          <strong>￥80</strong><br/>
          <del>￥150</del>
        </li>
                <li>
          <img src="../../assets/images/img/pro03.jpg">
          <strong>￥80</strong><br/>
          <del>￥150</del>
        </li>
                <li>
          <img src="../../assets/images/img/pro04.jpg">
          <strong>￥80</strong><br/>
          <del>￥150</del>
        </li>
      </ol>
    </div>
    <div class="live"><img src="../../assets/images/img/aishenghuo.png"></div>
    <div class="cp">
      <img src="../../assets/images/img/cp1.jpg">
      <img src="../../assets/images/img/cp2.jpg">
      <img src="../../assets/images/img/cp3.jpg">
    </div>

    <div class="plist">
      <h3>为你推荐</h3>
        <ul class="plistUl">
          <li v-for="(item,index) in prolist" :key="index">
            <img :src="item.imgUrl">
            <p>{{item.title}}</p>
            <strong>￥{{item.price}}</strong><br/>
            <span>好评率{{item.good}}</span>
            <i>看相似</i>
          </li>
        </ul>
    </div>
    <div><nut-backtop el-id="backTop" @click="onClick"></nut-backtop></div>
    <footer>
      <ul class="fooUl">
        <li><a href="#">登录</a><i class="line"></i></li>
        <li><a href="#" @click.prevent="registered">注册</a><i class="line"></i></li>
        <li><a href="#">反馈</a><i class="line"></i></li>
        <li><a href="#">返回顶部</a></li>
      </ul>
      <ol class="fooOl">
        <li><i class="fooOlI"></i><br/>客户端</li>
        <li><i class="fooOlI fooOlI1"></i><br/>触屏版</li>
        <li><i class="fooOlI fooOlI2"></i><br/>电脑版</li>
      </ol>
      <div class="fooText">Copyright c 2004-2018京东JD.com版权所有</div>
    </footer>
    
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  components: { Header },
  data() {
    return {
      prolist: [
        { id: 1, imgUrl: require('../../assets/images/img/item01.jpg'), title: '晋腾家用不锈钢手动压面机手摇多功能面条机水果榨....', price: 99, good: '94%' },
        { id: 2, imgUrl: require('../../assets/images/img/item02.jpg'), title: '品柜 连衣裙长裙长袖2018春装新款韩式韩版时尚女装修身显瘦....', price: 198, good: '99%' },
        { id: 3, imgUrl: require('../../assets/images/img/item03.jpg'), title: 'LG 29WK600-w 29英寸21:9 超宽屏 FHD FreeSyn....', price: 1988.0, good: '99%' },
        { id: 4, imgUrl: require('../../assets/images/img/item04.jpg'), title: '劲仔小鱼 鱼干鱼仔 零食 香辣味 15g*20包/盒....', price: 23.80, good: '99%' },
      ]
    }
  },
  methods: {
    onClick() {
      console.log("触发回到顶部按钮")
    },
    login(){
      this.$router.push('/login')
    },
    registered(){
      this.$router.push('/registered')
    }
  }
};
</script>

<style scoped lang="less">
.searchBox {
  background: white;
  width: 630/75rem;
  border-radius: 30/75rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20/75rem;
  display: flex;
  align-items: center;
  i {
    display: inline-block;
  }
  .icon-jd {
    width: 40/75rem;
    height: 30/75rem;
    background: url("../../assets/images/icon/sprites.png");
    background-size: 400/75rem auto;
    margin-left: 25/75rem;
  }
  .icon-search {
    width: 37/75rem;
    height: 36/75rem;
    background: url("../../assets/images/icon/sprites.png") -120/75rem -220/75rem;
    background-size: 400/75rem auto;
    margin-left: 25/75rem;
    margin-right: 20/75rem;
  }
  input {
    width: 450/75rem;
    height: 60/75rem;
    font-size: 25/75rem;
  }
}
.nut-swiper {
  height: 350/75rem;
  width: 10rem;
  img {
    width: 10rem;
  }
}
nav{
  padding: 15/75rem;
  width: 10rem;
  box-sizing: border-box;
  border-bottom: 1/75rem solid #ccc;
  .navUl{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    li{
      width: 25%;
      height: 150/75rem;
      text-align: center;
      list-style: none;
      img{
        width: 90/75rem;
        margin: 0 auto;
      }
      p{
        height: 50/75rem;
        line-height: 50/75rem;
        font-size: 28/75rem;
      }
    }
  }
}
.fuli{
  margin-top: 10/75rem;
  margin-bottom: 20/75rem;
  img{
    width: 10rem;
  }
}
.discount{
  width: 10rem;
  padding: 15/75rem;
  box-shadow: 0 0 10/75rem #ccc;
  background: #fff;
  .disUl{
    display: flex;
    align-items: center;
    position: relative;
    li{
      list-style: none;
      font-size: 28/75rem;
      height: 60/75rem;
      line-height: 60/75rem;
      img{
        width: 40/75rem;
      }
    }
    li:first-child {
      display: flex;
      align-items: center;
    }
    .miao{
      padding: 0 10/75rem;
      vertical-align: middle;
    }
    .change{
      color: red;
      
    }
    .lun{
      position: absolute;
      top: 0/75rem;
      right: 20/75rem;
    }
  }
  .disOl{
    margin-top: 20/75rem;
    display: flex;
    li{
      flex: 1;
      text-align: center;
      strong{
        color: red;
        font-size: 30/75rem;
        height: 50/75rem;
        line-height: 50/75rem;
        font-weight: bold;
      }
    }
  }
}
.live{
  width: 10rem;
  height: 100/75rem;
}
.cp{
  width: 10rem;
  display: flex;
  flex-wrap: wrap;
  box-shadow:  0 0 5/75rem #ccc;
  position: relative;
  img{
    border: 1/75rem solid #ccc;
    &:nth-of-type(1){
      width: 5rem;
    }
    &:nth-of-type(2){
      width: 5rem;
      height: 200/75rem;
    }
     &:nth-of-type(3){
      width: 5rem;
       height: 205/75rem;
       position: absolute;
       right: 0;
       top: 200/75rem;
    }
  }
  
}
.plist{
  width: 10rem;
  background: #f0f2f5;
  h3{
    height: 120/75rem;
    line-height: 130/75rem;
    text-align: center;
    font-size: 30/75rem;
    position: relative;
    &:before{
      content: "";
      display: block;
      width: 50/75rem;
      height: 50/75rem;
      background: url('../../assets/images/icon/upload.png') no-repeat;
      background-size: 35/75rem 35/75rem;
      position: absolute;
      top: 50/75rem;
      left: 35%;
    }
  }
  .plistUl{
    display: flex;
    width: 10rem;
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: 1/75rem solid #666;
    li{
      list-style: none;
      width: 49%;
      border: 1/75rem solid #999;
      margin-bottom: 15/75rem;
      font-size: 25/75rem;
      img{
        width: 100%;
      }
      p{
        padding: 10/75rem;
        color: #000;
        line-height: 40/75rem;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
            }
      strong{
        font-weight: bold;
        color: red;
        line-height: 60/75rem;
        padding-left: 10/75rem;
      }
      span{
        padding-left: 10/75rem;
        color: #999;
        line-height: 60/75rem;
      }
      i{
        padding: 5/75rem;
        border: 1/75rem solid #666;
        border-radius: 5/75rem;
        float: right;
        margin-right: 20/75rem;
      }
    }
  }
}
.nut-backtop-main{
  width: 60/75rem;
  height: 60/75rem;
  background-size: 35/75rem 35/75rem;
}

footer{
  width: 10rem;
  background: #f8f8f8;
  margin-bottom: 100/75rem;
  .fooUl{
    display: flex;
    width: 10rem;
    border-bottom: 1/75rem solid #999;
    li{
      width: 25%;
      text-align: center;
      padding: 20/75rem 0;
      position: relative; 
      a{
        color: #666;
        font-size: 28/75rem;
        height: 70/75rem;
        line-height:70/75rem;
      }
      .line{
        width: 2/75rem;
        height: 30/75rem;
        line-height: 30/75rem;
        background: #9c9c9c;
        display: inline-block;
        position: absolute;
        top: 40/75rem;
        left: 170/75rem;
      }
    }
  }
  .fooOl{
    display: flex;
    width: 10rem;
    font-size: 30/75rem;
    border-bottom: 1/75rem solid #999;
    height: 160/75rem;
    li{
      width: 33.33%;
      text-align: center;
      height: 40/75rem;
      line-height: 40/75rem;
      color: #666;
      .fooOlI{
        width: 1rem;
        height: 1.2rem;
        background: url('../../assets/images/icon/sprites.png') -235/75rem -121/75rem no-repeat;
        background-size: 400/75rem 400/75rem;
        display: inline-block;
      }
      .fooOlI1{
        background-position: -80/75rem -121/75rem;
        background-size: 400/75rem 400/75rem;
      }
      .fooOlI2{
        background-position: -160/75rem -121/75rem;
        background-size: 400/75rem 400/75rem;
      }
    }
  }
  .fooText{
    height: 50/75rem;
    line-height: 50/75rem;
    text-align: center;
  }
}

</style>