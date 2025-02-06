
import React from "react";
import { useRef, useState } from "react";

export default function FormBuilder({ toolbox }) {
  const [formElements, setFormElements] = useState([]);
  const dragItem = useRef();

  const handleDragStart = (e, element) => {
    dragItem.current = element;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const element = dragItem.current;
    setFormElements((prev) => [...prev, element]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
      {/* Toolbox */}
      <div
        style={{
          background: "#f7f7f7",
          padding: "1rem",
          width: 250,
          minHeight: 400,
          border: "1px solid #ccc",
          borderRadius: 8,
        }}
      >
        <h3>Toolbox</h3>
        {toolbox.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={handleDragEnd}
            style={{
              padding: "8px",
              margin: "8px 0",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: 4,
              cursor: "move",
              textAlign: "center",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Form Canvas */}
      <div
        style={{
          flex: 1,
          marginLeft: 20,
          padding: "1rem",
          background: "#f0f0f0",
          minHeight: 400,
          border: "1px dashed #aaa",
          borderRadius: 8,
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <h3>Form Canvas</h3>
        {formElements.length === 0 && (
          <p style={{ color: "#888", textAlign: "center" }}>Drag items here</p>
        )}
        {formElements.map((item, index) => (
          <div
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: 4,
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              {item.fieldName}
            </label>
            {item.type === "text" && (
              <input
                type="text"
                placeholder={item.placeholder}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: 4,
                  border: "1px solid #ccc",
                }}
              />
            )}
            {item.type === "select" && (
              <select
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: 4,
                  border: "1px solid #ccc",
                }}
              >
                {item.options.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
            {item.type === "radio" && (
              <div>
                {item.options.map((opt, idx) => (
                  <label key={idx} style={{ marginRight: "10px" }}>
                    <input type="radio" name={`radio-${index}`} value={opt} />
                    {opt}
                  </label>
                ))}
              </div>
            )}
            {item.type === "checkbox" && (
              <div>
                {item.options.map((opt, idx) => (
                  <label key={idx} style={{ marginRight: "10px" }}>
                    <input type="checkbox" name={`checkbox-${index}`} value={opt} />
                    {opt}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
