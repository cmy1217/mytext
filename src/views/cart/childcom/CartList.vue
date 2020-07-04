<template>
    <div class="cart-list">
        <scroll class="context">
            <list-item v-for="(item,index) in getinfo" :key="index" :itemInfo="item"></list-item>
        </scroll>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import scroll from 'components/common/scroll/scroll'
import ListItem from './ListItem'
export default {
    name:'CartList',
    data() {
        return {

        };
    },
    components:{
        scroll,
        ListItem
    },
    computed: {
      ...mapGetters(['getinfo'])
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
 .cart-list{
     position: relative;
  height: calc(100vh - 44px - 49px - 44px);
 }
 .context{
     height: 100%;
     overflow: hidden;
 }
</style>
