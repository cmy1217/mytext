 /*
防止频繁刷新抖动
*/

export function debounce(fun,deply){
  let timer=null;
  return function(...arg){
    if(timer) clearTimeout(timer)
      timer = setTimeout(()=>{
        fun.apply(this,...arg)
        
        
    },deply)
  }
  
}

export function mydebounce(fun,deply){
  let timer=null
  return function(){
        
    if(timer)clearTimeout(timer)  
    timer = setTimeout(()=>{
  
      fun.apply(this)
      
    },deply)
  
}


}