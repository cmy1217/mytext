import {api} from './api'

export function getHomeReqData(){
    return api({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return api({
        method:'get',
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}