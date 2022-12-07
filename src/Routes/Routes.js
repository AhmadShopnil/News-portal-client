import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import SignUp from "../Pages/SignUp/SignUp";
import TremsConditions from "../Pages/TremsAndConditions/TremsConditions";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://news-portal-server-omega.vercel.app/news`)

            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`https://news-portal-server-omega.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://news-portal-server-omega.vercel.app/news/${params.id}`)
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
                path: '/trems',
                element: <TremsConditions></TremsConditions>
            }
        ]
    }
])