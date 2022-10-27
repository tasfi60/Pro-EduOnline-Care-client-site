import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../AllPages/Home/Home";
import Courses from "../../AllPages/Courses/Courses";
import Blog from "../../AllPages/Blog/Blog";
import FAQ from "../../AllPages/FAQ/FAQ";
import Login from "../../AllPages/Login/Login";
import Register from "../../AllPages/Register/Register";
import Coursedetails from "../../AllPages/Coursedetails/Coursedetails";
import SingleCourseDetails from "../../AllPages/SingleCourseDetails/SingleCourseDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Checkout from "../../AllPages/Checkout/Checkout";


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
                path:'/courses',
                loader: () => fetch ('http://localhost:5000/courses'),
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
            },
            {
                path:'/courses/:id',
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/courses/${params.id}`)
                     
                },
                element: <SingleCourseDetails></SingleCourseDetails>
            },
            {
                path:'/checkout/:id',
                // loader: async ({params}) => {
                //     return fetch(`http://localhost:5000/courses/${params.id}`)
                     
                // },
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            }
        ]       
    },

    { path: '*',
    element: <div><h2 className='mt-5'>404 ! This route is not found</h2></div> 
   }
]);