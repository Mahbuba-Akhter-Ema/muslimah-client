import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import SingleServiceCard from "../../Pages/SingleServiceCard/SingleServiceCard";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
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
            loader: ({params}) => fetch(`http://localhost:5000/allService/${params.id}`)
        },
        {
            path:'/blog',
            element: <Blogs></Blogs>
        }
        ]
    }
]);

export default router;
