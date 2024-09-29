import PropTypes from 'prop-types';

const RecipesBookMark = ({recipe, index, handleCurrentCook, calculateTotalCalories, calculateTotalTime}) => {
    const {title, time, calories} = recipe;

    const handleClick = () => {
        calculateTotalCalories(calories);
        calculateTotalTime(time);
        handleCurrentCook(recipe);
    }

    return (
        <>
            <tr className="bg-base-200">
              <th>{index}</th>
              <td>{title}</td>
              <td>{time} minutes</td>
              <td>{calories} calories</td>
              <td><button 
              onClick={handleClick}
              className='text-xs md:w-20 border-2 border-[#0BE58A] rounded-lg md:rounded-full px-1 md:px-0 py-1 font-bold bg-[#0BE58A] hover:bg-transparent'>Preparing</button></td>
            </tr>
            
        </>
    );
};

RecipesBookMark.propTypes = {
    recipe: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleCurrentCook: PropTypes.func.isRequired,
};

export default RecipesBookMark;