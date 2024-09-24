import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch Man",
    "Dragon Ball Z",
  ]);
  const onAddCategory = (newCategory) => {
    // Don't execute setCategories if the category was searched for previously.
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>
      {/* Entrada de texto */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* Listado de imágenes */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
