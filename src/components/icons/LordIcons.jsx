import PropTypes from 'prop-types';

export const LordIcons = ({ icon, trigger = 'loop', delay, colors, size = 250, stroke}) => {
    const iconColors = `primary:${colors.primary},secondary:${colors.secondary}`
	return (
		<div>
			<lord-icon
				src={`https://cdn.lordicon.com/${icon}.json`}
				trigger={trigger}
				delay={delay}
				colors={iconColors}
                stroke={stroke}
				style={{
					width: size + "px",
					height: size + "px",
				}}></lord-icon>
		</div>
	);
};

LordIcons.propTypes = {
    icon: PropTypes.string.isRequired,
    trigger: PropTypes.string,
    delay: PropTypes.number,
    colors: PropTypes.object,
    size: PropTypes.string,
    stroke: PropTypes.number,
}

