import SearchIcon from '@/assets/ui/SearchIcon.svg?react';

function Search() {
  return (
    <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-2">
      <SearchIcon />
      <input
        className="flex-1 text-sm font-medium leading-5 outline-none placeholder:text-gray-400"
        placeholder="검색"
      />
    </div>
  );
}

export default Search;
