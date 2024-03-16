import PropTypes from 'prop-types';



const Card = ({recipie, handleCoocking}) => {
    // console.log(recipie)
    const {recipe_image,  recipe_name, short_description, ingredients, preparing_time, calories} = recipie

    return (
        <div>
            <div className="card card-compact bg-base-100 border">
                <figure><img  src={recipe_image} alt={recipe_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr />
                    <h3 className='text-xl font-bold'>Ingredients: {ingredients.length}</h3>
                    {
                        ingredients.map((ingredient, idx) => <li className='list-disc' key={idx}>{ingredient}</li>)
                    }
                    <hr />
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <img src="https://i.ibb.co/mvZcBcf/clock.png" alt="" />
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className='flex items-center'>
                            <img src="https://i.ibb.co/80qj5zP/fire.png" alt="" />
                            <p>{calories} Calories </p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handleCoocking(recipie)} className="btn bg-green-500 text-black rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes ={
    recipie:PropTypes.object.isRequired,
    handleCoocking:PropTypes.func.isRequired,
}

export default Card;