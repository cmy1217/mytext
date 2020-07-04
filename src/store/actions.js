export default {
    addcart(context,payload){
     return new Promise((res,rej)=>{
      let isNew = context.state.carts.find(item=>{return item.iid === payload.iid})
      if(isNew){
        context.commit('addcount',isNew)
        res('商品数量加一')
      }else{
        payload.count=1  
        context.commit('add',payload)
        res('新增了一个商品')
      }
    }
     )
  }
}