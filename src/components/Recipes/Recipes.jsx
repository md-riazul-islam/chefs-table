import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';


const Recipes = ({handleWont}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="md:w-3/5 grid lg:grid-cols-2 gap-4 ">
            {
            recipes.map(recipe  => <Recipe  recipe={recipe} key={recipe.recipe_id} handleWont={handleWont}></Recipe>)
            }
        </div>
    );
};  

Recipes.propTypes = {
    handleWont: PropTypes.func.isRequired
}

export default Recipes;