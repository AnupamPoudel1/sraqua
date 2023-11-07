import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import CategoryProducts from './components/CategoryProducts';

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
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
