import CoockingItem from "./CoockingItem";
import PropTypes from 'prop-types';
import CurrentCoockingItem from "./currentCoockingItem";

const Cart = ({coockings, handleCurrentCoocking, currentCoocking}) => {
    const time = currentCoocking.reduce((acc, curr) => acc+curr.preparing_time, 0)
    const calories = currentCoocking.reduce((acc, curr) => acc+curr.calories, 0)
    console.log(time)


    return (
        <div className="md:col-span-2 border rounded-2xl p-5 space-y-5">
            <div>
                <div className="overflow-x-auto">
                <h1 className="text-3xl font-bold text-center">Want to cook: {coockings.length}</h1>
                <hr className="w-2/3 mx-auto" />
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    coockings.map((coocking, idx)=> <CoockingItem handleCurrentCoocking={handleCurrentCoocking} idx={idx} key={idx} coocking={coocking}></CoockingItem>)
                                }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                <h1 className="text-3xl font-bold text-center">Currently cooking: {currentCoocking.length}</h1>
                <hr className="w-2/3 mx-auto" />
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentCoocking.map((currentCoock, idx)=><CurrentCoockingItem idx={idx} currentCoock={currentCoock} key={idx}></CurrentCoockingItem>)
                            }
                            
                            
                        </tbody>
                    </table>
                    <div className="md:flex justify-between px-10">
                        <h2 className="text-xl font-bold">Preparing Time = {time} minutes</h2>
                        <h2 className="text-xl font-bold">Total Calories = {calories} calories</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};


Cart.propTypes ={
    coockings:PropTypes.array.isRequired,
    handleCurrentCoocking:PropTypes.func.isRequired,
    currentCoocking:PropTypes.array.isRequired,
}

export default Cart;