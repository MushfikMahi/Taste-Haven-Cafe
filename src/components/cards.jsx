import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import PropTypes from 'prop-types';


const Cards = ({handleCoocking}) => {

    const [recipies, setRecipies] = useState([])

    useEffect(()=>{
        fetch('../../public/data.json')
        .then(res => res.json())
        .then(data => setRecipies(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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