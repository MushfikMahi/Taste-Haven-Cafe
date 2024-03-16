import { useState } from "react";
import Cards from "./cards";
import Cart from "./cart";

const Recipies = () => {

    const [coockings, setCoocking] = useState([]);

    const handleCoocking = recepie => {
        const newCoock = [...coockings, recepie]
        setCoocking(newCoock)
    }

    const [currentCoocking, setCurrentCoocking] = useState([])

    const handleCurrentCoocking = current =>{
        const newCurrentCoock = coockings.filter(coocking=>coocking.recipe_id!=current.recipe_id)
        // console.log(newCurrentCoock)
        // console.log(current)
        setCoocking(newCurrentCoock)
        const newCurrent = [...currentCoocking, current]
        setCurrentCoocking(newCurrent)
    }

// console.log(coockings)
    return (
        <div className="my-24 space-y-10">
            <div className="text-center w-2/3 mx-auto space-y-5">
                <h1 className="text-6xl font-bold">Our Recipes</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div>
                <Cards handleCoocking={handleCoocking}></Cards>
                <Cart currentCoocking={currentCoocking} handleCurrentCoocking={handleCurrentCoocking} coockings={coockings}></Cart>
            </div>
        </div>
    );
};

export default Recipies;