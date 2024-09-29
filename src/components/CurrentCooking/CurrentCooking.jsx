import PropTypes from 'prop-types';

const CurrentCooking = ({recipe, index}) => {
    const {title, time, calories} = recipe;

    return (
        <>

            <tr className="bg-base-200">
              <th>{index}</th>
              <td>{title}</td>
              <td>{time} minutes</td>
              <td>{calories} calories</td>
            </tr>
            
        </>
    );
};

CurrentCooking.propTypes = {
    recipe: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleCurrentCook: PropTypes.func,
};

export default CurrentCooking;