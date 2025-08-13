import React from 'react';
import { useParams } from 'react-router-dom';

// 이미지랑 아이콘 불러오기
import Example from "@/assets/storeDetail/Example.png";
import StarIcon from "@/assets/storeDetail/StarIcon.svg?react";
import Horizon from "@/assets/storeDetail/Horizon.svg?react";
import TimeIcon from "@/assets/storeDetail/TimeIcon.svg?react";
import SpotIcon from "@/assets/storeDetail/SpotIcon.svg?react";
import NumIcon from "@/assets/storeDetail/NumIcon.svg?react";

// componets
import SaveButton from "./components/SaveButton"
import NumCopyButton from "./components/NumCopyButton"

const StoreDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="min-h-screen mx-4">
      {/*상단 이미지 UI*/}
      <div className = "relative -mx-4">
        <img src={Example} alt="예시이미지" className="w-full"/>
      </div>

      {/*가게 이름, 별점, 설명*/}
      <header className="py-5">
        <div className="flex gap-1 text-xs leading-4 font-medium text-[#9CA3AF]">
          <span>천안중앙시장</span>
          <span className="text-[#E5E7EB]">|</span>
          <span>과일전문</span>
        </div>

        <div className="flex justify-between">
          <h1 className="text-2xl leading-8 font-semibold">못난이 사과</h1>
          {/* 저장 안되는 저장버튼(구현되면 지우기) */}
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

      {/* 간단설명 */}
      <nav className="py-5">
        <dl>
          <div className="flex items-center">
            <TimeIcon className="w-4 h-4" />
            <dt className="pl-1.5 pr-5 text-xs leading-4 font-medium text-[#374151]">소요시간</dt>
            <dd className="text-xs leading-4 font-medium text-[#374151]">0~5분</dd>
          </div>

          <div className="flex py-5 items-top">
            <SpotIcon className="w-4 h-4"/>
            <dt className="pl-1.5 pr-5 text-xs leading-4 font-medium text-[#374151]">위치정보</dt>
            <div className="block max-w-64.25">
              <dd className="text-xs leading-4 font-medium text-[#374151]">현재 위치에서 208m</dd>
              <dd className="text-xs leading-4 font-medium text-[#6B7280]">충남 천안시 동남구 사직로 32 (충남 천안시 동남구 사직동 29-1)</dd>
            </div>
          </div>
          <div className="flex">
          <NumIcon />
            <dt className="pl-1.5 pr-5 text-xs leading-4 font-medium text-[#374151]">전화번호</dt>
            <dd className="text-xs leading-4 font-medium text-[#374151]">010-1234-4567</dd>
            {/* 복사안되는 복사버튼(구현되면지우기) */}
            <NumCopyButton />
          </div>
        </dl>
      </nav>
    </div>
  );
};

export default StoreDetail;