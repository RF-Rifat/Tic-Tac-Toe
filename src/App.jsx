// import "./App.css";
import Board from "./components/Board";
import Result from "./components/Result";

function App() {
  return (
    <div className="text-center text-2xl flex justify-center gap-12">
      <Board />
      <Result />
    </div>
  );
}

export default App;
