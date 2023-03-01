import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Destinations from "../Pages/Destinations/Destinations";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop";
import Tours from "../Pages/Tours/Tours";

export const routes = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/destinations',
            element: <Destinations></Destinations>
        },
        {
            path: '/tours',
            element: <Tours></Tours>
        },
        {
            path: '/shop',
            element: <Shop></Shop>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '*',
            element: <div>Data Not Found</div>
        }
    ]
   }
]);