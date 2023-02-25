//定义三个类型存储状态

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

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
//使用createAsyncThunk创建新数据
export const getProductDetail = createAsyncThunk(
    "productDetail/getProductDetail",
    async (touristRouteId: string, thunkAPI) => {

        //使用createAsyncThunk自动生成的 pending fulfilled rejected
    const {data} = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`)
    return data
    }
)

//
export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
    },
    extraReducers: {
        //使用使用createAsyncThunk自动生成的reducers时 要是有extraReducers, 并对对象进行重命名
        //如果使用的时ts代码 要给名称后面加上 .type 字段
        //定义初始化时的数据
        [getProductDetail.pending.type]: (state) => {
            state.loading = true
        },
        //定义接口成功时的数据
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        //定义接口失败时的数据
        [getProductDetail.rejected.type]: (state, action) => {
            const ddd = action.payload
            state.loading = false
            state.error = ddd
        }
    }
})