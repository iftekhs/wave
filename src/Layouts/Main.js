import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <main className="bg-gradient-to-bl from-blue-400 to-blue-500">
      <Outlet />
    </main>
  );
};

export default Main;
