import React from 'react';
import { Routes, Route } from 'react-router';
import Home from 'pages/Home';
import Detail from 'pages/Detail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
