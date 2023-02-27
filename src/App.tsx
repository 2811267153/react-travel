/** @format */

import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {DetailPage, HomePage, RegisterPage, SignInPage, SearchPage, ShoppingCart} from './pages';
import "./App.css"
import {useSelector} from "./store/hooks";

//创建私有路由
const PrivateRoute = ({children}) => {
 const  jwt =  useSelector(state => state.user.token)
    return jwt ? children : <Navigate to='/singIn'></Navigate>
}

const App: React.FC = (props) => {
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


