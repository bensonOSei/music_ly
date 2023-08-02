import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const UserBubble = ({ query }) => {
	return (
		<motion.div
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
         className="w-fit max-w-xl bg-primary-500 text-white border border-slate-200 p-2 rounded-xl rounded-tr-none self-end mb-3 mr-2">
			{ query }
		</motion.div>
	);
};

UserBubble.propTypes = {
    query: PropTypes.string.isRequired
}
