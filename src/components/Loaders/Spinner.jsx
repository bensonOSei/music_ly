import "./loader.css";
import PropTypes from "prop-types";


export const Spinner = ({ size = 150, color = '#ffff', stroke = 50 }) => {
	return (
		<div>
			<lord-icon
				src="https://cdn.lordicon.com/xjovhxra.json"
				trigger="loop"
				colors={`primary:${color},secondary:#08a88a`}
				stroke={stroke}
				style={{
					width: `{${size}px}`,
					height: `{${size}px}`,
				}}></lord-icon>
		</div>
	);
};

Spinner.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	stroke: PropTypes.number,
}
