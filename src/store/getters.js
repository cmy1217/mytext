export default {
    getLength(state){
      return state.carts.length
    },
    getinfo(state){
      return state.carts
    },
    total(state){
      return state.carts.reduce((pre,next)=>{
          return pre+(next.checked?next.count*next.price:0)
      },0)
   },
   selectAll(state){
     const length = state.carts.length
      if(length===0){ 
       return false
      }else{
      for (let i = 0; i < length; i++) {
        if(!state.carts[i].checked){
          return false
         }     
       }
       return true
    } 
   }

  }