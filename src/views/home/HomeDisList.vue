<template>
    <div class="homelist">
        <div v-for="(item,index) in recommend" :key="index" class="listitem">
            <a :href="item.link"><img :src="item.image" alt=""></a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props:{
      recommend:{
          type:Array,
          default(){
              return []
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
   .homelist{
       display: flex;
       text-align: center;
       margin: 10px 0px 20px 0px;
       padding-bottom: 20px;
       border-bottom: 8px solid #eee;
   }
   .listitem{
       flex: 1;
   }
   .listitem img{
       width:65px;
       height: 65px;
   }
</style>
