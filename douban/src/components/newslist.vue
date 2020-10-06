<template>
    <div class="newslist">
        <div class="news">
            <div class="newsL">
                <h4>{{title}}</h4>
                <p class="txt">{{txt}}</p>
                <p class="author">作者: {{author}}</p>
            </div>
            <div class="newsR"><img :src="imgUrl"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:['imgUrl','txt','title','author']
}
</script>

<style lang='less'>
.newslist{
    width: 10rem;
    padding: 10/64rem 20/64rem;
    box-sizing: border-box;
    .news{
        overflow: hidden;
        width: 10rem;
        border-bottom: 1/64rem solid #ccc;
        padding-top: 5/64rem;
        padding-bottom: 20/64rem;
        .newsL{
            float: left;
            width:6.8rem;
            margin-right: 10/64rem;
          h4{
             font-size: 25/64rem; 
             color:#666;
             margin-bottom: 20/64rem;
          } 
          .txt{
              line-height: 35/64rem;
              color: #999;
              font-size: 22/64rem;
          }
          .author{
                line-height: 40/64rem;
              color: #ccc;
              font-size: 20/64rem;
          }
        }
        .newsR{
            width:2.7rem;
            box-sizing: border-box;
            padding-right: 20/64rem;
            float: left;
            img{
                width:100%;
            }
        }
    }

}


</style>