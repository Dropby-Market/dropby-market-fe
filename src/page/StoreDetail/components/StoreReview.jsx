import React from "react";
import { useNavigate } from "react-router-dom";

import Star from "@/assets/storeDetail/StarIcon.svg?react";

const StoreReview = ({ name, profile, star, image, date, description }) => {
    const navigate = useNavigate();
    const stars = Array.from({length: star})

    return (
        <article>
            <div className="flex justify-between">
                <div className="flex">
                    <img src={profile} alt={name}
                        className="rounded-full w-10 h-10 mr-1.5" />
                        <div>
                            <p className="text-[#1F2937] text-sm leading-5 font-semibold">{name}</p>
                            <div className="flex">
                                {stars.map((_, i) => (
                                    <Star key={i} className="w-4 h-4" />
                                ))}
                            </div>
                        </div>
                </div>
 
                <div>
                    <p className="text-[#6B7280] text-xs leading-4 font-semibold">{date}</p>
                    <button className="text-[#9CA3AF] text-xs leading-4 font-medium cursor-pointer">신고하기</button>
                </div>
            </div>

            {Array.isArray(image) && image.length > 0 && (
                <div className="flex gap-2.5 overflow-x-auto mt-4 hide-scrollbar">
                    {image.map((img, idx) => (
                        <img
                        key = {idx}
                        src = {img}
                        alt = {`review-${idx}`}
                        className="w-30 h-30 rounded-md" />
                    ))}
                </div>
            )}

            <p className="text-[#1F2937] mt-4 text-sm leading-5 font-medium">{description}</p>

            <div className="my-3.5 border border-[#F3F4F6] w-full h-[1.5px]" />

        </article>
    )
}

export default StoreReview;