import Search from '@/shared/ui/Search.tsx';
import FilterGroup from '@/shared/ui/FilterGroup.tsx';
import Separator from '@/shared/ui/Separator.tsx';
import LocationIcon from '@/assets/ui/LocationIcon.svg?react';
import MarketLocationIcon from '@/assets/ui/MarketLocationIcon.svg?react';
import MarketDetail from '@/page/Market/components/MarketDetail.tsx';

const MarketExplore = () => {
  return (
      <div className="space-y-4.5 px-4 pb-4">
        <div className="mt-1 flex justify-between text-sm font-medium leading-5">
          <h2>동남구 영성로</h2>
          <div className="flex items-center gap-1 text-sm font-medium leading-5 text-green-500">
            <LocationIcon />내 위치
          </div>
        </div>

        <Search />

        <div className="w-[calc(100%+1rem)]">
          <FilterGroup options={['전체', '근처', '인기']} />
        </div>

        <div>
          <div className="mb-2 flex items-center gap-0.5">
            <MarketLocationIcon />
            <div className="text-xs font-semibold leading-4 text-green-600">내가 선택한 시장</div>
          </div>
          <MarketDetail />
        </div>

        <Separator />

        <ul className="space-y-5">
          {Array.from({ length: 10 }).map((_, idx) => (
            <MarketDetail key={idx} />
          ))}
        </ul>
      </div>
  );
};

export default MarketExplore;
