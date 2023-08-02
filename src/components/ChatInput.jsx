import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const ChatInput = ({ onSubmit }) => {
	return (
		<div className="w-full max-w-2xl h-full bg-slate-50 mx-auto rounded-lg flex items-center justify-center overflow-hidden group chat-form transition">
			<form
				action="#"
                onSubmit={onSubmit}
				className="w-full flex items-center justify-evenly px-2">
				<input
					type="text"
					id="chat-message"
					name="chat-message"
					placeholder="What&apos;s your mood today?"
					className="border-0 bg-inherit w-11/12 input-box focus:ring-0"
				/>
				<button className="text-primary-500/60 hover:text-primary-500 hover:bg-primary-100/50 px-2 py-1 text-center rounded-md transition">
					<FontAwesomeIcon icon={faPaperPlane} />
				</button>
			</form>
		</div>
	);
};

ChatInput.propTypes = {
    onSubmit: PropTypes.func
}
