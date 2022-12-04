import React, { useState } from 'react';
import Contact from './Contact/Contact';
import { BiSend } from 'react-icons/bi';
import './Home.css';
import Search from './Search/Search';

const Home = () => {
  const [activeChat, setActiveChat] = useState(null);

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
                  <Contact
                    key={contact._id}
                    activeChat={activeChat}
                    setActiveChat={setActiveChat}
                    contact={contact}></Contact>
                ))}
              </div>
            </div>
          </div>
          <div className="chatbox-right p-5">
            <div className="flex flex-col h-full px-4 pb-3 bg-white rounded-xl">
              <div className="h-full mb-10 overflow-auto flex flex-col gap-6 pt-5">
                <div className="py-3 px-5 leading-7 mr-auto bg-cgray rounded-tr-xl rounded-bl-xl rounded-br-xl">
                  Hi How are you?
                </div>
                <div className="ml-auto py-3 px-5 leading-7 bg-blue-500 text-white rounded-tl-xl rounded-bl-xl rounded-br-xl">
                  I'm fine what about you?
                </div>
                <div className="py-3 px-5 leading-7 mr-auto bg-cgray rounded-tr-xl rounded-bl-xl rounded-br-xl">
                  Ya i'm fine too! we have a football match today wanna play?
                </div>
                <div className="ml-auto py-3 px-5 leading-7 bg-blue-500 text-white rounded-tl-xl rounded-bl-xl rounded-br-xl">
                  Ya ofcourse! when is the match?
                </div>
                <div className="py-3 px-5 leading-7 mr-auto bg-cgray rounded-tr-xl rounded-bl-xl rounded-br-xl">
                  4:00 pm
                </div>
                <div className="py-3 px-5 leading-7 mr-auto bg-cgray rounded-tr-xl rounded-bl-xl rounded-br-xl">
                  Ok, see ya at the match!
                </div>
                <div className="ml-auto py-3 px-5 leading-7 bg-blue-500 text-white rounded-tl-xl rounded-bl-xl rounded-br-xl">
                  Alright i will be there
                </div>
                <div className="ml-auto py-3 px-5 leading-7 bg-blue-500 text-white rounded-tl-xl rounded-bl-xl rounded-br-xl">
                  You too!
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <input
                  type="text"
                  className="w-full px-5 py-3 rounded-full bg-cgray outline-none"
                />
                <button className="bg-gradient-to-bl transition-all from-blue-400 to-blue-500 text-white p-3 text-lg rounded-full">
                  <BiSend></BiSend>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
