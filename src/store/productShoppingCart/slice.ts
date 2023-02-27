//定义三个类型存储状态

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface ProductShoppingcardDetailState {
    loading: boolean,
    error: string | null,
    items: any[]
}

//定义初始化数据
const initialState: ProductShoppingcardDetailState = {
    loading: true,
    error: null,
    items: []
}
//使用createAsyncThunk创建新数据

//获取购物车列表函数
export const getShoppingCart = createAsyncThunk(
    "shoppingCard/getShoppingCart",
    async (jwt: string, thunkAPI) => {

        //使用createAsyncThunk自动生成的 pending fulfilled rejected
        const {data} = await axios.get(`http://123.56.149.216:8080/api/shoppingCart`, {
            headers: {
                Authorization: `bearer ${jwt}`
            }
        })
        return data.shoppingCardItems
    }
)

//添加购物车列表函数
export const addShoppingCart = createAsyncThunk(
    "shoppingCard/addShoppingCart",
    async (prameters: {
        jwt: string,
        touristRouteId: string
    }, thunkAPI) => {

        //使用createAsyncThunk自动生成的 pending fulfilled rejected
        const {data} = await axios.post(`http://123.56.149.216:8080/api/shoppingCart/items`,{
            touristRouteId: prameters.touristRouteId
        }, {
            headers: {
                Authorization: `bearer ${prameters.jwt}`
            }
        })
        return data.shoppingCardItems
    }
)

//删除购物车
export const clearShoppingCart = createAsyncThunk(
    "shoppingCard/clearShoppingCart",
    async (prameters: {
        jwt: string,
        itemsIds: number[]
    }, thunkAPI) => {

        //使用createAsyncThunk自动生成的 pending fulfilled rejected
        return  await axios.delete(`http://123.56.149.216:8080/api/shoppingCart/items/(${prameters.itemsIds.join(',')})`, {
            headers: {
                Authorization: `bearer ${prameters.jwt}`
            }
        })
    }
)

//
export const shoppingCardSlice = createSlice({
    name: 'shoppingCard',
    initialState,
    reducers: {
    },
    extraReducers: {
        //使用使用createAsyncThunk自动生成的reducers时 要是有extraReducers, 并对对象进行重命名
        //如果使用的时ts代码 要给名称后面加上 .type 字段
        //定义初始化时的数据
        [getShoppingCart.pending.type]: (state) => {
            state.loading = true
        },
        //定义接口成功时的数据
        [getShoppingCart.fulfilled.type]: (state, action) => {
            state.items = action.payload
            console.log(" action.payload",  action.payload)
            state.loading = false

            state.error = null
        },
        //定义接口失败时的数据
        [getShoppingCart.rejected.type]: (state, action) => {
            const ddd = action.payload
            state.loading = false
            state.error = ddd
        },

        [addShoppingCart.pending.type]: (state) => {
            state.loading = true
        },
        //定义接口成功时的数据
        [addShoppingCart.fulfilled.type]: (state, action) => {
            state.items = action.payload
            console.log(" action.payload",  action.payload)
            state.loading = false

            state.error = null
        },
        //定义接口失败时的数据
        [addShoppingCart.rejected.type]: (state, action) => {
            const ddd = action.payload
            state.loading = false
            state.error = ddd
        },

        [clearShoppingCart.pending.type]: (state) => {
            state.loading = true
        },
        //定义接口成功时的数据
        [clearShoppingCart.fulfilled.type]: (state) => {
            state.items = []
            state.loading = false

            state.error = null
        },
        //定义接口失败时的数据
        [clearShoppingCart.rejected.type]: (state, action) => {
            const ddd = action.payload
            state.loading = false
            state.error = ddd
        }
    }
})