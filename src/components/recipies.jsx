import { useState } from "react";
import Cards from "./cards";
import Cart from "./cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipies = () => {

    const [coockings, setCoocking] = useState([]);

    const handleCoocking = recepie => {
       
        
        const showToastify = coockings.find(coocking =>  coocking.recipe_id == recepie.recipe_id)
        if(showToastify){
            toast('Already Exist')
        }
        else{
            const newCoock = [...coockings, recepie]
            setCoocking(newCoock)
        }
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
    
    return (
        <div className="md:my-24 my-10 space-y-10">
            <div className="text-center md:w-2/3 mx-auto space-y-5 px-5">
                <h1 className="text-6xl font-bold">Our Recipes</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
                <ToastContainer></ToastContainer>
            </div>
            <div className="md:flex gap-5">
                <Cards handleCoocking={handleCoocking}></Cards>
                <Cart currentCoocking={currentCoocking} handleCurrentCoocking={handleCurrentCoocking} coockings={coockings}></Cart>
            </div>
        </div>
    );
};

export default Recipies;