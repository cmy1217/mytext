<template>
    <div class="bottom-menu">
        <check-button class="select-all" @click.native="btn" :checked="selectAll"/>
       
        <span class="all">全选</span>
        <span class="total-price">合计:¥{{total.toFixed(2)}}</span>
        <span class="buy-product" >去计算</span>


    </div>
</template>

<script>

    import CheckButton from './CheckButton'

    import {mapGetters,mapMutations} from 'vuex'

    export default {
        name: 'MarketBottomBar',
        components:{
            CheckButton,
            // Toast
        },
        computed:{
            ...mapGetters(['total','selectAll','getinfo'])
        },
        methods: {
            btn(){
                
                
              if(this.selectAll){
                  this.getinfo.forEach(item=>{
                      item.checked = false
                  })
              }else{
                  this.getinfo.forEach(item=>{
                      item.checked = true
                  })
              }
                
            }
        },
        // methods:{
        //     ...mapMutations(['selectAll']),
        //     btnClick(){  //如果全选按钮选中了  那所有的按钮都应该选中
        //         console.log('selectAll',this.isCheckAll)
        //         this.selectAll(!this.isCheckAll)

        //     },
        //     calc(){

        //         this.$toast.show(`商品总和为${this.total.toFixed(2)}`)

        //     }
        // }


    }
</script>

<style  scoped>
    .bottom-menu {
        position: relative;
        height: 44px;
        background-color: #eee;
        display: flex;
        
        box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
        font-size: 14px;
        color: #888;
        line-height: 44px;

        /* 元素水平居中 */
        justify-content: center;
        align-items: center;
        box-sizing: border-box; 
    }
    .all{
        position: absolute;
        left: 5%;
        top: 0;
       
        width:48px
    }

     .bottom-menu .select-all {
       
     position: absolute;
     left: 0;
     bottom: 0;
     transform: translateY(-70%);     
    }

    .bottom-menu .total-price {
        width: 115px;
        margin-left: 40px;
        font-size: 14px;
        color: #666;
    }

    .bottom-menu .buy-product {
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #59c3e5;
        color: #fff;
        width: 100px;
        height: 44px;
        text-align: center;
        line-height: 44px;
       
    }
    .isselcect{
     background-color: #59c3e5;
     border-color: #59c3e5; 
    }
</style>

