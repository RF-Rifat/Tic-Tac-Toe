import { useState } from "react";
import Square from "./Square/Square";

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(0));
  return (
    <div>
      <h2>Winner</h2>
      <div className="grid justify-center gap-6">
        <Square value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default Board;
