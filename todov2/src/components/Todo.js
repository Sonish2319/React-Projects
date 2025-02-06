import React, { useState, useEffect } from "react";

const Todo = () => {
  const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");

    if (lists) {
      return JSON.parse(lists); // in local storage our data is in the form of stings bit we need array to show in the lists. so JSON.parse(lists) it convets stings into array
      // const lists = localStorage.getItem("mytodolist"); it fetches list of stings values from local storage which has key "mytodolist"
    } else {
      return []; // if nothing in list then empty itms
    }
  };

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [togglebtn, setToggleBtn] = useState(false);

  // handel enter press btn

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem(); // caling additm function
    }
  };

  //   add items function

  const addItem = () => {
    if (!inputData) {
      // if input data is nothing
      alert("Plz fill the data");
    } else {
      // creating a object which has id of added item and their content in name
      const newUpdatedInput = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, newUpdatedInput]);
      setInputData("");
    }
  };

  // delete item
  const deleteItem = (index) => {
    const updatedItem = items.filter((curElm) => {
      return curElm.id !== index; // it will return all thos items which will not match the index
    });
    setItems(updatedItem);
  };

  // remove all items at once

  const removeAll = () => {
    setItems([]);
  };

  // adding localstorage

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items)); // JSON.stringify(items) => convering items array to sting
    // "mytodolist", JSON.stringify(items) this is key valye pair. "mytodolist" is key and JSON.stringify(items) is value for local storage check inspect->application->local storage->localhost->mytodolist
  }, [items]); // [items] based on the items changed the local storage renders e.g if added new itmes then local storage renders i.e useEffect hooks

  // edit itms
  const editItem = (index) => {
    const selectedItem = items.find((curElm) => {
      return curElm.id === index;
    });
    setInputData(selectedItem.name); // this will show the name of item in input bar
    setIsEditItem(index); // this will set index value of item to be edited ti isEditItem
    setToggleBtn(true);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/bubbles/100/todo-list.png"
              alt="todo-list"
            />

            <figcaption>Add Your List Here </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items"
              className="form-control"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              onKeyDown={handleKeyPress} // Call handleKeyPress on key down
            />
            {togglebtn ? (
              <i className="fa-regular fa-pen-to-square" onClick={addItem}></i>
            ) : (
              <i className="fas fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>

          <div className="showItems">
            {items.map((curElm) => {
              return (
                <div className="eachItems" key={curElm.id}>
                  <h3>{curElm.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa-regular fa-pen-to-square add-btn"
                      onClick={() => editItem(curElm.id)}
                    ></i>
                    <i
                      class="fa-solid fa-trash add-btn"
                      onClick={() => deleteItem(curElm.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItem">
            <button className="btn effect04" onClick={() => removeAll()}>
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
