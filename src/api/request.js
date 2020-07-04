
import axios from 'axios'
/*
    baseURL:'http://123.207.32.32:8000/api/wh',  俩地址都可以//更换前hy
    baseURL:'http://106.54.54.237:8000/api/wh',
*/http://123.207.32.32:8000/api/m3/category
axios.defaults.baseURL = 'http://123.207.32.32:8000/api/m3'
axios.interceptors.response.use(res=>res.data)

export default function request(url,data={},method='get'){
    return new Promise((resolve,reject)=>{
        let p = null;
        if(method==='get'){ //如果是get请求
            p = axios.get(url,{
                params:data
            })
        }else{
            p = axios.post(url,data)
        }
        p.then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })

}

