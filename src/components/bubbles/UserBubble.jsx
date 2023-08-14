import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "../../serviceProviders/contexts/UserContext";

export const UserBubble = ({ query }) => {
	const { user } = useContext(UserContext)

	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			className="flex items-center gap-2 self-end">
			<div className="w-fit max-w-xl bg-primary-500 text-white border border-slate-200 p-2 rounded-xl rounded-tr-none mb-3 ">
				{query}
			</div>

			{
				user?.imagePath && (
					<div className="w-6 h-6">
						<img
							src={user.imagePath}
							alt="User avatar"
							className="w-full h-full object-contain rounded-full"
						/>
					</div>
				)
			}
			
		</motion.div>
	);
};

UserBubble.propTypes = {
	query: PropTypes.string.isRequired,
};
