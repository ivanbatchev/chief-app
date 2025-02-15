import { FC } from "react";
import "./Ingredients.css";

type Props = {
  ingredients: string[];
  onClick: () => void;
};

export const Ingredients: FC<Props> = ({ ingredients, onClick }) => {
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section className="ingredients-section">
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={onClick}>Get a recipe</button>
        </div>
      )}
    </section>
  );
};
