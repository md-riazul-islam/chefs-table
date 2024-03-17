import Recipes from "../Recipes/Recipes";
import WantToCook from "../WantToCook/WantToCook";


const OurRecipes = () => {
    return (
        <div className="m-5">
            <div className="mb-5">
            <h1 className="text-5xl text-center mb-4">Our Recipes</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate  <br />netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="flex gap-4">
                <Recipes></Recipes>
                <WantToCook></WantToCook>
            </div>
        </div>
    );
};

export default OurRecipes;