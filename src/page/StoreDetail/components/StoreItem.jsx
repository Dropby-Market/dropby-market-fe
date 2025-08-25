import React from "react";
import { Link, useNavigate } from "react-router-dom";

const StoreItem = ({ storeId, menuId, name, price, image }) => {
    const navigate = useNavigate();

    return (
        <Link to={`/store/${storeId}/${menuId}`}>
        <div className="flex justify-between cursor-pointer border-b-[1.5px] border-[#F3F4F6] py-3.5">
            
                <div>
                    <div className="text-base leading-6 font-semibold text-[#1F2937] pb-2">{name}</div>
                    <div className="text-base leading-6 font-semibold text-[#1F2937]">{price.toLocaleString()}원</div>
                </div>
                {image && (
                    <img
                    src={image}
                    alt={name}
                    className="w-19 h-19 rounded-md"
                    />
                )}
            
            </div>
        </Link>
    )
}

export default StoreItem;