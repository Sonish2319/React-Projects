// Select.js
import React from "react";

const Select = React.memo(({ label, name, options }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <select id={name} name={name}>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
));

export default Select;
