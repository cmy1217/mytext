<template>
   
      <Swiper>
        <SwiperItem v-for="(item,index) in banner" :key="index" >
          <a :href="item.link"><img :src="item.image" alt="" @load="imgOnLoad"></a>
        </SwiperItem>
        
      </Swiper>
  
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    components:{
        Swiper,
        SwiperItem,
       
    },
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            isSend:true
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        
        imgOnLoad(){
          
               this.$emit('imgOnLoad')
              
          
           
        }
    }
};
</script>

<style scoped >

</style>
