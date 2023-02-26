//定义三个类型存储状态

import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
    loading: boolean,
    error: string | null,
    token: string | null
}

//定义初始化数据
const initialState: UserState = {
    loading: false,
    error: null,
    token: null
}
//使用createAsyncThunk创建新数据
export const signIn = createAsyncThunk(
    "user/signIn",
    async (paramaters: {
        email: string,
        password: string
    }, thunkAPI) => {

        //使用createAsyncThunk自动生成的 pending fulfilled rejected
        const {data} = await axios.post(`http://123.56.149.216:8080/auth/login`, {
            email: paramaters.email,
            password: paramaters.password
        })
        return data.token
    }
)

//
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: {
        //使用使用createAsyncThunk自动生成的reducers时 要是有extraReducers, 并对对象进行重命名
        //如果使用的时ts代码 要给名称后面加上 .type 字段
        //定义初始化时的数据
        [signIn.pending.type]: (state) => {
            state.loading = true
        },
        //定义接口成功时的数据
        [signIn.fulfilled.type]: (state, action) => {
            state.token = action.payload
            console.log(" action.payload",  action.payload)
            state.loading = false

            state.error = null
        },
        //定义接口失败时的数据
        [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
            const ddd = action.payload
            state.loading = false
            state.error = ddd
        }
    }
})