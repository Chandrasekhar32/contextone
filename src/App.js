import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "../src/components/Home";
import Cart from "../src/components/Cart";
import React, { createContext, useState } from "react";
import Expenstracker from "./components/ExpenseTracker/Expenstracker";
import { GlobalProvider } from "./components/context/GlobalState";

export const store = createContext();

const App = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  return (
    <store.Provider value={[data, setData]}>
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/useeffect" element={<Cart />} />
              <Route path="/usecontext" element={<Expenstracker />} />
              <Route path="/usereducer" element={<Cart />} />
            </Routes>
          </div>
        </GlobalProvider>
      </BrowserRouter>
    </store.Provider>
  );
};

export default App;
