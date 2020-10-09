import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Recipe from "./Recipe";


const App = () => {

  const APP_ID = '8d86970c';
  const APP_KEY = "05c3f8f90bdf14b47f7791de982c6272	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  }



  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
      }} className="search-form">

        <input onChange={(e) => setSearch(e.target.value)}
          className="search-bar" type="text" value={search} />

        <button className="search-button" type="submit">
          search
        </button>

      </form>
      <div className="recipes">

        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}

          />
        ))}
      </div>


    </div>
  );
}

export default App;
