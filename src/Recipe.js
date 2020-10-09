import React from "react";
import Ingredients from "./Ingrdients";
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <p>{Math.floor(calories)} Calories </p>
            
            <ol className={style.orderedList}>
                {ingredients.map(ingredient=>{
                
                    return <Ingredients key = {Math.floor(Math.random()*1000000)}  value = {ingredient.text} />;   
                })}
            </ol>    
            <img className={style.image} src={image} alt="chicken" />
        </div>

    );
}
export default Recipe;