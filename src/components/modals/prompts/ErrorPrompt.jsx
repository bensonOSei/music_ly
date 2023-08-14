import { Error } from "../../icons/Error";
import PropTypes from 'prop-types';


export const ErrorPrompt = ({ message }) => {
  return (
    <div className="flex flex-col items-center">
        <div>
            <Error />
        </div>
        <div className="text-center text-lg font-semibold text-primary-700">
            {message}
        </div>
    </div>
  )
}

ErrorPrompt.propTypes = {
    message: PropTypes.string.isRequired,
}
