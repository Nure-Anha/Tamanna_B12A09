import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root.jsx';
import Home from './Pages/Home.jsx';
import ToyDetails from './Pages/ToyDetails.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './AuthProvider.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true , Component: Home} ,
      {path:'toydetails/:id' , Component: ToyDetails} ,  // ":id" te  view more btn thk i.toyId dynamically ashe
      {path:'login' , Component: Login} , 
      {path:'register' , Component: Register} , 
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
