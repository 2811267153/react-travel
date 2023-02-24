//定义三个类型存储状态

import {createSlice} from "@reduxjs/toolkit";
import {stat} from "fs";

interface ProductDetailState {
    loading: boolean,
    error: string | null,
    data: any
}
//定义初始化数据
const initialState: ProductDetailState = {
    loading: true,
    error: null,
    data: null
}

//
export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        //定义初始化时的数据
        fetchStart: (state) =>{
            state.loading = true
        },
        //定义接口成功时的数据
        fetchSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        //定义接口失败时的数据
        fetchFail: (state, action) => {
            const ddd = action.payload
            state.loading = false
            state.error = ddd
        }
    }
})