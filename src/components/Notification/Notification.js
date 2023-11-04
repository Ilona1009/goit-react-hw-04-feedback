import PropTypes from 'prop-types';
import { NotificationStyled } from './NotificationStyled';
const Notification = ({message}) => {
    return (
        <NotificationStyled>
            {message}
        </NotificationStyled>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification;