import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AboutGallery from "../Pages/About/AboutGallery/AboutGallery";
import AboutInformation from "../Pages/About/AboutInformation/AboutInformation";
import AboutLocation from "../Pages/About/AboutLocation/AboutLocation";
import AboutReviews from "../Pages/About/AboutReviews/AboutReviews";
import AboutTourPlan from "../Pages/About/AboutTourPlan/AboutTourPlan";
import RecommendedCheckoutPage from "../Pages/About/RecommendedCheckoutPage/RecommendedCheckoutPage";
import CheckOutPage from "../Pages/CheckOutPage/CheckOutPage";
import Destinations from "../Pages/Destinations/Destinations";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop";
// import AllToursPage from "../Pages/Tours/AllToursPage/AllToursPage";
import BoxesTours from "../Pages/Tours/BoxesTours/BoxesTours";
import CheckOutTours from "../Pages/Tours/CheckOutTours/CheckOutTours";
// import PriceHighToLowPage from "../Pages/Tours/PriceHighToLowPage/PriceHighToLowPage";
// import PriceLowToHighPage from "../Pages/Tours/PriceLowToHighPage/PriceLowToHighPage";
import StandardTours from "../Pages/Tours/StandardTours/StandardTours";
import ToursGallery from "../Pages/Tours/ToursGallery/ToursGallery";
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
                path: '/standardTours',
                element: <StandardTours></StandardTours>,
            },
            {
                path: '/boxesTours',
                element: <BoxesTours></BoxesTours>
            },
            {
                path: '/toursGallery',
                element: <ToursGallery></ToursGallery>
            },
            {
                path: '/checkoutTours',
                element: <CheckOutTours></CheckOutTours>
                
                // children: [
                //     {
                //         path: '/checkoutTours/priceLowToHigh',
                //         element: <PriceLowToHighPage></PriceLowToHighPage>,
                //         loader: ()=> fetch('http://localhost:5000/alltours')
                //     },
                //     {
                //         path: '/checkoutTours/priceHighToLow',
                //         element: <PriceHighToLowPage></PriceHighToLowPage>,
                //         loader: ()=> fetch('http://localhost:5000/alltours')
                //     },
                //     {
                //         path: '/checkoutTours/allPrice',
                //         element: <AllToursPage></AllToursPage>,
                //         loader: ()=> fetch('http://localhost:5000/alltours')
                //     }
                // ]

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
                path: '/checkoutPage/:id',
                element: <CheckOutPage></CheckOutPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/alltours/${params.id}`),
                children: [
                    {
                        path: '/checkoutPage/:id',
                        element: <AboutInformation></AboutInformation>,
                        loader: ({ params }) => fetch(`http://localhost:5000/alltours/${params.id}`),
                    },
                    {
                        path: '/checkoutPage/:id/tourplan',
                        element: <AboutTourPlan></AboutTourPlan>
                    },
                    {
                        path: '/checkoutPage/:id/location',
                        element: <AboutLocation></AboutLocation>
                    },
                    {
                        path: '/checkoutPage/:id/gallery',
                        element: <AboutGallery></AboutGallery>
                    },
                    {
                        path: '/checkoutPage/:id/reviews',
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