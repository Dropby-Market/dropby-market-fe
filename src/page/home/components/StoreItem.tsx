import Tag from '@/shared/ui/Tag.tsx';
import TestImg from '@/assets/home/TestImg.png';
import StarIcon from '@/assets/home/StarIcon.svg?react';
import BookmarkIcon from '@/assets/home/BookmarkIcon.svg?react';

// api 명세 확인 후 props 설정
export default function StoreItem() {
  return (
    <li className="flex">
      <div className="h-[100px] w-[100px] shrink-0">
        <img
          src={TestImg}
          alt={'가게 이미지'}
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </div>

      <div className="mx-4 flex-1 space-y-2 overflow-hidden">
        <div className="space-y-0.5">
          <div className="flex items-center gap-0.5">
            <h5 className="truncate text-base font-semibold leading-6">천안옛날</h5>
            <h6 className="shrink-0 text-xs font-medium leading-4 text-gray-400">과일전문</h6>
          </div>
          <p className="truncate text-xs font-semibold leading-4 text-red-400">
            천안 빵소로 선정된
          </p>
        </div>

        <div className="flex items-center text-xs font-medium leading-4">
          <StarIcon />
          <span className="text-gray-500">4.8</span>
          <span className="text-gray-400">(999+)</span>
          <span className="text-gray-500">· 도보 1분</span>
        </div>

        <div className="space-x-0.5">
          <Tag variant="green">영업중</Tag>
          <span className="text-xs font-medium leading-4 text-gray-500">07:00 ~ 18:00</span>
        </div>
      </div>
      <BookmarkIcon className="shrink-0" />
    </li>
  );
}
