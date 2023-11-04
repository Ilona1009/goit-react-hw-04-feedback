import PropTypes from 'prop-types'; 
import Button from '../Button/Button';

export const OptionsList = ({ options,leaveFeedback }) => { 
  return (
    options.map(option => {
    return (
                    <Button
                    key={option}
        type="button"
        onClick={() => leaveFeedback(option)}
      >
        {option}
                    </Button>)
            })
)}
        




OptionsList.propTypes ={
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  // onLeaveFeedback:PropTypes.func.isRequired,
}

export default OptionsList;