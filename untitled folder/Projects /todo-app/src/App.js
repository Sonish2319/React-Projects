import React, { useEffect } from "react";
import Button from "./componenets/Button";
import Header from "./componenets/Header";
import Todoitem from "./componenets/Todoitem";
import Counter from "./componenets/Counter";
import Use from "./componenets/Use";
import "./style.css";

function App() {
  return (
    <div className="todo-container">
      <Counter />
      <Header text="Todo" />
      <Todoitem text="Eat" />
      <Todoitem completed={true} text="Code" />
      <Todoitem text="Sleep" />
      <Todoitem text="Repeat" />
      <Button text="Add Todo" />
      <Button text="Delete Todo" />
    </div>
  );
}

export default App;
