import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const GeneratingResponsePop = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100, x: "-50%" }}
			animate={{ opacity: 1, y: 0, x: "-50%" }}
			exit={{ opacity: 0, y: 100 }}
			className="fixed bottom-48 z-50 left-1/2 bg-slate-900/70 text-white ring-2 ring-white p-2 rounded-md shadow-xl">
			<FontAwesomeIcon
				icon={faSpinner}
				className="mr-2 animate-spin"
			/>
			<span>
                Generating response. Please wait...
			</span>
		</motion.div>
	);
};
