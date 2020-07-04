import {api} from './api'
import request from "./request"
//左侧导航数据
export function getsCategory(){
    return api({
        url:'/category',    
    })
}

export const reqCategory = () => request('/category')


//右侧上半部分产品数据
export function getsSubcategory(maitKey){
    return api({
        url:'/subcategory',
        params:{
          maitKey
        }
    })
}

export const reqSubcategory = maitKey => request('/subcategory', { maitKey })
//右侧下半部分推荐数据
export function getsCategoryDetail(miniWallkey,type){
    return api({
        url:'/subcategory/detail',
        params:{
            miniWallkey,
            type
        }
    })
}

export const reqCategoryDetail = (miniWallkey, type) => 
request('/subcategory/detail', { miniWallkey, type })
