import React, {useEffect} from "react";
import {Header, FilterArea, ProductList} from "../../components";
import {useLocation, useParams} from "react-router-dom";
import {useAppDispatch, useSelector} from "../../store/hooks";
import {searchProduct} from "../../store/produceSearch/slice";
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
//创建对应的传参类型
type MathParams = {
    keywords: string
}
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
export const SearchPage: React.FC = () => {
    const {keywords} = useParams<MathParams>();
//获取store里面的数据
    const loading = useSelector(state => state.productSearch.loading)
    const error = useSelector(state => state.productSearch.error)
    const pagination = useSelector(state => state.productSearch.pagination)
    const productList = useSelector(state => {
        console.log("state.productSearch.data", state.productSearch)
        return state.productSearch.data
    })
    //使用usedispatch 获取dispatch里面的函数
    const dispatch = useAppDispatch()
    //在react-router-dom中引入 useLocation, 使用useLocation获取Location中的数据
    const location = useLocation()
    //使用 useEffect 在第一个函数中传入表达式, 第二个参数传入 location 表示 在 location 变化时调用第一个函数
    useEffect(()=> {
        if(keywords) {
            dispatch(searchProduct({nextPage: 1, pageSize: 10, keywords}))
        }
    }, [keywords])
    const onPageChange = (nextPage, pageSize) => {
        if(keywords) {
            dispatch(searchProduct({nextPage, pageSize, keywords}))
        }
    }
    if (loading) {
        return (
            <Spin
                indicator={antIcon}
                size="large"
                style={{
                    marginTop: 400,
                    marginBottom: 400,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }
    if (error) {
        return <>网站出错: {error}</>
    }
    return (

        <>
            <Header></Header>
            <div className="w page-content">
                {/*分类过滤器*/}
                <div className="product-list-contents">
                    <FilterArea></FilterArea>
                </div>
                {/*//产品列表*/}
                <div className="product-list-contents">
                    <ProductList data={productList} paging={pagination} onPageChange={onPageChange}></ProductList>
                </div>
            </div>
        </>
    )
}