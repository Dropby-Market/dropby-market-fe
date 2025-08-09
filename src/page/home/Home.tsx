import Search from '@/shared/ui/Search.tsx';
import LocationIcon from '@/assets/home/LocationIcon.svg?react';

function Home() {
  return (
    <>
      <div className="flex justify-between text-sm font-medium leading-5">
        <h2>동남구 영성로</h2>
        <div className="flex items-center gap-1 text-sm font-medium leading-5 text-green-500">
          <LocationIcon />내 위치
        </div>
      </div>
      <Search />
    </>
  );
}

export default Home;
