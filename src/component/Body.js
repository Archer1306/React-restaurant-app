import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";




const Body=()=>{

    
    let [ListOfRestraunt ,setListOfRestraunt]= useState([]);

    let [filteredRestraunt, setFilteredRestraunt]=useState([]);

    let[searchText, setSearchText]=useState("");

    useEffect(()=>{
        fetchData();
        },
    []);

     const fetchData=async()=>{

        const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1485395&lng=80.2954263&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json =await data.json();


        setListOfRestraunt( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

       

};

const onlineStatus=useOnlineStatus();

if (onlineStatus ===  false) return <h1>You'r Offline</h1>



    return ListOfRestraunt.length===0 ? (
    <Shimmer/>
) : (
        <div className="body">
            <div className="filter flex items-center justify-center">
                <div className="search m-4 px-4 items-center justify-center ">
                <input type="text" placeholder="Search" className="search-input text-center w-62 p-1 border border-solid black rounded-md" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />

                <button className="search-btn m-4 px-4  items-center rounded-md  bg-orange-300" onClick={()=>{
                    let data=ListOfRestraunt.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestraunt(data);
                }}>
                    Search
                </button>
             </div>
             <div className="m-4 px-4 -ml-8 bg-gray-300 flex items-center justify-start gap-4 rounded-md">
                <button className="filter-btn  " 
                onClick={()=>{
                    let data=ListOfRestraunt.filter((res)=>res.info.avgRating>4
                );
                setFilteredRestraunt(data);
                }}
                    >
                FILTER

                </button>
            </div>  
           
            </div>

            <div className="res-container flex  flex-wrap justify-center gap-8 py-8 px-4">
                {filteredRestraunt.map((restaurant) => (
                    <Link to={"/restraunt/"+restaurant.info.id} key={restaurant.info.id}>
                        <RestrauntCard resData={restaurant} />
                    </Link>
                    
                ))}
            </div>
        </div>
    )
};

export default Body;