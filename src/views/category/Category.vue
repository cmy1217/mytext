<template>
    <div class='Category'>
        <nav-bar class="nav-bar">
            <div slot="center">分类</div>
        </nav-bar>
        
        <!--左侧滚动区域-->
        <scroll :probeType="3" class="container1">
            <category-left-nav
                @itemClick="itemClick"
                :categorys="categorys"/>
        </scroll>
        <!--右侧滚动区域-->
        <scroll :probeType="3" class="container2">
            <category-grid-view :subcategory="subcategory" class="nava"/>
            <tab-control
                    @chGoods="tabClick"
                    :list='Object.values(types)' class="navb"/>
            
            <goods-list :goods="goods[currentType].list" class="navc"/>
        </scroll>
        
    </div>
</template>

<script>
    import {reqCategory,reqSubcategory,reqCategoryDetail,getsCategory,getsSubcategory,getsCategoryDetail} from '../../api/category'
    import CategoryLeftNav from './base/LeftNav'
    import CategoryGridView from './base/GridView'
    import TabControl from 'components/content/TabBarCon'
    import GoodsList from 'components/content/goods/goods'
    import NavBar from 'components/common/nacbar/NavBar'
    import scroll from 'components/common/scroll/scroll'
    export default {
        name: "Category",
        data(){
            return {
                categorys:[],   //存储左侧滚动区域的数据
                subcategory:[], //储存右侧subcategory(顶部)的数据
                currentIndex:0,
                currentType:'pop',
                // typeList:['pop','new','sell'],  //定义商品类型的数据
                types:{
                    pop:'综合',
                    new:"新款",
                    sell:'销量'
                },
                goods:{
                    pop:{
                        list:[],
                    },
                    new:{
                        list:[],
                    },
                    sell:{
                        list:[],
                    }
                }
            }
        },
        created(){
            // this.getCategory(),
            getsCategory().then(res=>{
                this.categorys = res.data.category.list

                const maitKey = this.categorys[this.currentIndex].maitKey
                getsSubcategory(maitKey).then(res=>{
              
                this.subcategory = res.data.list

                })
                
                const miniWallkey = this.categorys[this.currentIndex].miniWallkey
                // const type = Object.keys(this.goods)[this.currentIndex]
                   const type = Object.keys(this.goods)[0]
                getsCategoryDetail(miniWallkey,type).then(res=>{
     
                   this.goods[type].list = res
                })
            })
          
        },
        components:{
            CategoryLeftNav,
            CategoryGridView,
            TabControl,
            GoodsList,
            NavBar,
            scroll
        },
        methods:{
            itemClick(index){
                if(index===this.currentIndex)return

                this.currentIndex = index

                const maitKey = this.categorys[this.currentIndex].maitKey
                getsSubcategory(maitKey).then(res=>{
              
                 this.subcategory = res.data.list

                 const miniWallkey = this.categorys[this.currentIndex].miniWallkey
                  const type = Object.keys(this.goods)[0]
         
                getsCategoryDetail(miniWallkey,type).then(res=>{
                   
                   
                   this.goods[type].list = res
                })

                })
                
               
                
                
             
                //获取右侧上两部分的数据
                // this.getsSubcategory()
                // this.getSubCategoryDetail('pop')  //请求pop类型的数据
                // this.getSubCategoryDetail('sell')  //请求pop类型的数据
                // this.getSubCategoryDetail('new')  //请求pop类型的数据
                // Object.keys(this.types).forEach(this.getSubCategoryDetail)
            },
            tabClick(index){
                // console.log(index)
                // this.currentType = this.typeList[index]
                this.currentType = Object.keys(this.types)[index]
                const type = Object.keys(this.goods)[index]
                console.log(type);
                const miniWallkey = this.categorys[this.currentIndex].miniWallkey
                getsCategoryDetail(miniWallkey,type).then(res=>{
                   this.goods[type].list = res
                })

                
            },
              



            // async getCategory(){
            //     const result = await reqCategory()

            //     //左侧滚动区域的数据
            //     // this.categorys = result.data.category.list
            //     //请求右侧上面的数据 用于渲染CategoryGridView 基于指定商品的maitKey
            //     this.getSubcategory()
            //     //请求右侧下面的数据  用于渲染GoodsList  基于指定商品的miniWallkey
            //     // this.getSubCategoryDetail('pop')  //请求pop类型的数据
            //     // this.getSubCategoryDetail('sell')  //请求pop类型的数据
            //     // this.getSubCategoryDetail('new')  //请求pop类型的数据
            //     // Object.keys(this.types).forEach(type=> this.getSubCategoryDetail(type))
            //    Object.keys(this.types).forEach(this.getSubCategoryDetail)
            // },
            // async getSubcategory(){
            //     const {maitKey} = this.categorys[this.currentIndex]
            //     const result = await reqSubcategory(maitKey)
            //     this.subcategory = result.data.list
            // },
            // async getSubCategoryDetail(type){
            //     const {miniWallkey} = this.categorys[this.currentIndex]
            //     const result = await reqCategoryDetail(miniWallkey, type)
            //     // console.log(result)
            //     this.goods[type].list = result
            // }
         
        }
    }
</script>

<style scoped>
    
    .nav-bar{
        background-color: pink;
        font-weight: bold;
        color:#fff
    }

    .container1 {
        position: fixed;
        top: 44px;
        bottom: 49px;
        width: 100px;
    }

    .container2 {
        position: fixed;
        top: 44px;
        bottom: 49px;
        right: 0;
        left: 100px;
    }
    .nav-bar{
        position: relative;
        z-index: 9;
    }

</style>
