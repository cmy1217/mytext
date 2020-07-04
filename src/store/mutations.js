export default {
    addcount(state,payload){
      payload.count++
    },
    add(state,payload){
      payload.checked=false
      state.carts.push(payload)
    }
    
   
  }