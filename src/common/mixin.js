import {debounce,mydebounce} from 'common/unit'
import backTop from 'components/content/backTop/backTop'
export const mixin = {
    mounted() {
      
      let applist = mydebounce(this.$refs.scroll.refresh,200)
      

    //   const refresh = debounce(this.$refs.scroll.refresh,200)
      this.imgfun = ()=>{
        applist()
       
        
      }
      this.$bus.$on('imgLoad', this.imgfun)
        
    },
}

export const backtopMixin = {
  data() {
    return {
      isShow:false,
    }
  },
  components:{
    backTop
  },
  methods: {
    backtop(){
       
     
      
       this.$refs.scroll.backtop(0,0);    
      
     },
  },
}