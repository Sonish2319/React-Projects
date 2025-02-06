import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Showtodo from "./components/Showtodo";

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    // [...] (the spread operator) is used to create a new array that contains all the current items in listTodo, followed by the new item inputText.
    if (inputText !== "") setListTodo([...listTodo, inputText]);
    
    
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo]; // copies array of listTodo to newlisttodo
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <Input addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        <br />
        {listTodo.map((listItem, i) => {
          return (
            <Showtodo
              key={i}
              index={i}
              item={listItem}
              deleteListItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
