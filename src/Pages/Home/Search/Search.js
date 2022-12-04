import React, { useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);
  const searchInput = useRef();

  const handleFocus = () => {
    setIsSearching(true);
    searchInput.current.focus();
  };

  const handleBlur = () => {
    if (!searchInput.current.value) {
      setIsSearching(false);
    }
  };

  return (
    <div className="relative overflow-hidden search-input-container rounded-full">
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={searchInput}
        className="w-full px-5 py-3 rounded-full bg-white outline-none"
        type="text"
      />
      <div
        onClick={handleFocus}
        className={`${
          isSearching ? 'left-full' : 'left-3'
        } transition-all absolute top-1/2 -translate-y-1/2  text-cgray2 flex items-center justify-center gap-2`}>
        <CiSearch className="text-xl"></CiSearch>
        <p className="font-semibold text-sm">SEARCH</p>
      </div>
    </div>
  );
};

export default Search;
