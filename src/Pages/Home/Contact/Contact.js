import React from 'react';
import './Contact.css';

const Contact = ({ contact, activeChat, setActiveChat }) => {
  const { _id, image, name, lastMessage, time, unread } = contact;
  return (
    <div
      onClick={() => setActiveChat(_id)}
      className={`${
        activeChat === _id && 'activeChat'
      } contact text-cgray2 hover:cursor-pointer hover:bg-blue-500 transition-all flex items-center p-5 border-b-blue-400 border-b-0`}>
      <div className="relative">
        <img className="rounded-full h-14" src={image} alt="" />
        <div className="absolute top-full left-full -translate-y-full -translate-x-full active-contact w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></div>
      </div>
      <div className="ml-5">
        <h2 className=" font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">
          {lastMessage.length > 30 ? lastMessage.substring(0, 31) + '...' : lastMessage}
        </p>
      </div>
      <div className="flex flex-col items-end justify-between ml-auto gap-3">
        <p className="font-semibold text-sm">{time}</p>
        {unread && (
          <p className="unread bg-blue-500 text-xs w-6 h-6 rounded-full flex items-center justify-center text-white">
            {unread}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
