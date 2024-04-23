import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import BasePage from './pages/BasePage';

type RouterType = React.ComponentType;

const AppRoutes: RouterType = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Page404/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
