import {CDN_URL} from "../utils/constant";


const RestrauntCard=(props)=>{

    const{ resData }=props;

    

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info;
    const{deliveryTime}=resData?.info?.sla;
    return(
        <div data-testid="resCard" className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:shadow-lg transition-all h-[380px] flex flex-col">
  <img 
    className="rounded-lg aspect-video object-cover" 
    src={CDN_URL + cloudinaryImageId} 
  />
 
  <div className="flex flex-col flex-grow justify-between py-2">
    <div>
      <h3 className="font-bold text-lg truncate">{name}</h3>
      <h4 className="text-gray-500 text-sm line-clamp-2">{cuisines.join(", ")}</h4>
    </div>
    
    <div className="mt-auto">
      <h4 className="font-medium">{avgRating} stars</h4>
      <h4 className="text-gray-600">{deliveryTime} mins</h4>
      <h4 className="text-gray-600">{costForTwo}</h4>
    </div>
  </div>
</div>
    )
};

export const withPromotedLabel=(RestrauntCard)=>{
  return(resData)=>{
    return(
      <div>
        <label className="bg-red-500 text-white px-2 py-1 rounded absolute m-4" >
          <h2>promoted</h2>
        </label>
        <RestrauntCard {...resData}/>
      </div>
    )

  };
};

export default RestrauntCard;