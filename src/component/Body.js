import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router";




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



    return ListOfRestraunt.length===0 ? (
    <Shimmer/>
) : (
        <div className="body">
            <div className="filter">
                <input type="text" placeholder="Search" className="search-input" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />

                <button className="search-btn" onClick={()=>{
                    let data=ListOfRestraunt.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestraunt(data);
                }}>
                    Search
                </button>
                
                <button className="filter-btn" 
                onClick={()=>{
                    let data=ListOfRestraunt.filter((res)=>res.info.avgRating>4
                );
                setFilteredRestraunt(data);
                }}
                    >
                FILTER

                </button>
            </div>

            <div className="res-container">
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