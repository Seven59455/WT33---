<template>
    <div class="groupList">
        <h2>{{title}}</h2>
        <div v-for="(item,index) in arrChild" :key='index' class="gBox">
            <img :src="item.img_url">
            <h4>{{item.group_name}}</h4>
            <span>{{item.group_member}}</span>
            <p>{{item.topic_title}}</p>
        </div>
        <button>更多相关小组</button>
  </div>
</template>

<script>
export default {
  props: ["title","arrChild"]
};
</script>

<style lang='less'>
.groupList{
    margin-top: 60/64rem;
    width: 10rem;
    padding: 30/64rem;
    box-sizing: border-box;
    h2{
        font-weight: normal;
        font-size: 25/64rem;
        height: 40/64rem;
        line-height: 40/64rem;
    }
    .gBox{
        display: flex;
        flex-wrap: wrap;
        font-size: 22/64rem;
        position: relative;
        height: 150/64rem;
        padding-top: 20/64rem;
        border-bottom: 2/64rem solid #ccc;
        img{
            width: 60/64rem;
            height: 60/64rem;
            border-radius: 10/64rem;
            margin-right: 20/64rem;
        }
        h4{
            font-weight: normal;
            padding-top: 20/64rem;
        }
        span{
            color: #999;
            position: absolute;
            top: 30/64rem;
            right: 20/64rem;
        }
        p{
            width: 100%;
            color: #999;
            height: 50/64rem;
            line-height: 50/64rem;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            position: absolute;
            bottom: 10/64rem;
        }
        &:last-child{
            border-bottom:none;
        }
    }
    button{
        font-size: 25/64rem;
        color: #63c873;
        border: none;
        background: #fff;
        display: block;
        margin: 0 auto;
        padding-top: 30/64rem;
    }
}
</style>