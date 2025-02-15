import { useState } from "react";
import "./Main.css";
import { Recipe, Ingredients } from "../../components";

export const Main = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipeShown, setRecipeShown] = useState<boolean>(false);

  const addIngredient = (formData: FormData) => {
    const newIngredient = formData.get("ingredient") as string;
    setIngredients((prev) => [...prev, newIngredient]);
  };

  const handleGetRecipeClick = () => setRecipeShown(true);

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          className="add-ingredient-form__input"
          type="text"
          placeholder="e.g. oregano"
          name={"ingredient"}
          aria-label="Add ingredient"
        />
        <button className="add-ingredient-form__button" type="submit">
          + Add ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <Ingredients ingredients={ingredients} onClick={handleGetRecipeClick} />
      )}
      {recipeShown && <Recipe />}
    </main>
  );
};
