//定义三个类型存储状态

import {createAsyncThunk, PayloadAction, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSearchState {
    loading: boolean,
    error: string | null,
    data: any,
    pagination: any
}

//定义初始化数据
const initialState: ProductSearchState = {
    loading: true,
    error: null,
    data: null,
    pagination: null
}
//使用createAsyncThunk创建新数据
export const searchProduct = createAsyncThunk(
    "productSearch/searchProduct",
    async (paramaters: {
        keywords: string,
        nextPage: string | number,
        pageSize: string | number
    }, thunkAPI) => {
        let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`;
        if(paramaters.keywords) {
            url += `&keyword=${paramaters.keywords}`
        }
        //使用createAsyncThunk自动生成的 pending fulfilled rejected
        const response = await axios.get(url)
        console.log("response----", response.data)
        return {
            data: response.data,
            pagenation: JSON.parse(response.headers["x-pagenation"])
        }
    }
)

//
export const productSearchSlice = createSlice({
    name: 'productSearch',
    initialState,
    reducers: {},
    extraReducers: {
        //使用使用createAsyncThunk自动生成的reducers时 要是有extraReducers, 并对对象进行重命名
        //如果使用的时ts代码 要给名称后面加上 .type 字段
        //定义初始化时的数据
        [searchProduct.pending.type]: (state) => {
            state.loading = true
        },
        //定义接口成功时的数据
        [searchProduct.fulfilled.type]: (state, action) => {
            state.data = action.payload.data
            console.log("searchProduct.fulfilled.type",action.payload.data)
            state.pagination = action.payload.pagination
            state.loading = false
            state.error = null
        },
        //定义接口失败时的数据
        [searchProduct.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false
            state.error =  action.payload
        }
    }
})