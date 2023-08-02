import botLogo from "../../assets/illustrations/blue-robot.png";
import { motion } from "framer-motion";
import { PlayButton } from "./PlayButton";
import PropTypes from "prop-types";

export const AiBubble = ({ response, play = null}) => {
	return (
		<motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
         className="flex items-center gap-2 mb-2">
			<div className="w-6 h-6">
				<img
					src={botLogo}
					alt="Rec.AI logo"
					className="w-full h-full object-contain"
				/>
			</div>
			<div className="w-fit max-w-xl bg-white text-slate-800 border border-slate-200 p-2 rounded-2xl rounded-tl-none self-start">
                {response}
                {
                    play && (
                        <PlayButton link={play} />
                    )
                }
			</div>

		</motion.div>
	);
};


AiBubble.propTypes = {
    response: PropTypes.string.isRequired,
    play: PropTypes.string
}
