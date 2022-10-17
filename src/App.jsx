import React,{ useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <fieldset>
        <legend>
          <div>
            <h1>Simplest Working Calculator</h1>
          </div>
        </legend>
        <form>
          <div className="result">
            {" "}
            <p ref={resultRef}>{result} </p>{" "}
          </div>

          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <div>
          <div>
            <button onClick={plus}>Add</button>
            <button onClick={minus}>Subtract</button>
            <button onClick={times}>Multiply</button>
          </div>
          <div className="clear">
            <button onClick={divide}>Divide</button>
            <button onClick={resetInput}>Reset</button>
            <button onClick={resetResult}>Clear</button>{" "}
          </div></div>
        </form>{" "}
      </fieldset>
    </div>
  );
}

export default App;
