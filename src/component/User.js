import  { useState } from "react";
const User=(props)=>{
    const {name,mail}=props;
    const[count,setCount]=useState("");
    const[count1]=useState("");
    const num=1;
    setCount(num);


    return(
        <div >
            <h1>User Profile Function</h1>
            <p>Name: {name}</p>
            <p>Email: {mail}</p>
            <p>Count: {count}</p>
            <p>Count1: {count1}</p>
         
        </div>
    

    )
};
export default User;