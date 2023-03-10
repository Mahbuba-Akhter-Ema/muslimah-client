import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import ReviewEdit from "../../Pages/ReviewEdit/ReviewEdit";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import SingleServiceCard from "../../Pages/SingleServiceCard/SingleServiceCard";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/allservices',
            element: <AllServices></AllServices>
        },
        {
            path: '/allservices/:id',
            element: <SingleServiceCard></SingleServiceCard>,
            loader: ({params}) => fetch(`https://muslimah-server.vercel.app/allService/${params.id}`)
        },
        {
            path:'/blog',
            element: <Blogs></Blogs>
        },
        {
            path: '/myreview',
            element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
        },
        {
            path: '/addservice',
            element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
        },
        {
            path: '/update/:id',
            element: <ReviewEdit></ReviewEdit>,
            loader: ({params}) => fetch(`https://muslimah-server.vercel.app/myreview/${params.id}`)
        }
        ]
    }
]);

export default router;
