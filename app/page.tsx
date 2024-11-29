"use client"
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";



const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  }

  const Reset = () => {
    setCount(count * 0);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-[50px]">
   <div className="flex justify-center items-center  gap-[40px] relative">
    <button onClick={increment} className="text-black font-bold focus:ring-2 ring-green-300 text-5xl opacity-[80%] hover:opacity-[100%] bg-green-500 p-4 hover:scale-105 duration-300 ease-in-out rounded-full shadow-green-400 shadow-2xl"><FaPlus /></button>
    <p className="text-5xl font-bold text-white font-sans shadow-white shadow-2xl">{count}</p>
    <button onClick={decrement} className="text-black focus:ring-2 ring-red-300 font-bold text-5xl opacity-[80%] hover:opacity-[100%] bg-red-500 p-4 hover:scale-105 duration-300 ease-in-out rounded-full shadow-red-400 shadow-2xl"><FaMinus /></button>
   </div>
   <button onClick={Reset} className="p-4 bg-yellow-300 text-black text-3xl font-bold uppercase rounded-3xl focus:ring-2 ring-yellow-200 opacity-[80%] hover:opacity-[100%] hover:scale-105 duration-300 ease-in-out shadow-yellow-300 shadow-2xl">reset</button>
   </div>
   
  );
};

export default Counter;