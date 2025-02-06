import React, { useState } from "react";

function Input(props) {
  const [inputText, setInputText] = useState("");

  // Function to handle the "Enter" key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.addList(inputText); // Add the task when "Enter" is pressed
      setInputText(""); // Clear the input field after adding
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter Your Todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleKeyDown} // Replacing onKeyPress with onKeyDown
      ></input>
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default Input;


