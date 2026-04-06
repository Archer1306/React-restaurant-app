import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";    
import { useParams } from "react-router";
import {MENU_API} from "../utils/constant";



const RestrauntMenu=()=>{

    const{resId}=useParams();

    const[resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();    

    },[]);

    const fetchMenu=async()=>{

        const data=await fetch(MENU_API+resId);
        const json=await data.json();
      
        setResInfo(json?.data);




    } ;

   if(resInfo===null){
    return <Shimmer/>
   };
   
const restaurantInfo = resInfo?.cards?.find(
    (c) => c?.card?.card?.info
)?.card?.card?.info;

// 2. Find the card that contains the menu items (itemCards)
const itemCards = resInfo?.cards?.find(
    (c) => c?.groupedCard
)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
    (c) => c?.card?.card?.itemCards
)?.card?.card?.itemCards;

// 3. Destructure safely using fallback empty objects
const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

// 4. Handle the case where itemCards might still be missing
const menuItems = itemCards || [];



    return (
        <div className="menu">

        <h1>{name}</h1>
        <p>{cuisines?.join(" , ")}-{costForTwoMessage}</p>

        <h2>Menu</h2>

        <ul className="menu-list">
        {menuItems.map((item)=><li key={item?.card?.info?.id}>{item?.card?.info?.name}-{item?.card?.info?.price/100||item?.card?.info?.defaultPrice/100
}</li>)}
        </ul>

        </div>
    )
    
};

export default RestrauntMenu;   