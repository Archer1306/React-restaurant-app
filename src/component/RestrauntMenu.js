
import Shimmer from "./Shimmer";    
import { useParams } from "react-router";
import useRestrauntMenu from "../utils/userestrauntMenu";
import RestaurantCatergory from "./RestaurantCatergory";
import{useState} from "react";



const RestrauntMenu=()=>{

  const [showIndex, setShowIndex] = useState(null);

    const{resId}=useParams();

    const resInfo=useRestrauntMenu(resId)

  


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

const categories = resInfo?.cards
  ?.find(c => c?.groupedCard)
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards
  ?.filter(item => 
    item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );


// 3. Destructure safely using fallback empty objects
const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

// 4. Handle the case where itemCards might still be missing
const menuItems = itemCards || [];



  return (
  <div className="max-w-3xl mx-auto py-6 px-4 w-full">
    
    {/* Restaurant Info */}
    <div className="mb-6 text-center">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-gray-500 text-sm">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <hr className="mt-4 border-gray-200" />
    </div>

    {/* Menu heading */}
    <h2 className="text-xl font-semibold mb-3 text-gray-700 text-center" >Menu</h2>
    

    {/* Categories */}
    
      {categories.map((category,index) => (
        <RestaurantCatergory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index===showIndex?true:false}
          setShowIndex={()=>setShowIndex(() => setShowIndex(index === showIndex ? null : index))}
        />
      ))}
   

  </div>
);
    
};

export default RestrauntMenu;   