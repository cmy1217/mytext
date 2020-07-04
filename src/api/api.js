import axios from 'axios'
export function api(config){
    const instan =axios.create({
        baseURL:'http://123.207.32.32:8000/api/m3',
        timeout:5000
    })
   
    instan.interceptors.request.use(config=>{ //请求拦截
      
        return config
    },err=>{
        console.log(err);
        
    })


    instan.interceptors.response.use(res=>{ //响应拦截
        
        return res.data
    },err=>{
        console.log(err);
        
    })
    return instan(config)

}
