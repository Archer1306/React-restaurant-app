import {LOGO_URL} from "../utils/constant";
import {useState} from "react";
import{Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const onlineStatus=useOnlineStatus();

    const[btnLogIn,setbtnLogIn]=useState("Login");
    return (
        <div className="flex justify-between bg-orange-100 shadow-lg">
            <div className="logo-cantainer">
                <img className="w-25 p-4" src={LOGO_URL}/>

            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 "  >
                    <li className="px-4"> Status:{onlineStatus?"✅":"🔴"}  </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="btn-login" onClick={() => { 
                        btnLogIn==="Login" ? setbtnLogIn("Logout"):
                        setbtnLogIn("Login")}}>
                            {btnLogIn}</button>
                </ul>
            </div>
        </div>

    )
};

export default Header;