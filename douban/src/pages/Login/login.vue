<template>
  <div class="login">
    <h1>登录豆瓣</h1>
    <p class="title">登录注册表示同意<span>登录使用协议，隐私政策</span></p>

    <div class="loginBox" v-if='isShow'>
      <form action="#">
        <p><input type="text" placeholder="手机号/邮箱" /></p>
        <p><input type="password" placeholder="密码" /></p>
        <button>登录</button>
      </form>
      <ul>
        <li @click='isShow=false'><a href="#">免密码登录</a></li>
        <li><a href="#">海外手机登录</a></li>
        <li class="pwd"><a href="#">找回密码</a></li>
      </ul>
    </div>

    <div class="loginBox" v-if='!isShow'>
      <form action="#">
        <p><span class="num">+86</span><input type="text" class='tel' placeholder="手机号"/></p>
        <p><span class="code">获取验证码</span><input type="password" placeholder="手机验证码" /></p>
        <button>登录</button>
      </form>
      <ul>
        <li @click='isShow=true'><a href="#">账号密码登录</a></li>
        <li class="pwd"><a href="#">验证码收不到?</a></li>
      </ul>
    </div>

    <p class="other">第三方登录</p>
    <div class="icon">
      <i class="iconfont icon-weibo weibo"></i>
      <i class="iconfont icon-weixin weixin"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:true
    }
  }
};
</script>

<style lang='less'>
@import "../../assets/chat/iconfont.css";
.login {
  width: 10rem;
  padding: 30/64rem;
  box-sizing: border-box;
  h1 {
    font-size: 35/64rem;
    font-weight: bold;
    text-align: center;
    margin-top: 30/64rem;
  }
  .title {
    font-size: 22/64rem;
    color: #999;
    text-align: center;
    margin-bottom: 30/64rem;
    height: 30/64rem;
    line-height: 30/64rem;
    span {
      color: #60c86e;
    }
  }
  form {
    p{
      position: relative;
      .num{
        color: #000;
        font-weight: bold;
        font-size: 25/64rem;
        position: absolute;
        top: 18/64rem;
        left: 20/64rem;
        padding-right: 10/64rem;
        border-right: 1/64rem solid #999;
      }
      .tel{
        padding-left: 70/64rem;
      }
      input {
        font-size: 25/64rem;
        border: 1/64rem solid #ccc;
        width: 9rem;
        height: 70/64rem;
        line-height: 70/64rem;
        border-radius: 5/64rem;
        &::placeholder {
          padding-left: 20/64rem;
        }
      }
      .code{
        color: #60c86e;
        position: absolute;
        top: 20/64rem;
        right: 20/64rem;
      }
    }

    button {
      font-size: 25/64rem;
      color: #fff;
      background: #a0deaa;
      width: 9rem;
      height: 70/64rem;
      line-height: 70/64rem;
      margin-top: 30/64rem;
      border-radius: 5/64rem;
    }
  }
  ul {
    display: flex;
    position: relative;
    li {
      list-style: none;
      height: 90/64rem;
      line-height: 90/64rem;
      margin-right: 20/64rem;
    }
    .pwd {
      position: absolute;
      top: 5/64rem;
      right: 10/64rem;
      a {
        color: #000;
      }
    }
  }
  .other {
    font-size: 22/64rem;
    color: #999;
    margin-top: 200/64rem;
    text-align: center;
  }
  .icon {
    margin-top: 30/64rem;
    text-align: center;
    i {
      font-size: 50/64rem;
      border: 1/64rem solid #ccc;
      border-radius: 50%;
      padding: 10/64rem;
      margin-right: 20/64rem;
    }
    .weibo {
      color: red;
    }
    .weixin {
      color: #6fcd7b;
    }
  }
}
</style>