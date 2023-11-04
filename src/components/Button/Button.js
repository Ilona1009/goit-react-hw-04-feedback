import PropTypes from 'prop-types';
import { ButtonStyled } from './ButtonStyled';

const Button = ({ children, ...restProps }) => {
    return <ButtonStyled {...restProps}>{children}</ButtonStyled>;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button;