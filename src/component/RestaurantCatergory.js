import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data ,showItems, setShowIndex }) => {
  

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="border-b border-gray-100 last:border-none">
      
      {/* Header */}
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-between px-1 py-4 text-left hover:bg-gray-50 transition-colors duration-150 rounded-md"
      >
        <div className="flex items-center gap-3">
          <span className="text-[15px] font-semibold text-gray-900">
            {data.title}
          </span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
            {data.itemCards.length}
          </span>
        </div>

        {/* Animated chevron */}
        <span
          className={`text-gray-400 transition-transform duration-250 ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Collapsible body */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          showItems ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4">
          <ItemList items={data.itemCards} />
        </div>
      </div>

    </div>
  );
};

export default RestaurantCategory;