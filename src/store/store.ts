import {createStore, applyMiddleware} from "redux"
import languagRedux from "./language/languagRedux";
import RecommendProductRedux from "./recommendProduct/recommendProductRedux";
import thunk from "redux-thunk";
import {actionLog} from "./middlewares/actionLog";
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {productDetailSlice} from "./productDetail/slice"
import {productSearchSlice} from "./produceSearch/slice";
import {userSlice} from "./user/slice"
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage";
import {shoppingCartSlice} from "./productShoppingCart/slice";
import {orderSilce} from "./order/slice";


//1.配置 redux-persist 信息
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
}
//讲languagRedux和RecommendProductRedux集体暴露出去/
//因为 toolkit支持无缝间歇redux的 所以 我们现在使用的combineReducers和之前的 combineReducers不一样的
const rootRedux = combineReducers({
    language: languagRedux,
    recommendProduct: RecommendProductRedux,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: userSlice.reducer,
    shoppingCard: shoppingCartSlice.reducer,
    order: orderSilce.reducer
})

//2.使用 persistReducer 创建一个新的 redcer
const persistedReducer = persistReducer(persistConfig, rootRedux)
//在使用configureStore时 要求传入两个参数{ reducer: rootRedux,}
const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: ((getDefaultMiddleware) => {
        return getDefaultMiddleware({serializableCheck: false,}).concat(actionLog)
    })
})
//3 使用 persistStore 创建一个新的持续化存储的store
const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
//在使用时 导出两个store
export default {store, persistor};