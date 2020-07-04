<template>
    <div class="comment" v-if="Object.keys(comment).length !==0">
       <div class="comment-usr">
          <span class="left">用户评价</span> <span class="right">更多</span>
       </div>
       <div class="comment-img">
           <img :src="comment.user.avatar" alt="">
           <span>{{comment.user.uname}}</span>    
       </div>
       <div class="comment-text">
           <div>{{comment.content}}</div>
       </div>

       <div class="comment-show">
           <img v-for="(item,index) in comment.images" :key="index" :src="item" alt="">
       </div>
    </div>
</template>

<script>
export default {
    name:'detailComment',
    data() {
        return {

        };
    },
    props:{
      comment:{
          type:Object,
          default(){
            return {}
          }
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
 .comment-usr{
     height: 40px;
     line-height: 40px;
     font-size: 14px;
     box-shadow: 1px 1px 3px #888888;
     
 }
 .left{
     position: relative;
     left: 10px; 
 }
 .right{
     position: relative;
     right: 10px;
 }
 .comment-img{
     margin-top: 5px;
     
     
 }
 .comment-img img{
     height: 45px;
     width: 45px;
     border-radius:50%;
     overflow:hidden;
 }
 .comment-img span{
     position: relative;
     left: 5px;
     top: -21px;
     font-size: 14px;
     font-weight: 600;
 }
 .comment-text{
     margin-top: 10px;
     font-size: 14px;
 }
 .comment-show{
     margin-top: 20px;
     
 }
 .comment-show img{
     height: 15%;
     width: 15%;
 }
</style>
