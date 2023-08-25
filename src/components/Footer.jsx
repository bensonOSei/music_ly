import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/constants";
import PropTypes from 'prop-types';


export const Footer = ({ color = "text-primary-200"}) => {
	return (
		<footer className={`w-full max-w-xl mx-auto text-center text-xs mt-3 ${color}`}  >
			Free song recommender bot. {APP_NAME} may produce inaccurate information
			about artist, songs and genres.
			{/* Developed by <Link to="/contributors" className="italic hover:underline">Group 5</Link> */}
			<br/> {APP_NAME} August 2023 Version. All rights reserved.
		</footer>
	);
};

Footer.propTypes = {
    color: PropTypes.string
}
