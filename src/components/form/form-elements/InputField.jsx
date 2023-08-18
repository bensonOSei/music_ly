import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import './form.css'
export const InputField = ({
	label,
	icon,
	id,
	type,
	placeholder,
	onChange,
    required = false
}) => {
	return (
		<div className="input-field flex items-center gap-1 w-full bg-slate-100 rounded-md overflow-hidden p-2 transition">
            <div>
                <FontAwesomeIcon icon={icon} className="text-lg px-2 text-slate-400 input-icon" />
            </div>

			<div className="w-full">
                <label htmlFor={id} className="hidden text-slate-600 text-sm">{label}</label>
				<input
					type={type}
					id={id}
					name={id}
					onChange={onChange}
					placeholder={placeholder}
                    required={required}
					className="bg-inherit border-none w-full focus:outline-none focus:ring-0"
				/>
			</div>
		</div>
	);
};

InputField.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.any.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
    required: PropTypes.bool
};
