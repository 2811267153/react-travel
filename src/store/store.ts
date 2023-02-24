import {createStore, applyMiddleware} from "redux"
import languagRedux from "./language/languagRedux";
import RecommendProductRedux from "./recommendProduct/recommendProductRedux";
import thunk from "redux-thunk";
import {actionLog} from "./middlewares/actionLog";
import {combineReducers} from "@reduxjs/toolkit"
import {productDetailSlice} from "./productDetail/slice"

//讲languagRedux和RecommendProductRedux集体暴露出去/
//因为 toolkit支持无缝间歇redux的 所以 我们现在使用的combineReducers和之前的 combineReducers不一样的
const rootRedux = combineReducers({
    language: languagRedux,
    recommendProduct: RecommendProductRedux,
    productDetail: productDetailSlice.reducer
})
//使用中间件时 只需要将他作为applyMiddleware的第二个参数传入就好了
const store = createStore(rootRedux, applyMiddleware(thunk, actionLog))
export type RootState = ReturnType<typeof store.getState>
export default store;