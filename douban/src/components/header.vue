<template>
    <div :class='{home:flag}' id='header'> 
        <div>
            <span v-if='!flag'>{{title}}</span>
            <div v-if='flag' id='search'>
                <img src="../assets/images/ic_group_search_small.png">
                <input placeholder="影视 图书 唱片 小组等">
                <img src="../assets/images/ic_scan_gray.png">
            </div>
            <template><slot name='img2'></slot></template>
            <template><slot name='img1'></slot></template>
        </div>
    </div>
</template>

<script>
export default {
    props:['title'],
    computed:{
        flag(){
           return this.title=='首页'
        }
    }
}
</script>

<style lang='less'>
#header{
    width: 10rem;
    max-width: 10rem;
    text-align: center;
    font-size: 25/64rem;
    height: 80/64rem;
    line-height: 80/64rem;
    color: rgb(100,100,100);
    border-bottom: 1/64rem solid rgb(219,219,219);
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background: #fff;
}
.home{
    background: rgb(72,189,90)!important;
}
#header>div{
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
}
#header>div>img{
    right: 15/64rem;
    position: absolute;
    width: 50/64rem;
    height: 50/64rem;
}
#header>div>img:nth-of-type(2){
    right: 80/64rem;
}
#search{
    width: 85%;
    border-radius: 10/64rem;
    // flex-grow: 1;
    margin: 0px 60/64rem 0px 5/64rem;
    height: 55/64rem;
    background: white;
    display: flex;
    align-items: center;
}
#search>img{
    padding: 0/64rem 10/64rem 0/64rem 5/64rem;
    width: 50/64rem;
    height: 40/64rem;
}
#search>input{
    font-size: 25/64rem;
    flex-grow: 1;
    margin-right: 20/64rem;
    height: 90%;
    border: none;
    outline: none;
}
</style>