import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import RestrauntMenu from "./component/RestrauntMenu";
import Error from "./component/Error";
import {useState,useEffect} from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";

import {createBrowserRouter,RouterProvider,Outlet} from "react-router";

const root=ReactDOM.createRoot(document.getElementById("root"));


const AppLayout=()=>{

    const [userName,setUserName]=useState();

    useEffect(()=>{
        const data={
            name:"",
        }
        setUserName(data.name);

    },[] )
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider> 
        </Provider>

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

    },
    {
        path:"/cart",
        element:<Cart/>,
    }
        ],
    errorElement:<Error/>
       
    },
    

]);




root.render(
    <RouterProvider router={appRouter} />
);



