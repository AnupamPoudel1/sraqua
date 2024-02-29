import React from 'react'
import Layout from './Layout';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import CategoryProducts from './pages/CategoryProducts';
import LoginPage from './pages/admin/LoginPage';
import AdminPannel from './pages/admin/AdminPannel';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {/* Public routes */}
                <Route path='/' element={<Home />} />
                <Route path='/sraqua' element={<Home />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='shop' element={<ProductsPage />} />
                <Route path='shop/:pCategory' element={<CategoryProducts />} />

                {/* Protected routes */}
                <Route element={<RequireAuth />}>
                    <Route path='admin-pannel' element={<AdminPannel />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App


