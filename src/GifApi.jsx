import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApi = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div className="container mt-3">
        <h1>GifApi</h1>

        <AddCategory onNewCategory={onAddCategory} />

        {categories.map((c) => (
          <GifGrid key={c} category={c} />
        ))}
      </div>
    </>
  );
};
