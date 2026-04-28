import { useState } from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice"; // ✅ import removeItem

const ItemCard = ({ item }) => {
  const [count, setCount] = useState(0);
  const info = item.card.info;
  const price = (info.price || info.defaultPrice) / 100;
  const isVeg = info.itemAttribute?.vegClassifier === "VEG";
  const dispatch = useDispatch();

  const handleAdd = () => {
    setCount(1);
    dispatch(addItem(item)); // ✅ dispatch real item info
  };

  const handleIncrement = () => {
    setCount((c) => c + 1);
    dispatch(addItem(item)); // ✅ each + adds to cart
  };

  const handleDecrement = () => {
    const newCount = Math.max(0, count - 1);
    setCount(newCount);
    if (newCount !==-1);{

    
      dispatch(removeItem(item.card.info.id)); // ✅ remove when count hits 0
    }
  };

  return (
    <div className="flex items-center gap-5 py-4 border-b border-gray-100 last:border-none">
      {/* Image */}
      <div className="relative flex-shrink-0">
        <img
          src={info.imageId ? CDN_URL + info.imageId : "/placeholder-food.png"}
          alt={info.name}
          className="w-24 h-24 object-cover rounded-xl"
        />
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0">
        {/* Name row */}
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`inline-flex items-center justify-center w-3 h-3 rounded-sm border flex-shrink-0 ${
              isVeg ? "border-green-600" : "border-orange-600"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isVeg ? "bg-green-600" : "bg-orange-500"
              }`}
            />
          </span>

          <p className="font-semibold text-sm text-gray-900 truncate font-serif">
            {info.name}
          </p>

          {info.isBestseller && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium tracking-wide flex-shrink-0">
              bestseller
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-3">
          {info.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-800">
            <span className="text-[10px] font-normal text-gray-400 mr-0.5">₹</span>
            {price}
          </p>

          {count === 0 ? (
            <button
              onClick={handleAdd} // ✅ updated
              className="text-xs font-semibold tracking-widest text-green-700 border border-gray-200 rounded-full px-4 py-1.5 hover:bg-green-50 transition-colors"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center gap-0 border border-green-600 rounded-full overflow-hidden">
              <button
                onClick={handleDecrement} // ✅ updated
                className="px-3 py-1 text-base text-gray-700 hover:bg-gray-50 transition-colors"
              >
                −
              </button>
              <span className="text-sm font-semibold w-5 text-center text-gray-900">
                {count}
              </span>
              <button
                onClick={handleIncrement} // ✅ updated
                className="px-3 py-1 text-base text-gray-700 hover:bg-gray-50 transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemList;