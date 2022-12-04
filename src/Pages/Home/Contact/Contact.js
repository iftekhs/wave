import React from 'react';

const Contact = ({ contact }) => {
  const { image, name, lastMessage, time, unread } = contact;
  return (
    <div className="text-cgray2 hover:cursor-pointer hover:bg-blue-100 transition-all flex items-center p-5 border-b-blue-400 border-b-0">
      <img className="rounded-full h-14" src={image} alt="" />
      <div className="ml-5">
        <h2 className=" font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">
          {lastMessage.length > 30 ? lastMessage.substring(0, 31) + '...' : lastMessage}
        </p>
      </div>
      <div className="flex flex-col items-end justify-between ml-auto gap-3">
        <p className="font-semibold text-sm">{time}</p>
        {unread && (
          <p className="bg-blue-500 text-xs w-6 h-6 rounded-full flex items-center justify-center text-white">
            {unread}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
