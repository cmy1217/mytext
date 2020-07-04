<template>
    <div class="goods">
      <goodItem v-for="(item,index) in goods" :key="index" :goodItem="item"></goodItem>
    </div>
</template>

<script>
import goodItem from './goodsItem'
export default {
    name:'goods',
    data() {
        return {

        };
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        goodItem
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
   .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }

</style>
