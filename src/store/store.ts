import {createStore, applyMiddleware} from "redux"
import languagRedux from "./language/languagRedux";
import RecommendProductRedux from "./recommendProduct/recommendProductRedux";
import thunk from "redux-thunk";
import {actionLog} from "./middlewares/actionLog";
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {productDetailSlice} from "./productDetail/slice"
import {productSearchSlice} from "./produceSearch/slice";

//讲languagRedux和RecommendProductRedux集体暴露出去/
//因为 toolkit支持无缝间歇redux的 所以 我们现在使用的combineReducers和之前的 combineReducers不一样的
const rootRedux = combineReducers({
    language: languagRedux,
    recommendProduct: RecommendProductRedux,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer
})
//在使用configureStore时 要求传入两个参数{ reducer: rootRedux,}
const store = configureStore({
    reducer: rootRedux,
    devTools: true,
    middleware: ((getDefaultMiddleware) =>getDefaultMiddleware().concat(actionLog))
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;