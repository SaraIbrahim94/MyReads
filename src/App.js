import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from "./Components/Search";
import Home from "./Components/Home";
import { ContextProvider } from './Components/Context';

function App() {

  return (
    <ContextProvider>
    <BrowserRouter>
    <div className="app">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Search" element={<Search />} />
        </Routes>
    </div>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
