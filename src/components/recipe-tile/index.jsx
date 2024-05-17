import React from "react";
import "./style.css";

export default function RecipeTile({ recipe }) {
  const { image, url, label } = recipe.recipe;

  // Log the data to check if it is correct
  console.log('Recipe Data:',{image});
  // console.log('recipe url:',{url});

  // Simplified image validation
  const isValidImage = /\.(jpeg|jpg|gif|png)$/.test(image);

  return (
     (
      <div className="recipeTile" onClick={() => window.open(url)}>
        <img className="recipeTile__img" src={image} alt={label} />
        <p className="recipeTile__name">{label}</p>
      </div>
    ) 
  );
}
