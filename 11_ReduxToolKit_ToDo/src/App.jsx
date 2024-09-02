import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/addTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Readux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
