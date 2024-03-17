import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import WantToCook from "../WantToCook/WantToCook";



const OurRecipes = () => {

    const [wont, setWont] = useState([]);
    
  const handleWont = recipe =>{
    const newRecipe = [...wont, recipe]
    setWont(newRecipe)
  }
    return (
        <div className="m-5">
            <div className="mb-5">
            <h1 className="text-5xl text-center mb-4">Our Recipes</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate  <br />netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="flex gap-4">
                <Recipes handleWont={handleWont}></Recipes>
                <WantToCook wont={wont}></WantToCook>
            </div>
        </div>
    );
};


export default OurRecipes;