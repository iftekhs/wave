import React from 'react';
import './Home.css';
import Search from './Search/Search';

const Home = () => {
  return (
    <section>
      <div className="mh-100 bg-gradient-to-bl from-blue-400 to-blue-500 flex items-center justify-center px-2">
        <div className="chatbox bg-cgray rounded-lg grid overflow-hidden">
          <div className="chatbox-left py-5 px-4">
            <div className="flex flex-col gap-4">
              <Search></Search>
              <div className="mt-5 p-5 bg-white rounded-xl flex flex-col gap-4">
                
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
