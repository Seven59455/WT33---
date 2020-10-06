<template>
    <div>
        <Header title='我的'>
            <template #img2>
                <img src='@/assets/images/ic_settings.png'>
            </template>
        </Header>
        <div class="mine">
            <ul class="title">
                <li>
                    <p class="iconfont icon-icon-"></p>
                    <p class="txt">密码管理</p>
                </li>
                <li>
                    <p class="iconfont icon-cc-card"></p>
                    <p class="txt">银行卡管理</p>
                </li>
            </ul>
            <ol>
                <li><i class="iconfont icon-biji"></i>风险承受能力评估</li>
                <li><i class="iconfont icon-anquanbaozhang"></i>安全保障</li>
                <li><i class="iconfont icon-wode"></i>我的关注</li>
                <li><i class="iconfont icon-bangzhuzhongxin"></i>帮助中心</li>
                <li><i class="iconfont icon-guanyuwomen"></i>关于我们</li>
                <li><i class="iconfont icon-jianchaquyu"></i>检查更新</li>
                <li><i class="iconfont icon-gouwuchezhengpin"></i>联系客服</li>
            </ol>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header'
import '../../assets/font/iconfont.css'
export default {
    components:{Header}
}
</script>

<style lang='less' scoped>
.title{
    margin-top: 70/64rem;;
    padding: 40/64rem 0;
    height: 150/64rem;
    border-bottom: 1/64rem solid #ccc;
    width: 10rem;
    display: flex;
    li{
        list-style: none;
        flex: 1;
        text-align: center;
        color: #666;
        .txt{
            font-size: 22/64rem;
        }
    }
}
ol{
    li{
        list-style: none;
        vertical-align: middle;
        color: #666;
        font-size: 22/64rem;
        position: relative;
        padding: 15/64rem;
        border-bottom: 1/64rem solid #eee;
        i{
            font-style: normal;
            vertical-align: middle;
            padding-right: 10/64rem;
        }
        &:after{
            content: "";
            display: block;
            width: 15/64rem;
            height: 15/64rem;
            border-top: 3/64rem solid #4bbf5e;
            border-right: 3/64rem solid #4bbf5e;
            transform: rotate(45deg);
            position: absolute;
            top: 35/64rem;
            right: 20/64rem;
        }
        &:last-child{
            border-bottom: none;
        }
    }
    
}
.iconfont{
    color: #4bbf5e;
    font-size: 50/64rem;
}
</style>