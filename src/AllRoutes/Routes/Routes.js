import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../AllPages/Home/Home";
import Courses from "../../AllPages/Courses/Courses";
import Blog from "../../AllPages/Blog/Blog";
import FAQ from "../../AllPages/FAQ/FAQ";
import Login from "../../AllPages/Login/Login";
import Register from "../../AllPages/Register/Register";


export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children :[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/Courses',
                element: <Courses></Courses>
            },
            {
                path:'/Blog',
                element: <Blog></Blog>
            },
            {
                path:'/FAQ',
                element: <FAQ></FAQ>
            },
            {
                path:'/Login',
                element: <Login></Login>
            },
            {
                path:'/Register',
                element: <Register></Register>
            }

        ]
    }
]);