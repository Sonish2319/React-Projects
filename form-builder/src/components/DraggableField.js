// DraggableField.js
import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableField = ({ field }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: field.id,
  });

  const style = {
    transform: `translate(${transform?.x}px, ${transform?.y}px)`,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div>{field.label}</div>
    </div>
  );
};

export default DraggableField;
