// utils.js
export const generateJsonSchema = (formSchema) => {
    return {
      fields: formSchema.map((field) => ({
        id: field.id,
        type: field.type,
        label: field.label,
        name: field.name,
      })),
    };
  };
  