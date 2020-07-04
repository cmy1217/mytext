<template>
    <div class="goods-item" @click="toDetails">
        <img v-lazy="showImg" alt="" @load="imgLoad">
        <div class="goods-info">
            <p>{{goodItem.title}}</p>
            <span class="price">{{goodItem.price}}</span>
            <span class="collect">{{goodItem.cfav}}</span>
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
        goodItem:{
          type:Object,
          deafult(){
              return {}
          }
        }
    },
    computed: {
      showImg(){
          //js进行判断时如果前面的变量都没有，后面的判断会直接报错
          return this.goodItem.img || this.goodItem.image  || this.goodItem.show.img 
        
         
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      imgLoad(){
        this.$bus.$emit('imgLoad')
      },
      toDetails(){
        this.$router.push({
          path:'/Details',
          query:{iid:this.goodItem.iid}
        }
        )
      }
    }
};
</script>

<style scoped>
   .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
