<template>
    <div id="shop-item">
        <check-button class="check-button" 
        :checked="itemInfo.checked"
         :iid="itemInfo.iid" 
         @click.native="update"/>
         
        <div class="item-img">
            <img :src="itemInfo.image" alt="商品图片">
        </div>
        <div class="item-info">
            <div><h4 class="item-title">{{itemInfo.title}}</h4></div>
            <div><p class="item-desc">商品描述: {{itemInfo.desc}}</p></div>
            
            <div class="info-bottom">
                <span class="item-price left">¥{{itemInfo.price}}</span>
                <span class="item-count right">x{{itemInfo.count}}</span>
            </div>
        </div>
    </div>
</template>
<script>
     import CheckButton from  './CheckButton'
    export default {
        name:'ListItem',
        props:{
            itemInfo:{
                type:Object,
                default(){
                    return {}
                },
            }
        },
        components:{
             CheckButton
        },
        methods: {
            update(){
                this.itemInfo.checked=!this.itemInfo.checked
            }
        },
    }
</script>

<style scoped>
    #shop-item {
        width: 100%;
        display: flex;
        font-size: 0;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }

    .item-selector {
        width: 14%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item-title, .item-desc {
        line-height: 22px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .item-img {
        padding: 5px;
        /*border: 1px solid #ccc;*/
        
    }

    .item-img img {
        width: 80px;
        height: 100px;
        display: block;
        border-radius: 5px;
       
    }

    .item-info {
        display: flex;
        flex-direction:column;
        font-size: 17px;
        color: #333;
        padding: 5px 10px;
        position: relative;
        overflow: hidden;
    }

    .item-info .item-desc {
        font-size: 14px;
        color: #666;
        width: 182px;
        height: 25px;
    }

    .info-bottom {
       
    }

    .info-bottom .item-price {
        color: orangered;
    }
</style>
