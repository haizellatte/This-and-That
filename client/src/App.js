import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Page/Main";
import Budget from './Page/Budget/Budget';
import ReactHooks from "./Page/ReactHook/ReactHooks"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/reactHooks" element={<ReactHooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
