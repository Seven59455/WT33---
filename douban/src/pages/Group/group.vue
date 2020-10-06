<template>
    <div>
        <Header title='小组' class="title">
            <template #img1>
                <img src='@/assets/images/ic_actionbar_search_icon.png'>
            </template>
            <template #img2>
                <img src='@/assets/images/ic_chat_green.png'>
            </template>
        </Header>
        <GroupList v-for="(item,index) in arr" :key='index' :title='item.title' 
            :arrChild ="item.group_list">
        </GroupList>
    </div>
</template>

<script>
import Header from '@/components/header'
import GroupList from './groupList'
export default {
    components:{Header,GroupList},
    data(){
      return{
        arr:[],
        arrChild:[]
      }
    },
    mounted(){
      this.$axios.get('../../../static/data/groupData.json').then(
        res =>{
          //console.log(res.data.group)
          this.arr = res.data.group
          
        }
      )
    }
}
</script>

<style scoped>
.title{
    width: 10rem;
    max-width: 10rem;
    position: fixed;
    left: 0;
    top: 0;
}
</style>