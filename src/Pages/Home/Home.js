import React, { useRef, useState } from 'react';
import Contact from './Contact/Contact';
import { BiSend } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import './Home.css';
import Search from './Search/Search';
import FirstPerson from './FirstPerson/FirstPerson';
import SecondPerson from './SecondPerson/SecondPerson';

const Home = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [activeEmojis, setActiveEmojis] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const chatTextInput = useRef();

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

  const handleEmoji = (e) => {
    if (e.target.tagName.toLowerCase() === 'span') {
      const emoji = e.target.innerText;
      chatTextInput.current.value += emoji;
    }
  };

  return (
    <section>
      <div className="mh-100 flex items-center justify-center px-2">
        <div className="chatbox overflow-auto bg-cgray rounded-lg grid">
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
          <div className="chatbox-right overflow-auto p-5">
            <div className="flex flex-col h-full pb-3 bg-white rounded-xl">
              <div className="h-full px-4 mb-5 pb-3 overflow-auto flex flex-col gap-6 pt-5">
                <FirstPerson message="Hi! how are you?"></FirstPerson>
                <SecondPerson message={"Ya I'm good what about you?"}></SecondPerson>
              </div>
              <div className="flex px-4 items-center gap-4">
                <div className="w-full flex items-center justify-center gap-2">
                  <div className="relative">
                    <BsEmojiSmile
                      onClick={() => setActiveEmojis(!activeEmojis)}
                      className="cursor-pointer text-xl"></BsEmojiSmile>
                    <div
                      onClick={handleEmoji}
                      className={`${
                        activeEmojis && 'active-emojis'
                      } emojis-box flex flex-wrap gap-2 bg-white p-5 rounded-lg transition-all`}>
                      <span>😄</span>
                      <span>😁</span>
                      <span>😃</span>
                      <span>😆</span>
                      <span>😅</span>
                      <span>😂</span>
                      <span>🤣</span>
                      <span>🥲</span>
                      <span>🥹</span>
                      <span>☺️</span>
                      <span>😊</span>
                      <span>😇</span>
                      <span>🙂</span>
                      <span>🙃</span>
                      <span>😉</span>
                      <span>😌</span>
                      <span>😍</span>
                      <span>🥰</span>
                      <span>😘</span>
                      <span>😗</span>
                      <span>😙</span>
                      <span>😚</span>
                      <span>😋</span>
                      <span>😛</span>
                      <span>😝</span>
                      <span>🤪</span>
                      <span>🤨</span>
                      <span>😜</span>
                      <span>🧐</span>
                      <span>🤓</span>
                      <span>😎</span>
                      <span>🥸</span>
                      <span>🤩</span>
                      <span>🥳</span>
                      <span>😏</span>
                      <span>😒</span>
                      <span>😞</span>
                      <span>😔</span>
                      <span>😟</span>
                      <span>😕</span>
                      <span>🙁</span>
                      <span>☹️</span>
                      <span>😣</span>
                      <span>😖</span>
                      <span>😫</span>
                      <span>😩</span>
                      <span>🥺</span>
                      <span>😢</span>
                      <span>😭</span>
                      <span>😮</span>
                      <span>😤</span>
                      <span>😠</span>
                      <span>😡</span>
                      <span>🤬</span>
                      <span>🤯</span>
                      <span>😳</span>
                      <span>🥵</span>
                      <span>🥶</span>
                      <span>😱</span>
                      <span>😨</span>
                      <span>😰</span>
                      <span>😥</span>
                      <span>😓</span>
                      <span>🫣</span>
                      <span>🤗</span>
                      <span>🫡</span>
                      <span>🤔</span>
                      <span>🫢</span>
                      <span>🤭</span>
                      <span>🤫</span>
                      <span>🤥</span>
                      <span>😶</span>
                      <span>😶</span>
                      <span>😐</span>
                      <span>😑</span>
                      <span>😬</span>
                      <span>🙄</span>
                      <span>😯</span>
                      <span>😦</span>
                      <span>😧</span>
                      <span>😮</span>
                      <span>😲</span>
                      <span>😀</span>
                    </div>
                  </div>
                  <input
                    type="text"
                    ref={chatTextInput}
                    className="w-full px-5 py-3 bg-cgray rounded-full outline-none"
                  />
                </div>
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
