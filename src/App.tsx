/** @format */

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {DetailPage, HomePage, RegisterPage, SignInPage} from './pages';
import "./App.css"

const App: React.FC = (props) => {
    return (
        <div className="app">
            <Routes>
                <Route path="/singIn" element={<SignInPage/>}/>
                <Route path="/detail/:touristRouteId" element={<DetailPage />}/>
                <Route  path="/" element={<HomePage />}/>
                <Route  path="/register" element={<RegisterPage />}/>
                <Route path='*' element={<h1>页面不存在</h1>}></Route>
            </Routes>
        </div>
    );
};

export default App;


