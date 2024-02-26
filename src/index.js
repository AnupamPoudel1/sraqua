import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import CategoryProducts from './pages/CategoryProducts';
import LoginPage from './pages/admin/LoginPage';
import AdminPannel from './pages/admin/AdminPannel';
import { AuthProvider } from './context/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'sraqua',
        element: <Home />
      },
      {
        path: '',
        element: <Home />
      },
      {
        path: 'shop/',
        element: <ProductsPage />
      },
      {
        path: 'shop/:pCategory',
        element: <CategoryProducts />
      },
      {
        path: 'admin-login',
        element: <LoginPage />
      },
      {
        path: 'admin-pannel',
        element: <AdminPannel />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
