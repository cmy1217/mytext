<template>
    <div class="warpper" ref="scroll">
       <div>
            <slot></slot>
       </div>
          
          
      
    </div>
</template>

<script>
  import betterScroll from 'better-scroll'



export default {
    data() {
        return {
         scroll:null
        };
    },
    created() {

    },
    props:{
        probeType:Number,
        pullUpLoad:false
    },
    mounted() {
        
        
      this.scroll = new betterScroll(this.$refs.scroll,{
          click:true,
          probeType:this.probeType,//是否监听滚动位置
          pullUpLoad:this.pullUpLoad//是否监听滚动到底部
      })
        /*
            监听滚动到的位置，postion是滚动的位置对象
        */
      this.scroll.on('scroll',(postion)=>{
         this.$emit('scroll',postion)
          
      })
        /*
            监听是否滚动到底部，滚动到底部向父组件发送事件
        */
      this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
          
      })
         
    },
    methods: {
        backtop(x,y,time=300){

            
            
            this.scroll.scrollTo(x,y,time)
        },
        finshPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll.refresh()
        }
    }
};
</script>

<style scoped >

</style>
