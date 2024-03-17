import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import PropTypes from 'prop-types';


const Cards = ({handleCoocking}) => {

    const [recipies, setRecipies] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRecipies(data))
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:col-span-2 lg:col-span-4 gap-5">
            {
                recipies.map(recipie => <Card handleCoocking={handleCoocking} key={recipie.recipe_id} recipie={recipie} ></Card>)
            }
        </div>
    );
};


Cards.propTypes ={
    handleCoocking:PropTypes.func.isRequired,
}


export default Cards;