import React, { useRef, useState } from 'react';
import './Home.css';
import { CiSearch } from 'react-icons/ci';

const Home = () => {
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
    <section>
      <div className="mh-100 bg-gradient-to-bl from-blue-400 to-blue-500 flex items-center justify-center px-2">
        <div className="chatbox bg-cgray rounded-lg grid overflow-hidden">
          <div className="chatbox-left py-5 px-4">
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden">
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
                    isSearching ? '-top-40' : 'top-1/2'
                  } transition-all absolute  -translate-y-1/2 left-3 text-cgray2 flex items-center justify-center gap-2`}>
                  <CiSearch className="text-xl"></CiSearch>
                  <p className="font-semibold text-sm">SEARCH</p>
                </div>
              </div>
            </div>
          </div>
          <div className="chatbox-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
