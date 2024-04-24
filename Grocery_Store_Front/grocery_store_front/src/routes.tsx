import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import BasePage from './pages/BasePage';
import Checkout from './pages/Checkout';
import { CartContextProvider } from './contexts/CartContext';

type RouterType = React.ComponentType;

const AppRoutes: RouterType = () => {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <Routes>
                    <Route path='/' element={<BasePage />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<Page404/>} />
                        <Route path="checkout" element={<Checkout/>} />
                    </Route>
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;
