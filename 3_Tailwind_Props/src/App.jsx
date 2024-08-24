import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="bg-green-800 text-black">Hello Bro</h1>
      <p>Alright</p>
      <Card username="Manohar" />
      <Card username="Naidu" role="Backend Developer" />
    </>
  );
}

export default App;
