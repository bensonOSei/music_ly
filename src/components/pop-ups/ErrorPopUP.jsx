import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const ErrorPopUp = ({msg}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100, x: '-50%' }}
			animate={{ opacity: 1, y: 0, x: '-50%' }}
			exit={{ opacity: 0, y: 100 }}
			className="fixed bottom-48 z-50 left-1/2 bg-slate-900/70 text-white ring-2 ring-white p-2 rounded-md shadow-xl">
			<FontAwesomeIcon
				icon={faExclamationTriangle}
				className="mr-2"
			/>
			<span>
                {
                    msg || "Something went wrong. Please try again later."
                }
            </span>
		</motion.div>
	);
};

ErrorPopUp.propTypes = {
    msg: PropTypes.string
}
