import Tag from '@/shared/ui/Tag.tsx';
import ExampleImage from "@/assets/storeDetail/Example.png"
import StarIcon from '@/assets/ui/StarIcon.svg?react';
import BookmarkIcon from '@/assets/ui/BookmarkIcon.svg?react';
import type { StoreDetail } from '@/page/Market/types.ts';
import { useNavigate } from 'react-router-dom';
import { buildPath } from '@/shared/constant/routes.ts';

interface StoreItemProps {
  store: StoreDetail;
}

export default function StoreItem({ store }: StoreItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(buildPath.storeDetail(store.storeId.toString()));
  };

  return (
    <li className="flex cursor-pointer" onClick={handleClick}>
      <div className="h-[100px] w-[100px] shrink-0">
        <img
          src={ExampleImage}
          alt={'가게 이미지'}
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </div>

      <div className="mx-4 flex-1 space-y-2 overflow-hidden">
        <div className="space-y-0.5">
          <div className="flex items-center gap-0.5">
            <h5 className="truncate text-base font-semibold leading-6">{store.name}</h5>
            <h6 className="shrink-0 text-xs font-medium leading-4 text-gray-400">
              {store.category}
            </h6>
          </div>
          <p className="truncate text-xs font-semibold leading-4 text-red-400">
            {store.description}
          </p>
        </div>

        <div className="flex items-center text-xs font-medium leading-4">
          <StarIcon />
          <span className="text-gray-500">{store.rating}</span>
          <span className="text-gray-400">(999+)</span>
          <span className="text-gray-500">· 도보 1분</span>
        </div>

        <div className="space-x-0.5">
          <Tag variant="green">영업중</Tag>
          <span className="text-xs font-medium leading-4 text-gray-500">{store.openingHours}</span>
        </div>
      </div>
    </li>
  );
}
