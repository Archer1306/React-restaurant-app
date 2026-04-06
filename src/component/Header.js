import {LOGO_URL} from "../utils/constant";
import {useState} from "react";
import{Link} from "react-router";

const Header=()=>{

    const[btnLogIn,setbtnLogIn]=useState("Login");
    return (
        <div className="header">
            <div className="logo-cantainer">
                <img className="logo" src={LOGO_URL}/>

            </div>
            <div className="nav-item">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
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