import React from 'react';

const FirstPerson = ({ message }) => {
  return (
    <div className="ml-auto py-3 px-5 leading-7 bg-blue-500 text-white rounded-tl-xl rounded-bl-xl rounded-br-xl">
      {message}
    </div>
  );
};

export default FirstPerson;
