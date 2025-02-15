import "./Main.css";

export const Main = () => {
  return (
    <main>
      <form className="add-ingredient-form">
        <input
          className="add-ingredient-form__input"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button className="add-ingredient-form__button" type="submit">
          + Add ingredient
        </button>
      </form>
    </main>
  );
};
