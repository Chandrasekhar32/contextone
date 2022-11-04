import React, { useContext } from "react";
import { store } from "../App";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useContext(store);
  const [count, setCount] = useState({
    num: 1,
  });
  const [id, setId] = useState("usestate");

  const handleAdd = () => {
    // e.preventDefault();
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSubtract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  return (
    <div>
      Home{data}
      <div>
        <p>{count.num}{id}</p>
        <button onClick={handleSubtract}> - </button>
        <button>
          {count.num}
         
        </button>
        <button onClick={handleAdd}> + </button>
      </div>
    </div>
  );
};

export default Home;
