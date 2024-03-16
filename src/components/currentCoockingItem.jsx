
import PropTypes from 'prop-types';

const CurrentCoockingItem = ({idx, currentCoock}) => {
    const { recipe_name, preparing_time, calories } = currentCoock
    return (
        <>
            <tr>
                <th>{idx+1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
        </>
    );
};

CurrentCoockingItem.propTypes ={
    currentCoock:PropTypes.object.isRequired,
    idx:PropTypes.number.isRequired,
}


export default CurrentCoockingItem;