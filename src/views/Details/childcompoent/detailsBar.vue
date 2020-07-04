<template>
    <div class="detailsbar">
        <NavBar>
            <div slot="left" class="back" @click="back">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="itembar">
                <div class="center" :class="{active:onclick==index}" v-for="(item,index) in list" 
                :key="index" @click="onitem(index)">{{item}}</div>
            </div>
        </NavBar>
    </div>
</template>

<script>
 import NavBar from 'components/common/nacbar/NavBar'

export default {
    name:'navs',
    data() {
        return {
            list:['商品','参数','评论','推荐'],
            onclick:0,
            isActive:false
        };
    },
    components:{
        NavBar
    },
    created() {

    },
    mounted() {

    },
    methods: {
        onitem(index){
          this.onclick=index;
          this.$emit('onchange',index)
        },
        back(){
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped >
  .itembar{
      display: flex;
  }
  .center{
      flex: 1;
      font-size: 13px;
  }
  .active{
      color: red;
  }
  .back img{
      margin-top: 12px;
  }
</style>
