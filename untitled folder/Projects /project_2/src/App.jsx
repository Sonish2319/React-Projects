import Game from "./components/Game";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return <>{isGameStarted ? <GamePlay /> : <Game toggle={toggleGamePlay} />}</>;
}

export default App;
