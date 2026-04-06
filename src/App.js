import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import RestrauntMenu from "./component/RestrauntMenu";
import Error from "./component/Error";


import {createBrowserRouter,RouterProvider,Outlet} from "react-router";

const root=ReactDOM.createRoot(document.getElementById("root"));


const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>

    )
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
    {
        path:"/",
        element:<Body/>,
    },
    {
        path:"/about",
        element:<About/>,
    },
    {

      path:"/contact",
      element:<Contact/>,
    },
    {
        path:"/restraunt/:resId",
        element:<RestrauntMenu/>,   

    }
        ],
    errorElement:<Error/>
       
    },
    

]);




root.render(
    <RouterProvider router={appRouter} />
);



