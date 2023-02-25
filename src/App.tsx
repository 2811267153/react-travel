/** @format */

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {DetailPage, HomePage, RegisterPage, SignInPage, SearchPage} from './pages';
import "./App.css"

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
                <Route path='*' element={<h1>页面不存在</h1>}></Route>
            </Routes>
        </div>
    );
};

export default App;


