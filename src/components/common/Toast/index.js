  import toasts from './toast.vue'
// const obj ={}
// //插件封装使用
// obj.install = function(Vue) {
//     const toaContrustar = Vue.extend(toasts)
//     const toast = new toaContrustar()
//     toast.$mount(document.createElement('div'))
//     document.body.appendChild(toast.$el)
//     Vue.prototype.$toast = toast
// }

//注册全局组件
const common ={
    install(Vue){
      Vue.component('toasts',toasts)
    }
}



export default  common