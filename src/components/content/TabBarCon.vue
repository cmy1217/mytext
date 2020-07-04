<template>
    <div id="tabvarcon">
        <div class="tabcon" v-for="(item,index) in list" :key="index" @click="chOnClick(index)" >
            <span :class="{onBody:index==onTimeClick}">{{item}}</span>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            onTimeClick:0,
            
        };
    },
    props:{
        list:Array
    },
    created() {

    },
    mounted() {
        
    },
    methods: {
        chOnClick (index) {
            this.onTimeClick=index
            this.$emit('chGoods',index)
        },
        
    }
};
</script>

<style scoped>
  #tabvarcon{
      display: flex;
      text-align: center;
      font-size: 14px;
      background-color: white;
      height: 44px;
      line-height: 44px;
      position: sticky;
      top: 44px;
      z-index: 9;
  }
  .tabcon{
      flex: 1;
      
  }
  .onBody{
      color: red;
      border-bottom: 2px solid red;
  }
  
</style>
