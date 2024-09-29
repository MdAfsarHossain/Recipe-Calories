import PropTypes from "prop-types";
import CurrentCooking from "../CurrentCooking/CurrentCooking";
import RecipesBookMark from "../RecipesBookMark/RecipesBookMark";

const RecipesBookMarks = ({ wantToCook, currentCooking, handleCurrentCook, calculateTotalCalories, calculateTotalTime, totalTime, totalCalories}) => {

  return (
    <div className="w-full lg:w-1/3 border-2 rounded-xl h-fit pb-16 px-0">

      {/* Want to Cooking */}
      <h1 className="font-bold text-2xl  text-center pt-5 pb-3 mb-5  border-b-2 ml-10 mr-10">
        Want to cook: {wantToCook.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {wantToCook.map((recipe, index) => (
              <RecipesBookMark
                key={recipe.id}
                recipe={recipe}
                index={index + 1}
                handleCurrentCook={handleCurrentCook}
                calculateTotalCalories={calculateTotalCalories}
                calculateTotalTime={calculateTotalTime}
              ></RecipesBookMark>
            ))}
          </tbody>
        </table>
      </div>

      {/* Current Cooking */}
      <h1 className="font-bold text-2xl  text-center pt-5 pb-3 mb-5  border-b-2 ml-10 mr-10">
        Currently Cooking: {currentCooking.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {currentCooking.map((recipe, index) => (
              <CurrentCooking
                key={index}
                recipe={recipe}
                index={index + 1}
              ></CurrentCooking>
            ))}
            <tr className="bg-base-200">
              <th></th>
              <td></td>
              <td className="font-bold">Total Time= {totalTime} minutes</td>
              <td className="font-bold">Total Calories= {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

RecipesBookMarks.propTypes = {
  wantToCook: PropTypes.array.isRequired,
  currentCooking: PropTypes.array.isRequired,
  handleCurrentCook: PropTypes.func,
  calculateTotalCalories: PropTypes.func.isRequired,
  calculateTotalTime: PropTypes.func.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};

export default RecipesBookMarks;
