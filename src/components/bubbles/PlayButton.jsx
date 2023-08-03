import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

export const PlayButton = ({ onClick }) => {
  return (
    <div className="bg-primary-100 bg-opacity-50 hover:bg-opacity-100 w-fit px-2 rounded-full mt-2">
    <button
        onClick={onClick}
        className="text-sm font-semibold text-slate-600">
        <FontAwesomeIcon
            icon={faSpotify}
            className="text-green-800 mr-1"
        />
        Play
    </button>
</div>
)
}

PlayButton.propTypes = {
    onClick:  PropTypes.func
}

