import {createStore, combineReducers, applyMiddleware} from "redux"
import languagRedux from "./language/languagRedux";
import RecommendProductRedux from "./recommendProduct/recommendProductRedux";
import thunk from "redux-thunk";
import {actionLog} from "./middlewares/actionLog";

//讲languagRedux和RecommendProductRedux集体暴露出去
const rootRedux =  combineReducers({
    language: languagRedux,
    recommendProduct: RecommendProductRedux
})
//使用中间件时 只需要将他作为applyMiddleware的第二个参数传入就好了
const store = createStore(rootRedux, applyMiddleware(thunk, actionLog))
export type RootState = ReturnType <typeof store.getState>
export default store;