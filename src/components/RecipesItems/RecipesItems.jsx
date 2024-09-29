import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import RecipesItem from "../RecipesItem/RecipesItem";

const RecipesItems = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])


    return (
        <div className=" lg:w-2/3 border-0 px-0">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-5">
                {
                    recipes.map(recipe => 
                        <RecipesItem
                        key={recipe.id}
                        recipe={recipe}
                        handleWantToCook={handleWantToCook}
                        ></RecipesItem>
                    )
                }
            </div>
        </div>
    );
};

RecipesItems.propTypes = {
    handleWantToCook: PropTypes.func.isRequired,
};

export default RecipesItems;