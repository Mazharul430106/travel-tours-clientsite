import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AboutGallery from "../Pages/About/AboutGallery/AboutGallery";
import AboutInformation from "../Pages/About/AboutInformation/AboutInformation";
import AboutLocation from "../Pages/About/AboutLocation/AboutLocation";
import AboutReviews from "../Pages/About/AboutReviews/AboutReviews";
import AboutTourPlan from "../Pages/About/AboutTourPlan/AboutTourPlan";
import RecommendedCheckoutPage from "../Pages/About/RecommendedCheckoutPage/RecommendedCheckoutPage";
import Destinations from "../Pages/Destinations/Destinations";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop";
import CheckOutAllTours from "../Pages/Tours/CheckOutAllTours/CheckOutAllTours";
import PriceAllPage from "../Pages/Tours/PriceAllPage/PriceAllPage";
import PriceHighToLowPage from "../Pages/Tours/PriceHighToLowPage/PriceHighToLowPage";
import PriceLowToHighPage from "../Pages/Tours/PriceLowToHighPage/PriceLowToHighPage";
import Tours from "../Pages/Tours/Tours";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
                loader: () => fetch('http://localhost:5000/recommendedTours')
            },
            {
                path: '/destinations',
                element: <PrivateRoute><Destinations></Destinations></PrivateRoute>
            },
            {
                path: '/tours',
                element: <PrivateRoute><Tours></Tours></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/alltours')
            },
            {
                path: '/checkOutAllTours',
                element: <CheckOutAllTours></CheckOutAllTours>,
                loader: ()=> fetch('http://localhost:5000/alltours'),
                children:[
                    {
                        path:'/checkOutAllTours//',
                        element: <PriceLowToHighPage></PriceLowToHighPage>
                    },
                    {
                        path: '/checkOutAllTours/priceHighToLow',
                        element: <PriceHighToLowPage></PriceHighToLowPage>
                    },
                    {
                        path: '/checkOutAllTours/allPricePage',
                        element: <PriceAllPage></PriceAllPage>
                    }
                ]
                
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
                path: '/recommendedCheckoutPage/:id',
                element: <PrivateRoute><RecommendedCheckoutPage></RecommendedCheckoutPage></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/recommendedTours/${params.id}`),
                children: [
                    {
                        path: `/recommendedCheckoutPage/:id/`,
                        element: <AboutInformation></AboutInformation>,
                        loader: ({ params }) => fetch(`http://localhost:5000/recommendedTours/${params.id}`),
                    },
                    {
                        path: '/recommendedCheckoutPage/:id/tourplan',
                        element: <AboutTourPlan></AboutTourPlan>
                    },
                    {
                        path: '/recommendedCheckoutPage/:id/location',
                        element: <AboutLocation></AboutLocation>
                    },
                    {
                        path: '/recommendedCheckoutPage/:id/gallery',
                        element: <AboutGallery></AboutGallery>
                    },
                    {
                        path: '/recommendedCheckoutPage/:id/reviews',
                        element: <AboutReviews></AboutReviews>
                    }
                ]
            },
            {
                path: '*',
                element: <div>Data Not Found</div>
            }
        ]
    },

]);