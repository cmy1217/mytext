<template>
    <div class="detailRochat">
      <swiper class="nav">
        <SwiperItem v-for="item in imgRochat" :key="item">
            <img :src="item"/>
        </SwiperItem>
      </swiper>
    </div>
</template>

<script>
 import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:'Rochat',
    data() {
        return {

        };
    },
    props:{
        imgRochat:Array
    },
    components:{
        Swiper,
        SwiperItem
    },
    created() {

    },
    destroyed() {
        
        
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
  .detailRochat{
      height: 300px;
     
  }
  .nav{
      height: 300px;
  }
</style>
