// TextInput.js
import React from "react";

const TextInput = React.memo(({ label, name }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input id={name} name={name} type="text" />
  </div>
));

export default TextInput;
