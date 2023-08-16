import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Erro404 from './pages/404'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    errorElement: <Erro404 />,
    children: [
      {path: "/", element: <Home />},
      {path:"about", element: <About />}
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
