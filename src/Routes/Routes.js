import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Destinations from "../Pages/Destinations/Destinations";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop";
import Tours from "../Pages/Tours/Tours";
import PrivateRoute from "./PrivateRoute";

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
            element: <About></About>,
            loader: ()=> fetch('http://localhost:5000/recommendedTours')
        },
        {
            path: '/destinations',
            element: <PrivateRoute><Destinations></Destinations></PrivateRoute>
        },
        {
            path: '/tours',
            element: <PrivateRoute><Tours></Tours></PrivateRoute>,
            loader: ()=> fetch('http://localhost:5000/alltours')
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