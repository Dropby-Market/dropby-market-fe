import Search from '@/shared/ui/Search.tsx';
import FilterGroup from '@/shared/ui/FilterGroup.tsx';
import StoreItem from '@/page/home/components/StoreItem.tsx';
import LocationIcon from '@/assets/ui/LocationIcon.svg?react';

function Home() {
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
        <FilterGroup
          options={['전체', '즉석식/분식', '국/탕/찌개', '정육/수산', '채소/과일', '기타']}
        />
      </div>

      <ul className="space-y-5">
        {Array.from({ length: 10 }).map((_, idx) => (
          <StoreItem key={idx} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
