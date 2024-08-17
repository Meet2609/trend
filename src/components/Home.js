import React, { useState } from "react";

const initialRecipesData = [
  {
    id: 1,
    title: "Blueberry Muffins",
    type: "Breakfast",
    ingredients: "Flour, Sugar, Eggs, Blueberries, Milk",
    method:
      "Mix dry ingredients, fold in blueberries, and bake in muffin tins.",
  },
  {
    id: 2,
    title: "Mediterranean Quinoa Salad",
    type: "Lunch",
    ingredients:
      "Quinoa, Cucumbers, Tomatoes, Feta Cheese, Olive Oil, Lemon Juice",
    method:
      "Cook quinoa, mix with veggies, and dress with olive oil and lemon juice.",
  },
  {
    id: 3,
    title: "Chicken Stir-Fry",
    type: "Dinner",
    ingredients:
      "Chicken Breast, Bell Peppers, Broccoli, Soy Sauce, Garlic, Rice",
    method:
      "Stir-fry chicken and vegetables, add soy sauce, and serve over rice.",
  },
];

function RecipeManager() {
  const [recipesList, setRecipesList] = useState(initialRecipesData);
  const [query, setQuery] = useState("");
  const [newRecipeData, setNewRecipeData] = useState({
    title: "",
    type: "",
    ingredients: "",
    method: "",
  });

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleRecipeChange = (e) => {
    const { name, value } = e.target;
    setNewRecipeData({ ...newRecipeData, [name]: value });
  };

  const addNewRecipe = () => {
    if (
      newRecipeData.title &&
      newRecipeData.type &&
      newRecipeData.ingredients &&
      newRecipeData.method
    ) {
      setRecipesList([
        ...recipesList,
        { id: recipesList.length + 1, ...newRecipeData },
      ]);
      setNewRecipeData({ title: "", type: "", ingredients: "", method: "" });
    } else {
      alert("All fields are required.");
    }
  };

  const searchedRecipes = recipesList.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="recipeBox">
      <h1 className="headingHome">My Recipe Collection</h1>
      <div className="searching">
        <input
          placeholder="Search recipe"
          type="text"
          onChange={handleQueryChange}
          className="search-input"
          value={query}
        />
      </div>
      <div className="recipeForm">
        <h2 className="form-title">Add New Recipe</h2>

        <input
          name="title"
          type="text"
          value={newRecipeData.title}
          placeholder="Recipe Title"
          className="inputFieldData"
          onChange={handleRecipeChange}
        />
        <input
          name="type"
          type="text"
          value={newRecipeData.type}
          placeholder="Category"
          className="inputFieldData"
          onChange={handleRecipeChange}
        />
        <textarea
          placeholder="List of Ingredients"
          name="ingredients"
          onChange={handleRecipeChange}
          className="textareaFieldData"
          value={newRecipeData.ingredients}
        />
        <textarea
          placeholder="Cooking Instructions"
          name="method"
          onChange={handleRecipeChange}
          className="textareaFieldData"
          value={newRecipeData.method}
        />
        <button onClick={addNewRecipe} className="addRecipeButton">
          Add Recipe
        </button>
      </div>
      <div className="recipeDataList">
        <h2 className="recipeHeading">Recipe Lists</h2>
        {searchedRecipes.length > 0 ? (
          searchedRecipes.map((recipe) => (
            <div key={recipe.id} className="recipeCardHomepage">
              <h3 className="titleRecipe">{recipe.title}</h3>
              <p className="categories">
                <strong>Category:</strong> {recipe.type}
              </p>
              <p className="ingredients">
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>

              <p className="methodRecipe">
                <strong>Instructions:</strong> {recipe.method}
              </p>
            </div>
          ))
        ) : (
          <p className="noData">No data.</p>
        )}
      </div>
    </div>
  );
}

export default RecipeManager;
