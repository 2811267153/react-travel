//引入创建后的混合类型

import {
    FETCH_RECOMMEND_PRODUCT_FALL,
    FETCH_RECOMMEND_PRODUCT_START,
    FETCH_RECOMMEND_PRODUCT_SUCCES,
    RecommendProductAction
} from "./recommmendProducrAction";
//定义推荐数据接口
interface RecommendProductState {
    productList: any[],
    loading: boolean,
    errpr: string | null
}

//创建默认产品推荐数据
const defaultState: RecommendProductState = {
    loading: true,
    errpr: null,
    productList: []
}

//创建redux函数

export default (state = defaultState, action: RecommendProductAction) => {
    switch (action.type) {
        case FETCH_RECOMMEND_PRODUCT_START: return {...state, loading: true}
        case FETCH_RECOMMEND_PRODUCT_SUCCES: return {...state, loading: false, productList: action.payload}
        case FETCH_RECOMMEND_PRODUCT_FALL: return {...state, loading: false, errpr: action.payload}
        default: return state
    }
}