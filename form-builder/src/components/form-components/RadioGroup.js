// RadioGroup.js
import React from "react";

const RadioGroup = React.memo(({ label, name, options }) => (
  <div>
    <label>{label}</label>
    {options.map((opt, index) => (
      <div key={index}>
        <input id={`${name}-${index}`} name={name} type="radio" value={opt.value} />
        <label htmlFor={`${name}-${index}`}>{opt.label}</label>
      </div>
    ))}
  </div>
));

export default RadioGroup;
