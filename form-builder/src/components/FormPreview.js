// FormPreview.js
import React from "react";
import TextInput from "./form-components/TextInput";
import Select from "./form-components/Select";
import RadioGroup from "./form-components/RadioGroup";
import Checkbox from "./form-components/Checkbox";

const FormPreview = ({ formSchema }) => (
  <form>
    {formSchema.map((field) => {
      switch (field.type) {
        case "text":
          return <TextInput key={field.id} {...field} />;
        case "select":
          return <Select key={field.id} {...field} options={[{ label: "Option 1", value: "1" }]} />;
        case "radio":
          return <RadioGroup key={field.id} {...field} options={[{ label: "Option 1", value: "1" }]} />;
        case "checkbox":
          return <Checkbox key={field.id} {...field} />;
        default:
          return null;
      }
    })}
    <button type="submit">Submit</button>
  </form>
);

export default FormPreview;
