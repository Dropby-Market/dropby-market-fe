import React from 'react';
import { useParams } from 'react-router-dom';

import Example from "@/assets/storeDetail/Example.png";
import SavedIcon from "@/assets/storeDetail/SavedIcon.svg?react";
import StarIcon from "@/assets/storeDetail/StarIcon.svg?react";
import Horizon from "@/assets/storeDetail/Horizon.svg?react";
import SaveButton from "./components/SaveButton"

const StoreDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="min-h-screen mx-4">
      {/*상단 이미지 UI*/}
      <div className = "relative -mx-4">
        <img src={Example} alt="예시이미지" className="w-full"/>
      </div>

      {/*가게 이름, 별점, 설명 UI*/}
      <header className="py-5">
        <div className="flex gap-1 text-xs leading-4 font-medium text-[#9CA3AF]">
          <span>천안중앙시장</span>
          <span className="text-[#E5E7EB]">|</span>
          <span>과일전문</span>
        </div>

        <div className="flex justify-between">
          <h1 className="text-2xl leading-8 font-semibold">못난이 사과</h1>
          <SaveButton />
        </div>

        <div className="flex items-center gap-1 py-2 text-sm leading-5 font-medium">
          <StarIcon className="w-4"/>
          <span className="text-[#374151]">4.2</span>
          <span className="text-[#6B7280]">(48)</span>
        </div>

        <p className="text-xs leading-4 font-medium text-[#6B7280]">못생겨도 맛은 진심인 사과</p>
      </header>

      {/*구분선*/}
      <Horizon className="w-full h-1 mx-auto"/>
    </div>
  );
};

export default StoreDetail;