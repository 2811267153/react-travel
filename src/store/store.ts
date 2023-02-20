import {createStore, combineReducers} from "redux"
import languagRedux from "./language/languagRedux";
import RecommendProductRedux from "./recommendProduct/recommendProductRedux";

//讲languagRedux和RecommendProductRedux集体暴露出去
const rootRedux =  combineReducers({
    language: languagRedux,
    recommendProduct: RecommendProductRedux
})

const store = createStore(rootRedux)
export type RootState = ReturnType <typeof store.getState>
export default store;