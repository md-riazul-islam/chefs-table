import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

const Recipe = ({recipe, handleWont}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className='p-5 border-2 rounded-lg space-y-4'>
            <img className='rounded-lg h-52 w-full' src={recipe_image} alt="" />
            <h3 className="text-3xl">{recipe_name}</h3>
            <p>{short_description}</p>
            <hr />
            <div>
                <h3 className="text-2xl">Ingredients: 6</h3>
              
                    {
                        ingredients.map((ing, idx) => <ul key={idx}><li>{ing}</li></ul>)
                    }
               
            </div>
            <hr />
            <div className='flex gap-5'>
                <p className='flex gap-2 items-center'><IoTimeOutline />{preparing_time}</p>
                <p className='flex gap-2 items-center'><FaFire />{calories}</p>
            </div>

            <button onClick={()=>  handleWont(recipe)} className='bg-green-400 p-3 rounded-3xl'>Wont to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWont: PropTypes.func
}

export default Recipe;