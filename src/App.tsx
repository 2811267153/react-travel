/** @format */

import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {DetailPage, HomePage, RegisterPage, SignInPage, SearchPage, ShoppingCart} from './pages';
import "./App.css"
import {useAppDispatch, useSelector} from "./store/hooks";
import {getShoppingCart} from "./store/productShoppingCart/slice";

//创建私有路由
const PrivateRoute = ({children}) => {
 const  jwt =  useSelector(state => state.user.token)
    return jwt ? children : <Navigate to='/singIn'></Navigate>
}

const App: React.FC = (props) => {
    const jwt = useSelector(state => state.user.token)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     if(jwt) {
    //         dispatch(getShoppingCart(jwt))
    //     }
    // }, [dispatch, jwt])
    return (
        <div className="app">
            <Routes>
                <Route path="/singIn" element={<SignInPage/>}/>
                <Route path="/detail/:touristRouteId" element={<DetailPage />}/>
                <Route  path="/" element={<HomePage />}/>
                <Route  path="/register" element={<RegisterPage />}/>
                <Route path="/search/" element={<SearchPage />}>
                    <Route path=':keywords' element={<SearchPage />}></Route>
                        <Route path='' element={<SearchPage />}></Route>
                    </Route>
                <Route path='/shoppingCart' element={<PrivateRoute>
                    <ShoppingCart></ShoppingCart>
                </PrivateRoute>}></Route>
                <Route path='*' element={<h1>页面不存在</h1>}></Route>
            </Routes>
        </div>
    );
};

export default App;


