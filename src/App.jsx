import { useState } from "react";
import "./App.css";
import BoxList from "./BoxList";
import WaifuIsLaifu from "./WaifuIsLaifu";

const students = [
  {
    Name: "Sam",
    Course: "BS-CS",
    Age: 20,
    idNumber: 12345,
  },
  {
    Name: "Dick",
    Course: "BS-IT",
    Age: 20,
    idNumber: 22345,
  },
  {
    Name: "Johnny",
    Course: "BS-FM",
    Age: 20,
    idNumber: 32345,
  },
  {
    Name: "Willy",
    Course: "BS-MA",
    Age: 20,
    idNumber: 42345,
  },
  {
    Name: "Richard",
    Course: "BS-A",
    Age: 20,
    idNumber: 52345,
  },
];

function App() {
  const [id, setId] = useState("");

  return (
    <>
      <input className="search" onChange={(e) => setId(e.target.value)}></input>
      <BoxList studentList={students} searchedId={id} />
      <WaifuIsLaifu />
    </>
  );
}

export default App;
