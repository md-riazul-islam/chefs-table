import Current from "../Current/Current";
import PropTypes from 'prop-types';


const Currently = ({preparing}) => {
    console.log(preparing,'inside')
    return (
        <div className="mt-5 p-4">
            <h2 className="text-3xl text-center p-3">Currently cooking: {preparing.length} </h2>
            <hr />
            <div>
            <table className="w-full text-center mt-3 ">
                
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">Calories</th>
                    </tr>
                </thead>
         
            </table>
            </div>
            <div className="bg-slate-200 rounded-lg mt-3">
                {
                    preparing.map((prepar, idx) =><Current prepar={prepar} key={idx}></Current>)
                }
            </div>
        </div>
    );
};

Currently.propTypes = {
    preparing: PropTypes.array
}


export default Currently;