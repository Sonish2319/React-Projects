import { useState } from "react";
import styled from "styled-components";
import StartGame from "./componenets/StartGame";
import Gameplay from "./componenets/Gameplay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  };q
  return (
    <>{isGameStarted ? <Gameplay toggle={toggleGame}/> : <StartGame toggle={toggleGame} />}</>
  );
}

export default App;
