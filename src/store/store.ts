import {createStore, combineReducers, applyMiddleware} from "redux"
import languagRedux from "./language/languagRedux";
import RecommendProductRedux from "./recommendProduct/recommendProductRedux";
import thunk from "redux-thunk";

//讲languagRedux和RecommendProductRedux集体暴露出去
const rootRedux =  combineReducers({
    language: languagRedux,
    recommendProduct: RecommendProductRedux
})
const store = createStore(rootRedux, applyMiddleware(thunk))
export type RootState = ReturnType <typeof store.getState>
export default store;