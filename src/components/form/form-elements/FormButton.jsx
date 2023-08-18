import PropTypes from "prop-types";
import { Spinner } from "../../Loaders/Spinner";

const FormButton = ({ text, loading = false }) => {
    const btnClass = `{ bg-primary-500  focus:outline-none focus:ring-4 focus:ring-primary-100 text-white rounded-md p-3 font-semibold text-lg px-5 w-full} ${loading ? 'cursor-not-allowed opacity-50' : ' hover:bg-primary-600 '}`
	return (
		<button
			className={btnClass}
            disabled={loading}
			type="submit">
			{
                loading ? <Spinner size={30} stroke={60} /> : text
            }

		</button>
	);
};

FormButton.propTypes = {
	text: PropTypes.string.isRequired,
	loading: PropTypes.bool,
};

export default FormButton;
