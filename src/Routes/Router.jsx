import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/Register',
                Component: Register
            }
        ]
    }
])