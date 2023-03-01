//定义三个类型存储状态

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {checkout} from "../productShoppingCart/slice";

interface OrderState {
    loading: boolean,
    error: string | null,
    currentOrder: any
}

//定义初始化数据
const initialState: OrderState = {
    loading: false,
    error: null,
    currentOrder: null
}
//使用createAsyncThunk创建新数据
export const placeOrder = createAsyncThunk(
    "order/placeOrder",
    async (paramreters: {
        jwt: string,
        orderId: string
    }, thunkAPI) => {

        //使用createAsyncThunk自动生成的 pending fulfilled rejected
        const {data} = await axios.post(`http://123.56.149.216:8080/api/orders/${paramreters.orderId}/placeOrder`, null, {
            headers: {
                Authorization: `bearer ${paramreters.jwt}`
            }
        })
        return data
    }
)

//
export const orderSilce = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        //使用使用createAsyncThunk自动生成的reducers时 要是有extraReducers, 并对对象进行重命名
        //如果使用的时ts代码 要给名称后面加上 .type 字段
        //定义初始化时的数据
        [placeOrder.pending.type]: (state) => {
            state.loading = true
        },
        //定义接口成功时的数据
        [placeOrder.fulfilled.type]: (state, action) => {
            state.currentOrder = action.payload
            console.log(" action.payload", action.payload)
            state.loading = false

            state.error = null
        },
        //定义接口失败时的数据
        [placeOrder.rejected.type]: (state, action) => {
            const ddd = action.payload
            state.loading = false
            state.error = ddd
        },
        [checkout.pending.type]: (state) => {
            state.loading = true
        },
        //定义接口成功时的数据
        [checkout.fulfilled.type]: (state, action) => {
            state.currentOrder = action.payload
            console.log(" action.payload", action.payload)
            state.loading = false

            state.error = null
        },
        //定义接口失败时的数据
        [checkout.rejected.type]: (state, action) => {
            const ddd = action.payload
            state.loading = false
            state.error = ddd
        }
    }
})