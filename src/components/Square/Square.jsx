import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(Array(9).fill(0));
  const handleButtonClick = (index) => {
    const newValues = value.slice();
    newValues[index] = "X";
    console.log("Square index:", index);
    setValue(newValues);
  };

  return (
    <>
      <div className="flex">
        <button
          className="bg-white border border-zinc-500 h-20 w-20 m-1 leading-9 text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-100"
          value={value[0]}
          onClick={() => handleButtonClick(0)}
        >
          {value[0]}
        </button>
        <button
          className="bg-white border border-zinc-500 h-20 w-20 m-1 leading-9 text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-100"
          value={value[1]}
          onClick={() => handleButtonClick(1)}
        >
          {value[1]}
        </button>
        <button
          className="bg-white border border-zinc-500 h-20 w-20 m-1 leading-9 text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-100"
          value={value[2]}
          onClick={() => handleButtonClick(2)}
        >
          {value[2]}
        </button>
      </div>
      <div className="flex">
        <button
          className="bg-white border border-zinc-500 h-20 w-20 m-1 leading-9 text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-100"
          value={value[3]}
          onClick={() => handleButtonClick(3)}
        >
          {value[3]}
        </button>
        <button
          className="bg-white border border-zinc-500 h-20 w-20 m-1 leading-9 text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-100"
          value={value[4]}
          onClick={() => handleButtonClick(4)}
        >
          {value[4]}
        </button>
        <button
          className="bg-white border border-zinc-500 h-20 w-20 m-1 leading-9 text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-100"
          value={value[5]}
          onClick={() => handleButtonClick(5)}
        >
          {value[5]}
        </button>
      </div>
      <div className="flex">
        <button
          className="bg-white border border-zinc-500 h-20 w-20 m-1 leading-9 text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-100"
          value={value[6]}
          onClick={() => handleButtonClick(6)}
        >
          {value[6]}
        </button>
        <button
          className="bg-white border border-zinc-500 h-20 w-20 m-1 leading-9 text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-100"
          value={value[7]}
          onClick={() => handleButtonClick(7)}
        >
          {value[7]}
        </button>
        <button
          className="bg-white border border-zinc-500 h-20 w-20 m-1 leading-9 text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-100"
          value={value[8]}
          onClick={() => handleButtonClick(8)}
        >
          {value[8]}
        </button>
      </div>
    </>
  );
};

export default Square;
