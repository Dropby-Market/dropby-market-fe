import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// 이미지랑 아이콘 불러오기
import Example from "@/assets/storeDetail/Example.png";
import StarIcon from "@/assets/storeDetail/StarIcon.svg?react";
import Horizon from "@/assets/storeDetail/Horizon.svg?react";
import TimeIcon from "@/assets/storeDetail/TimeIcon.svg?react";
import SpotIcon from "@/assets/storeDetail/SpotIcon.svg?react";
import PhoneIcon from "@/assets/storeDetail/PhoneIcon.svg?react";

// componets
import SaveButton from "./components/SaveButton";
import PhoneCopyButton from "./components/PhoneCopyButton";
import MapCopyBtn from "./components/MapCopyBtn";
import MapDetailBtn from "./components/MapDetailBtn";
import StoreItem from './components/StoreItem';
import StoreReview from './components/StoreReview';

const StoreDetail = () => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("메뉴");

  // 가게 정보객체
  const store = {
    id: 1,
    name: "못난이사과",
    category: "과일전문",
    market: "천안중앙시장",
    rating: 4.2,
    reviewCount: 48,
    description: "못생겨도 맛은 진심인 사과",
    time: "0~5",
    phone: "010-1234-5678",
    distance:"208m",
    address: "충남 천안시 동남구 사직로 32 (충남 천안시 동남구 사직동 29-1)",
  }

  // 상품 리스트
  const storeItem = [
      {id: 1, name: "못난이 포도 1봉지",price: 15000, image: Example},
      {id: 2, name: "못난이 참외 1봉지",price: 18000, image: ""}
    ]

  // 정보탭
  const storeInfo = {
    id: 1,
    hours: "매일 10:00 - 18:00",
    break: "주말, 공휴일",
    description: "상품성이 없어 납품하지 못해 버려지는 과일들을 판매하고 있습니다. 저희 가게 과일들의 울퉁불퉁한 매력을 인정하신다면, 맛 좋은 과일들을 많이 접해보실 수 있을 겁니다! (민생회복 소비쿠폰 사용 가능합니다. 현장 결제 선택 후 매장에서 말씀해주세요!)",
    pay: [
      {id: 1, name: "제로페이"},
      {id: 2, name: "민생회복 소비쿠폰"}
    ],
    entre: "이정현",
    num: "123-465-7894",
    origin: "사과(국내산) 샤인머스켓(국내산) 멜론(국내산,미국산) 포도(국내산) 참외(국내산) 단감(국내산)"
  }

  // 리뷰
  const review = {
    id: 1,
    count: 1234,
    post: [
    {id: 1,
      name: "먹고 또 먹고",
      profile: Example,
      star: 5,
      image: [Example, Example, Example,Example,Example],
      date: "2025.08.06",
      description: "못 보던 가게. 오늘 처음 가봤어요. 사장님 친절하시고 과일 상한 것 없이 맛이 좋았습니다."},
    {id: 2,
      name: "정현이",
      profile: "",
      star: 3,
      image: '',
      date: "2025.08.06",
      description: "맛있어요 좋아요"}
    ]
  }

  return (
    <div className="min-h-screen mx-4">
      {/*상단 이미지 UI*/}
      <div className = "relative -mx-4">
        <img src={Example} alt="예시이미지" className="w-full"/>
      </div>

      {/*가게 이름, 별점, 설명*/}
      <header className="py-5">
        <div className="flex gap-1 text-xs leading-4 font-medium text-[#9CA3AF]">
          <span>{store.market}</span>
          <span className="text-[#E5E7EB]">|</span>
          <span>{store.category}</span>
        </div>

        <div className="flex justify-between">
          <h1 className="text-2xl leading-8 font-semibold">{store.name}</h1>
          {/* 저장 안되는 저장버튼(구현되면 지우기) */}
          <SaveButton />
        </div>

        <div className="flex items-center gap-1 py-2 text-sm leading-5 font-medium">
          <StarIcon className="w-4"/>
          <span className="text-[#374151]">{store.rating}</span>
          <span className="text-[#6B7280]">({store.reviewCount})</span>
        </div>

        <p className="text-xs leading-4 font-medium text-[#6B7280]">{store.description}</p>
      </header>
      
      {/*구분선*/}
      <Horizon className="w-full h-1 mx-auto"/>

      {/* 가게정보 미리보기 */}
      <nav className="py-5">

        <table>
          <colgroup>
            <col className="w-4" />
            <col className="w-16" />
            <col className="w-[74%]" />
          </colgroup>

          <tbody>
            <tr className="items-center">
              <td><TimeIcon /></td>
              <td className="text-[#374151] text-xs leading-4 font-medium">소요시간</td>
              <td className="text-[#374151] text-xs leading-4 font-medium">{store.time}분</td>
            </tr>

            <tr className="align-top">
              <td className="py-3.5"><SpotIcon /></td>
              <td className="py-3.5 text-[#374151] text-xs leading-4 font-medium">위치정보</td>
              <td className="py-3.5" colSpan={2}>
                <div className="text-[#374151] text-xs leading-4 font-medium">현재 위치에서 {store.distance}</div>
                <div className="text-[#6B7280] text-xs leading-4 font-medium mt-2">{store.address}</div>
              </td>
            </tr>
            <tr>
              <td><PhoneIcon /></td>
              <td className="text-[#374151] text-xs leading-4 font-medium">전화번호</td>
              <td className="flex items-center gap-1 text-[#374151] text-xs leading-4 font-medium">
                {store.phone}
                <PhoneCopyButton />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-3.5 border-2 border-[#E5E7EB] rounded-md overflow-hidden">
          <div className="w-full h-16 bg-[#f3f5f8] justify-center">
            지도
          </div>
          <div className="flex w-full divide-x-2 divide-[#E5E7EB]">
            <MapCopyBtn/>
            <MapDetailBtn />
          </div>
        </div>
      </nav>

      <div className="-mx-4 h-[6px] bg-[#F3F4F6]" />

      {/* 탭 헤더 */}
      <div className="flex w-full">
        {["메뉴", "리뷰", "정보"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3.75  cursor-pointer ${
              activeTab === tab
                ? "border-b border-[#1F2937] text-[#1F2937] text-sm leading-5 font-medium justify-center"
                : "border-b border-[#E5E7EB] text-[#6B7280] text-sm leading-5 font-medium justify-center"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      <main>
        {/* 메뉴탭 */}
        {activeTab === "메뉴" && <>
        {storeItem.map((item)=>(
          <StoreItem key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}/>
        ))}
        </>
        }

        {/* 리뷰탭 */}
        {activeTab === "리뷰" && <>
        <div className="flex items-center gap-1 pt-5 pb-6">
          <h2 className="text-[#1F2937] text-lg leading-7 font-semibold">리뷰</h2>
          <p className="text-[#6B7280] text-lg leading-7 font-semibold">{review.count.toLocaleString()}개</p>
        </div>
        
        {review.post.map((post) => (
          <StoreReview
          key={post.id}
          name={post.name}
          profile={post.profile || Example}
          star={post.star}
          image={post.image}
          date={post.date}
          description={post.description} />
        ))}
        </>}

        {/* 정보탭 */}
        {activeTab === "정보" &&
          <div className="pt-16">
            <h2 className="text-[#1F2937] text-sm leading-5 font-semibold pb-3">가게 정보</h2>
            <table>
              <colgroup>
                <col className="w-16"/>
                <col/>
              </colgroup>

              <tr>
                <td className="text-[#1F2937] text-xs leading-4 font-medium">상호명</td>
                <td className="text-[#1F2937] text-xs leading-4 font-medium">{store.name}</td>
              </tr>

              <tr>
                <td className="py-3.5 text-[#1F2937] text-xs leading-4 font-medium">운영시간</td>
                <td className="py-3.5 text-[#1F2937] text-xs leading-4 font-medium">{storeInfo.hours}</td>
              </tr>

              <tr>
                <td className="text-[#1F2937] text-xs leading-4 font-medium">휴무일</td>
                <td className="text-[#1F2937] text-xs leading-4 font-medium">{storeInfo.break}</td>
              </tr>
            </table>
            
            <div className="my-3.5 border border-[#F3F4F6] w-full h-[1.5px]" />

            <h2 className="text-[#1F2937] text-sm leading-5 font-semibold pb-3">가게 소개</h2>
            <p className="text-[#1F2937] text-xs leading-4 font-medium">{storeInfo.description}</p>

            <div className="my-3.5 border border-[#F3F4F6] w-full h-[1.5px]" />

            <h2 className="text-[#1F2937] text-sm leading-5 font-semibold pb-3">결제 수단</h2>
            <ul className="flex gap-1">
            {storeInfo.pay.map((method) => (
              <li
              key={method.id}
              className="bg-[#EFF6FF] text-[#3B82F6] text-xs leading-4 font-medium rounded-md p-1">
              {method.name}
              </li>
            ))}
            </ul>

            <div className="my-3.5 border border-[#F3F4F6] w-full h-[1.5px]" />

            <h2 className="text-[#1F2937] text-sm leading-5 font-semibold pb-3">사업자 정보</h2>
            <table>
              <colgroup>
                <col className="w-17.5"/>
                <col/>
              </colgroup>

              <tbody>
                <tr>
                  <td className="text-[#1F2937] text-xs leading-4 font-medium">대표명</td>
                  <td className="text-[#1F2937] text-xs leading-4 font-medium">{storeInfo.entre}</td>
                </tr>

                <tr>
                  <td className="py-3.5 text-[#1F2937] text-xs leading-4 font-medium">상호명</td>
                  <td className="py-3.5 text-[#1F2937] text-xs leading-4 font-medium">{store.name}</td>
                </tr>

                <tr>
                  <td className="pb-3.5 text-[#1F2937] text-xs leading-4 font-medium">사업자주소</td>
                  <td className="pb-3.5 text-[#1F2937] text-xs leading-4 font-medium">{store.address}</td>
                </tr>

                <tr>
                  <td className="text-[#1F2937] text-xs leading-4 font-medium">사업자번호</td>
                  <td className="text-[#1F2937] text-xs leading-4 font-medium">{storeInfo.num}</td>
                </tr>
              </tbody>
            </table>

            <div className="my-3.5 border border-[#F3F4F6] w-full h-[1.5px]" />

            <h2 className="text-[#1F2937] text-sm leading-5 font-semibold pb-3">원산지 표기</h2>
            <p className="text-[#1F2937] text-xs leading-4 font-medium">{storeInfo.origin}</p>

            <div className="my-3.5 border border-[#F3F4F6] w-full h-[1.5px]" />
          </div>}
      </main>
    </div>
  );
};

export default StoreDetail;