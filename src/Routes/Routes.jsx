import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Orders from "../Pages/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:'/', 
          element: <Home></Home>
        }, 
        {
          path: '/login', 
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/service/:id', 
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
           loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/orders', 
          element: <Orders></Orders>
        }
      ]
    },
    
  ]);

  export default router;