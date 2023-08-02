import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

export const PlayButton = ({ link }) => {
  return (
    <div className="bg-primary-100 bg-opacity-50 hover:bg-opacity-100 w-fit px-2 rounded-full mt-2">
    <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-semibold text-slate-600">
        <FontAwesomeIcon
            icon={faSpotify}
            className="text-green-800 mr-1"
        />
        Play
    </a>
</div>
)
}

PlayButton.propTypes = {
    link:  PropTypes.string.isRequired
}

