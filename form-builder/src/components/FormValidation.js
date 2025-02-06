import React, { useState } from "react";
import { z } from "zod";

export default function FormValidation({ formElements }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Dynamic Zod Schema based on form elements
  const schema = z.object(
    formElements.reduce((acc, element) => {
      if (element.type === "text") {
        acc[element.fieldName] = z
          .string()
          .min(1, `${element.fieldName} is required`);
      } else if (element.type === "select") {
        acc[element.fieldName] = z.string().min(1, `${element.fieldName} is required`);
      } else if (element.type === "radio") {
        acc[element.fieldName] = z
          .string()
          .min(1, `Please select a ${element.fieldName}`);
      } else if (element.type === "checkbox") {
        acc[element.fieldName] = z
          .array(z.string())
          .min(1, `Please select at least one ${element.fieldName}`);
      }
      return acc;
    }, {})
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        const prevValues = prev[name] || [];
        if (checked) {
          return { ...prev, [name]: [...prevValues, value] };
        } else {
          return { ...prev, [name]: prevValues.filter((v) => v !== value) };
        }
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      schema.parse(formData);
      setErrors({});
      alert("Form submitted successfully!");
    } catch (validationError) {
      const errorDetails = validationError.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(errorDetails);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formElements.map((element, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            {element.fieldName}
          </label>
          {element.type === "text" && (
            <input
              type="text"
              name={element.fieldName}
              placeholder={element.placeholder}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: 4,
              }}
            />
          )}
          {element.type === "select" && (
            <select
              name={element.fieldName}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: 4,
              }}
            >
              <option value="">Select {element.fieldName}</option>
              {element.options.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
          {element.type === "radio" && (
            <div>
              {element.options.map((opt, idx) => (
                <label key={idx} style={{ marginRight: "10px" }}>
                  <input
                    type="radio"
                    name={element.fieldName}
                    value={opt}
                    onChange={handleInputChange}
                  />
                  {opt}
                </label>
              ))}
            </div>
          )}
          {element.type === "checkbox" && (
            <div>
              {element.options.map((opt, idx) => (
                <label key={idx} style={{ marginRight: "10px" }}>
                  <input
                    type="checkbox"
                    name={element.fieldName}
                    value={opt}
                    onChange={handleInputChange}
                  />
                  {opt}
                </label>
              ))}
            </div>
          )}
          {errors[element.fieldName] && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors[element.fieldName]}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}
