import PropTypes from 'prop-types';


const Table = ({wont, handlePreparing}) => {
    const {recipe_name, preparing_time ,calories   } = wont;
    return (
        <div>
            <div className='flex bg-slate-100 px-4 items-center rounded-lg mt-4 '>
             <div className='flex w-full justify-around p-3 gap-3 '>
                <p>{recipe_name}</p>
                <p>{preparing_time} <br /> minutes</p>
                <p>{calories} <br /> calories</p>

             </div>
             <button onClick={()=> handlePreparing(wont) } className="bg-green-400 p-2 rounded-xl mt-3"> Preparing</button>
        </div>

        
        </div>
    );
};
Table.propTypes = {
    wont: PropTypes.object,
    handlePreparing: PropTypes.func
}

export default Table;