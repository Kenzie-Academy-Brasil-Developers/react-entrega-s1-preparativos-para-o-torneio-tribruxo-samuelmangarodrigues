import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Students from "./components/Students";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        setStudents(response);
      })
      .catch((err) => console.log(err));
  }, []);
  const randons = () => {};

  const isRoting = () => {
    setIsHome(false);
  };
  const isTRoting = () => {
    setIsHome(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        {isHome ? (
          <HomePage isRoting={isRoting} />
        ) : (
          <Students isRoting={isTRoting} students={students} />
        )}
      </header>
    </div>
  );
}

export default App;
