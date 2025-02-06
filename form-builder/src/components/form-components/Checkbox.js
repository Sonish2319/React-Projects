// Checkbox.js
import React from "react";

const Checkbox = React.memo(({ label, name }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input id={name} name={name} type="checkbox" />
  </div>
));

export default Checkbox;
