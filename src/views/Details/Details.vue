<template>
    <div class="details">
      
        <detailsbar class="content" @onchange="onchange" ref="navs"></detailsbar>
        <scroll class="detailscroll" ref="scroll" :probeType="3" @scroll="chPosition">
         
          <detailsRochat ref="Rochat" :imgRochat="imgRochat"></detailsRochat>
          <DetailBaseInfo :goods="goods"/>
          <DetailShopInfo :shop="shop"></DetailShopInfo>
          <DetailGoodsInfo :detailInfo="info" @imageLoad="imageLoad"></DetailGoodsInfo>
          <DetailParamInfo :paramInfo="paramInfo" ref="DetailParamInfo"></DetailParamInfo>
          <detailComment :comment="comment" ref="detailComment"></detailComment>
          <goods :goods="recommend" ref="goods"></goods>
        </scroll>
        <toast ref="toastto" :message="toamessage" :show="toashow"></toast>
        <backTop @click.native="backtop" v-show="isShow"></backTop>
        <DetailBottomBar class="bottom" @addMarket="addMarket"></DetailBottomBar>    
    </div>
</template>

<script>
import  detailsbar from './childcompoent/detailsBar'
import  {getDtials,Goods,Shop,GoodsParam,getRecommend} from 'api/details'
import  detailsRochat from './childcompoent/detailRochat'
import  DetailBaseInfo from './childcompoent/DetailBaseInfo'
import  DetailShopInfo from './childcompoent/DetailShopInfo'
import  scroll from 'components/common/scroll/scroll'
import  DetailGoodsInfo from './childcompoent/DetailGoodsInfo'
import  DetailParamInfo from './childcompoent/DetailParamInfo'
import  detailComment from './childcompoent/detailComment'
import  goods from 'components/content/goods/goods.vue'
import  {mixin,backtopMixin} from 'common/mixin'
import {debounce} from 'common/unit'
import DetailBottomBar from './childcompoent/BottomBar'
import {mapActions} from 'vuex'
import toast from 'components/common/Toast/toast'
export default {
    name:'Details',
    data() {
        return {
          iid:null,
          imgRochat:[],
          goods:{},
          shop:{},
          info:{},
          paramInfo:{},
          comment:{},
          recommend:[],
          imgfun:null,
          onY:[],
          onImg:null,
          comY:[],
          str:[],
          chImg:null,
          imgY:0,
          thisNum:0,
          toamessage:'',
          toashow:false
        };
    },
    components:{
        detailsbar,
        detailsRochat,
        DetailBaseInfo,
        DetailShopInfo,
        scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        detailComment,
        goods,
        DetailBottomBar,
        toast
       
    },
    destroyed() {
       
        
    },
    created() { 
      this.iid=this.$route.query.iid
      
      getDtials(this.iid).then(res=>{
        
          const data = res.result
          this.imgRochat = data.itemInfo.topImages
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          this.shop = new Shop(data.shopInfo)
          this.info = data.detailInfo
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
          
          
          if(data.rate.cRate !== 0){
            
            
            this.comment = data.rate.list[0]
          }
      }),
      getRecommend().then(res=>{
        this.recommend = res.data.list
        
        
      }),
     
        this.chImg = debounce(()=>{
         
          this.str=[]
          let length = this.onY.length
          let arr = []
          arr.push(this.imgY)
          for (let i = 0; i < length; i++) {
            this.comY.push(arr.slice(-1))
            
          }
         
          
          for (let i = 0; i < this.onY.length; i++) {
            if(-this.comY[i]<-this.onY[i]){
              this.str.push(i)
              break;   
            }else if(-this.comY[length-1]>-this.onY[length-1]){
              this.str.push(length)
              break
            }else{
             
              
            }
         
          }
          
          
           this.$refs.navs.onclick=this.str[0]-1
           this.comY=[]
        },50)

    },
    mixins:[mixin,backtopMixin],
    mounted() {
       this.onImg = debounce(()=>{
         if(this.$refs.DetailParamInfo){
            this.onY=[]
            this.onY.push(0)
            this.onY.push(-this.$refs.DetailParamInfo.$el.offsetTop+58)
            this.onY.push(-this.$refs.detailComment.$el.offsetTop+58)
            this.onY.push(-this.$refs.goods.$el.offsetTop+58)
         }else{
           
         }      
           
 
        },200)
        

      
    },
    methods: {
      ...mapActions(['addcart']),
      imageLoad(){  
        this.$refs.scroll.refresh();
        this.onImg()

      },
      onchange(index){
        this.$refs.scroll.backtop(0,this.onY[index],200)
      },
      chPosition(postion){
        this.isShow = -postion.y>1000
        // this.imgY=postion.y
        // this.chImg()
       let postiony=postion.y
      
        let length = this.onY.length
        

        for (let i = 0; i <length; i++) {
            if(this.thisNum!==i &&((i<length-1 && postiony<this.onY[i] && postiony>this.onY[i+1])|| 
            (i===length-1 && postiony<this.onY[i]))
            ){
             
              
              this.thisNum=i
              this.$refs.navs.onclick=i
            }
          
        }
 
       
      },
      //将商品信息加入仓库用于购物车组件显示商品
      addMarket(){
        const product={}
        product.image = this.imgRochat[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        // this.$store.dispatch('addcart',product).then(res=>{
        //   console.log(res);
          
        // })

        this.addcart(product).then(res=>{
            //  this.toamessage = res
            //  this.toashow = true 
            //  setTimeout(()=>{
            //    this.toashow = false 
            //    this.toamessage = ''
            //  },1500)
            this.$refs.toastto.show(res)
            // this.$toast.show(res)
             
           })


      }
    }
};
</script>

<style scoped >
  .details{
      height: 100vh;
      position: relative;
      z-index: 9;
      background: #fff;
  }
  .content{
      position: relative;
      z-index: 9;
      background: #fff;
  }
  .detailscroll{
    height: calc(100% - 44px - 58px);
  }
  .bottom{
    position: relative;
    z-index: 90;
  }
</style>
