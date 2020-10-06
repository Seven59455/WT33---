<template>
    <div>
        <Header title='广播'>
            <template #img1>
                <img src='../../assets/images/ic_status_search_user.png'>
            </template>
            <template #img2>
                <img src='@/assets/images/ic_chat_green.png'>
            </template>
        </Header>
        <div class="broBox">
            <h2 @click='toLogin'><i class="iconfont icon-touxiang"></i>登录发广播</h2>
            <div class="broList" v-for="(item,index) in arr" :key="index">
                <div class="broL"><i class="iconfont icon-douban"></i></div>
                <div class="broR">
                    <p>{{item.title}} <span>写了日记</span></p>
                    <p>{{item.time}}</p>
                    <div class="topic">{{item.topic_title}}</div>
                    <ul>
                        <li><i class="iconfont icon-dianzan">{{item.like}}</i></li>
                        <li><i class="iconfont icon-pinglun">{{item.comments}}</i></li>
                        <li><i class="iconfont icon-fenxiang_2">{{item.share}}</i></li>
                        <li class="point">...</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header'
export default {
    components:{Header},
    data(){
      return{
        arr:[]
      }
    },
    mounted(){
      this.$axios.get('../../../static/data/radio.json').then(
        res =>{
          console.log(res.data.radio_list)
          this.arr = res.data.radio_list
          
        }
      )
    },
    methods: {
        toLogin(){
            this.$router.push('/login')
        }
    },
}
</script>

<style lang='less'>
@import '../../assets/font1/iconfont.css';
.broBox{
    width: 10rem;
    margin-top: 100/64rem;
    h2{
        height: 70/64rem;
        line-height: 70/64rem;
        font-size: 25/64rem;
        color: #666;
        border-bottom: 1/64rem solid #ccc;
        display: flex;
        align-items: center;
        i{
            width: 70/64rem;
            height: 70/64rem;
            line-height: 70/64rem;
            text-align: center;
            font-size: 60/64rem;
            background: #eee;
            border-radius: 50%;
            color: #fff;
            margin: 0 30/64rem 15/64rem 20/64rem;
        }
    }
    .broList{
        width: 10rem;
        padding: 20/64rem;
        box-sizing: border-box;
        display: flex;
        .broL{
            width: 15%;
            text-align: center;
            i{
                width: 70/64rem;
                height: 70/64rem;
                line-height: 70/64rem;
                font-size: 60/64rem;
                display: inline-block;
                color: #fff;
                background: #05c011;
                border-radius: 50%;
            }
        }
        .broR{
            width: 85%;
            font-size: 22/64rem;
            color: #999;
            .topic{
                background: #eee;
                padding: 10/64rem;
                margin-top: 20/64rem;
                color: #666;
            }
            ul{
                display: flex;
                position: relative;
                li{
                    list-style: none;
                    padding: 30/64rem 0;
                    margin-right: 20/64rem;
                    i{
                        font-size: 22/64rem;
                    }
                }
                .point{
                    font-size: 40/64rem;
                    color: #ccc;
                    position: absolute;
                    right: 0/64rem;
                    top: -30/64rem;
                }
            }
        }
    }
}
</style>