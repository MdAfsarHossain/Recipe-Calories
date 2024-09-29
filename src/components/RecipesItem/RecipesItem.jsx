import PropTypes from "prop-types";
import { FaHotjar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const RecipesItem = ({ recipe, handleWantToCook }) => {
  const { title, description, cover_img, ingredients, time, calories } = recipe;

  return (
    <div>
      <div className="card bg-base-100 border-2 shadow-xl px-5 py-5 space-y-2 hover:scale-100">
        <figure className="w-full h-56">
          <img
            src={cover_img}
            alt="Shoes"
            className="rounded-xl w-full h-full"
          />
        </figure>

        <div className="flex flex-col gap-1">
          <h2 className="card-title">{title}</h2>
          <p className="mb-2">{description}</p>

          <div className="border-t-2 border-b-2 py-2">
            <h3 className="font-bold mb-2">Ingredinets: {ingredients.length}</h3>
            {ingredients.map((ingredient, index) => (
              <li className="text-gray-500" key={index}>
                <span>{ingredient}</span>
              </li>
            ))}
          </div>

          <div className="flex justify-between">
            <span className="text-lg text-gray-600 flex flex-row justify-center items-center gap-2">
              <IoTimeOutline />
              <p>{time} minutes</p>
            </span>

            <span className="text-lg text-gray-600 flex flex-row justify-center items-center gap-2">
            <FaHotjar />
              <p>{calories} calories</p>
            </span>
          </div>

          <div className="mt-1">
            <button 
            onClick={() => handleWantToCook(recipe)}
            className="btn bg-[#0BE58A] font-bold rounded-full border-2 border-[#0BE58A] hover:border-[#0BE58A] hover:bg-transparent">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipesItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};

export default RecipesItem;
