import "./App.css";
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("White");

  const changeBg = (e) => {
    setBgColor(e.target.value);
  };

  return (
    <div className="w-full h-screen" style={{ backgroundColor: bgColor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "Red" }}
            value={"red"}
            onClick={changeBg}
          >
            Red
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "Green" }}
            value={"green"}
            onClick={changeBg}
          >
            Green
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "Blue" }}
            value={"blue"}
            onClick={changeBg}
          >
            Blue
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "Purple" }}
            value={"purple"}
            onClick={changeBg}
          >
            Purple
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "Orange" }}
            value={"orange"}
            onClick={changeBg}
          >
            Orange
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "Olive" }}
            value={"olive"}
            onClick={changeBg}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
