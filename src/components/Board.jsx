import Square from "./Square/Square";

const Board = () => {
  return (
    <div>
      <h2>Winner</h2>
      <div className="grid justify-center gap-6">
        <Square />
      </div>
    </div>
  );
};

export default Board;
