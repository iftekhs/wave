import React from 'react';
import Contact from './Contact/Contact';
import './Home.css';
import Search from './Search/Search';

const Home = () => {
  const contacts = [
    {
      _id: 1,
      image: 'https://api.uifaces.co/our-content/donated/2Stzj6r-.jpg',
      name: 'John Doe',
      lastMessage: 'Hi how are you?',
      time: '09:00',
      unread: 5,
    },
    {
      _id: 2,
      image: 'https://api.uifaces.co/our-content/donated/Te-0H20q.png',
      name: 'Nicolas Plum',
      lastMessage: 'Working with you is just awesome!dawdawadwad',
      time: '08:50',
      unread: 5,
    },
  ];

  return (
    <section>
      <div className="mh-100 bg-gradient-to-bl from-blue-400 to-blue-500 flex items-center justify-center px-2">
        <div className="chatbox bg-cgray rounded-lg grid overflow-hidden">
          <div className="chatbox-left pt-8 pb-5 pl-10 pr-5">
            <div className="flex flex-col">
              <Search></Search>
              <div className="mt-5 bg-white rounded-xl flex flex-col overflow-hidden">
                {contacts.map((contact) => (
                  <Contact key={contact._id} contact={contact}></Contact>
                ))}
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
