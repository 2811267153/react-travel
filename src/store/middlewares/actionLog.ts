//引入redux中间件 Middleware
import {Middleware} from "redux";

export const actionLog: Middleware = (store) => (next) => (action) => {
    // console.log(store.getState())
    // console.log(action)
    next(action)
    //store更新后的state数据
    // console.log(store.getState())

}