import React from 'react';

const SecondPerson = ({ message }) => {
  return (
    <div className="py-3 px-5 leading-7 mr-auto bg-cgray rounded-tr-xl rounded-bl-xl rounded-br-xl">
      {message}
    </div>
  );
};

export default SecondPerson;
