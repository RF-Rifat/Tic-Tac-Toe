import { useState } from "react";
import Square from "./Square/Square";

const Board = () => {
  const [win, setWin] = useState(null);
  return (
    <div>
      <h2>{win}</h2>
      <div className="grid justify-center gap-6">
        <Square setWin={setWin} />
      </div>
    </div>
  );
};

export default Board;
