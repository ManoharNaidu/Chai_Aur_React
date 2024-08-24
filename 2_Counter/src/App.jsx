import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter === 20) {
      alert("Counter can't be more than 20");
      return;
    }
    counter++;
    setCounter(counter);
  };

  const remValue = () => {
    if (counter === 0) {
      alert("Counter can't be less than 0");
      return;
    }
    counter--;
    setCounter(counter);
  };

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <p>Its just a constant 0</p>
      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={remValue}>Remove Value: {counter}</button>
    </>
  );
}

export default App;
