import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section>
      <div className="mh-100 bg-gradient-to-bl from-blue-400 to-blue-500 flex items-center justify-center px-2">
        <div className="chatbox bg-white rounded-lg grid overflow-hidden">
          <div className="chatbox-left"></div>
          <div className="chatbox-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
