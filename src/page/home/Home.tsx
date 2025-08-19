import Search from '@/shared/ui/Search.tsx';
import FilterGroup from '@/shared/ui/FilterGroup.tsx';
import StoreItem from '@/page/home/components/StoreItem.tsx';
import LocationIcon from '@/assets/ui/LocationIcon.svg?react';
import { useEffect, useState } from 'react';
import type { StoreDetail } from '@/page/Market/types.ts';
import axios from 'axios';

function Home() {
  const [allStores, setAllStores] = useState<StoreDetail[]>([]);
  const [filteredStores, setFilteredStores] = useState<StoreDetail[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('전체');

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const url = new URL('./mock.json', import.meta.url).href;
        const { data } = await axios.get<StoreDetail[]>(url);
        setAllStores(data);
        setFilteredStores(data);
      } catch (error) {
        console.error('가게목록 조회 실패', error);
      }
    };

    fetchStores();
  }, []);

  useEffect(() => {
    if (selectedCategory === '전체') {
      setFilteredStores(allStores);
    } else {
      setFilteredStores(allStores.filter(store => store.category === selectedCategory));
    }
  }, [selectedCategory, allStores]);

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
          options={['전체', '분식', '빵', '채소', '과일', '음료']}
          onChange={index => {
            const category = ['전체', '분식', '빵', '채소', '과일', '음료'][index];
            setSelectedCategory(category);
          }}
        />
      </div>

      <ul className="space-y-5">
        {filteredStores.map(store => (
          <StoreItem key={store.storeId} store={store} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
