import { APP_NAME } from "../utils/constants";
import PropTypes from 'prop-types';


export const Footer = ({ color = "text-primary-200"}) => {
	return (
		<footer className={`w-full max-w-lg mx-auto text-center text-xs mt-3 ${color}`}  >
			Free Song Recommender AI. {APP_NAME} may produce inaccurate information
			about Artist, Songs, Genres . <br/> {APP_NAME} July 2023 Version. All rights reserved.
		</footer>
	);
};

Footer.propTypes = {
    color: PropTypes.string
}
