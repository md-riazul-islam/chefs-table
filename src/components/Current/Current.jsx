import PropTypes from 'prop-types';

const Current = ({prepar}) => {
    const{calories,preparing_time,recipe_name} = prepar;

    return (
        <div className="flex justify-around gap-3 p-3">
            <p>{recipe_name}</p>
            <p>{preparing_time} minutes</p>
            <p>{calories} calories</p>
        </div>
    );
};
Current.propTypes = {
    prepar: PropTypes.object
}

export default Current;