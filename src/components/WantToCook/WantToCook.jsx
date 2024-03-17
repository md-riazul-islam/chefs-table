import PropTypes from 'prop-types';
import Table from '../Table/Table';
import Currently from '../Currentlys/Currently';
import { useState } from 'react';

const WantToCook = ({wont}) => {

    const [preparing, setPreparing] = useState([]);
 

    const  handlePreparing = wont =>{
        const newWont = [...preparing, wont];
        setPreparing(newWont);
    }

   

    return (
        <div className="md:w-2/5 border-2 p-3 rounded-lg">
            <h1 className="text-4xl text-center mb-3">wont to cook: {wont.length}</h1>
            <hr />
           <div className="">
           <table className="w-full text-center ">
                
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">Calories</th>
                    </tr>
                </thead>
         
            </table>
            <div className='w-full'>
            {
                wont.map((wont, idx) => <Table wont={wont} key={idx} handlePreparing={handlePreparing} ></Table>)
            }
            
            </div>
           </div>

           <Currently preparing={preparing}></Currently>
        </div>
    );
};


WantToCook.propTypes = {
    wont: PropTypes.array
}

export default WantToCook;