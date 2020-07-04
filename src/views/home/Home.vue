<template>
  <div id="home">
    <NavBar class="nav-bc"><div slot="center">购物街</div> </NavBar>
    <TabBarCon @chGoods="chGoods" 
    :list="['流行','新款','经典']" ref="tabbarcon1" v-show="isTab"></TabBarCon>
    <scroll class="content" ref="scroll" 
    @scroll="bacsrcoll" 
    :probeType="3" 
    :pullUpLoad="true" 
    @pullingUp="pullingUp">
      <rochart :banner="banner" @imgOnLoad="imgOnLoad" ref="rochart"></rochart>
      <HomeDisList :recommend="recommend"></HomeDisList>
      <HomeHot></HomeHot>
      <TabBarCon @chGoods="chGoods" :list="['流行','新款','经典']" ref="tabbarcon2"></TabBarCon>
      <goods :goods="conGoods"></goods>
    </scroll>
    <backTop @click.native="backtop" v-show="isShow"></backTop>


    
  </div>
</template>

<script>

  import {getHomeReqData,getHomeGoods} from  'api/home.js'
  import NavBar from 'components/common/nacbar/NavBar'
  import Rochart from './Rochart'
  import HomeDisList from './HomeDisList'
  import HomeHot from './HomeHot'
  import TabBarCon from 'components/content/TabBarCon'
  import goods from 'components/content/goods/goods'
  import scroll from 'components/common/scroll/scroll'
  import backTop from 'components/content/backTop/backTop'
  import {debounce} from 'common/unit'
  import {mixin} from 'common/mixin'
  export default {
    name: "Home",
    components: {
      NavBar,
      Rochart,
      HomeDisList,
      HomeHot,
      TabBarCon,
      goods,
      scroll,
      backTop
    },
    computed: {
      conGoods(){
        return this.goods[this.onGoods].list
      }
    },
    activated() {
     this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
     this.$refs.scroll.refresh()
 
      
    },
    destroyed() {
     
      
    },
    deactivated() {
  
      this.saveY=this.$refs.scroll.scroll.y
      this.$bus.$off('imgLoad',this.imgfun)
      
    },
    data() {
      return {
        saveY:0,
        banner:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        onGoods:'pop',
        isShow:false,
        offBartop:0,
        isTab:false,
        imgfun:null,
        
      }
    },
    created() {
      this.getHomeReqData() 
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      
    },
    mixins:[mixin],
    mounted() {
     
      
      
    },
    methods: {


      
      imgOnLoad(){
        
        this.offBartop=this.$refs.tabbarcon2.$el.offsetTop
       
        
      },

      /*
      网络请求
      */
      getHomeReqData(){
         getHomeReqData().then(res=>{
       
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;
        
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          if(res){
          this.goods[type].list.push(...res.data.list)
           this.goods[type].page+=1
        
        //允许执行多次上拉事件
        this.$refs.scroll.finshPullUp()

          } 
       
      })
      },
      /*
      主页面商品切换
      */
      chGoods(index){
        switch(index){
          case 0:
            this.onGoods='pop'
            break;
          
          case 1:
            this.onGoods='new'
            break;

          case 2:
            this.onGoods='sell'
            break;
        }
        this.$refs.tabbarcon1.onTimeClick=index
        this.$refs.tabbarcon2.onTimeClick=index
      },
      /*
      返回顶部
      */
      backtop(){
        this.$refs.scroll.backtop(0,0)
        
      },
       /*
      返回按钮的显示和隐藏
      */
      bacsrcoll(postion){
        this.isShow = -(postion.y)>1000  
        this.isTab = -(postion.y)>this.offBartop
      },

       /*
      上拉加载更多
      */
      pullingUp(){
        this.getHomeGoods(this.onGoods)
      }
    },
  }
</script>

<style scoped>
  #home{
   
    height: 100vh;
    position: relative;
  }
  .nav-bc{
    background-color: var(--color-tint);
    color: white;
    
  }
  .Barcon{
    position: sticky;
    top: 44px;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
  
</style>
