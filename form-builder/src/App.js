import { useState } from "react";
import FormBuilder from "./components/FormBuilder";
import FormValidation from "./components/FormValidation";


export default function App() {
  const [formElements, setFormElements] = useState([]);
  const toolbox = [
    {
      type: "text",
      label: "Text Input",
      fieldName: "Name",
      placeholder: "Enter your name",
    },
    {
      type: "select",
      label: "Dropdown",
      fieldName: "Country",
      options: ["USA", "India", "Canada"],
    },
    {
      type: "radio",
      label: "Radio Buttons",
      fieldName: "Gender",
      options: ["Male", "Female", "Other"],
    },
    {
      type: "checkbox",
      label: "Checkboxes",
      fieldName: "Hobbies",
      options: ["Reading", "Traveling", "Gaming"],
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Drag and Drop Form Builder</h1>
      <FormBuilder toolbox={toolbox} formElements={formElements} setFormElements={setFormElements} />
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Form Validation</h2>
      <FormValidation formElements={formElements} />
    </div>
  );
}
