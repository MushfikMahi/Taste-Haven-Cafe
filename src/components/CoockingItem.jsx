import PropTypes from 'prop-types';


const CoockingItem = ({ coocking, idx, handleCurrentCoocking }) => {

    const { recipe_name, preparing_time, calories } = coocking
    return (
        <>
            <tr>
                <th>{idx+1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td>
                <button onClick={()=>handleCurrentCoocking(coocking)} className="btn bg-green-500 text-black rounded-full">Preparing</button>
                </td>
            </tr>
        </>
    );
};

CoockingItem.propTypes ={
    coocking:PropTypes.object.isRequired,
    handleCurrentCoocking:PropTypes.func.isRequired,
    idx:PropTypes.number.isRequired,
}



export default CoockingItem;