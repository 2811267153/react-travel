export const FETCH_RECOMMEND_PRODUCT_START = "FETCH_RECOMMEND_PRODUCT_START" //正在调用的api

export const FETCH_RECOMMEND_PRODUCT_SUCCES = "FETCH_RECOMMEND_PRODUCT_SUCCES" //接口调用成功
export const FETCH_RECOMMEND_PRODUCT_FALL= "FETCH_RECOMMEND_PRODUCT_FALL" //接口调用失败

//正在调用时的借口类型
interface FetchRecommendProductStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCT_START
}
//调用成功的返回类型

interface FetchRecommendProductSuccesAction {
    type: typeof FETCH_RECOMMEND_PRODUCT_SUCCES,
    payload: any
}
//调用失败的返回类型
interface FetchRecommendProductFallAction{
    type: typeof FETCH_RECOMMEND_PRODUCT_FALL,
    payload: any
}

//混合三种类型 集体导出为RecommendProductAction
export type RecommendProductAction = |FetchRecommendProductStartAction |FetchRecommendProductSuccesAction | FetchRecommendProductFallAction

//创建函数工厂
//1. 创建函数调用是的返回参数
export const recommendProductActionCreator = () :FetchRecommendProductStartAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCT_START,
    }
}
//2. 创建函数调用成功返回参数
export const recommendProductSuccesActionCreator = (data: any) :FetchRecommendProductSuccesAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCT_SUCCES,
        payload: data
    }
}
//3. 创建函数调用失败返回参数
export const recommendProductFallActionCreator = (error: any) :FetchRecommendProductFallAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCT_FALL,
        payload: error
    }
}