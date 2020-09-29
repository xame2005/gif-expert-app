import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import GifGrid from "./GifGrid";

export const GifExpertApp = () => {
  //const categories = ["One Punch", "Ranma", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);
  /* const handleAdd = () => {
    setCategories([...categories, "Looney Tunes"]);
  }; */

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
