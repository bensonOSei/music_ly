import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faPlay, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { SONG_DETAILS_ENDPOINT } from "../../utils/constants";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const SpotifyPop = ({ data }) => {
	const [songUrl, setSongUrl] = useState("");
	const [isFetching, setIsFetching] = useState(false);
	const [isError, setIsError] = useState(false);
	const { artist, track } = data;

	useEffect(() => {
        // console.log(data)
        // return
		setIsFetching(true);
		fetch(SONG_DETAILS_ENDPOINT, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (!res.ok) {
					setIsError(true);
					return res.status;
				}
				return res.json();
			})
			.then((track) => {
				if (isError) {
					return;
				}
				setSongUrl(track.data);
				console.log(track);
			})
			.catch((err) => {
				setIsError(true);
				console.log(err);
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, [data, isError]);
	return (
		<motion.div
			initial={{ opacity: 0, y: 100, x: "-50%", width: 0 }}
			animate={{ opacity: 1, y: 0, x: "-50%", width: "fit-content" }}
			exit={{ opacity: 0, y: 100, width: 0 }}
			className="flex items-center fixed bottom-48 z-50 left-1/2 bg-slate-900/70 text-white ring-2 ring-white p-2 px-5 rounded-md shadow-xl max-w-sm">
			<FontAwesomeIcon
				icon={faSpotify}
				className="mr-2 text-3xl"
			/>
			<div className="flex items-center gap-2">
				<div className="flex flex-col">
					<span className="font-bold text-ellipsis">{track}</span>
					<span className="text-xs italic text-ellipsis">
						{artist}
					</span>
				</div>

				{isError ? (
                    <span className="text-xs italic">
                        Failed to fetch song details
                    </span>
                ) :
					(isFetching ? (
						<FontAwesomeIcon
							icon={faSpinner}
							className="mr-2 animate-spin"
						/>
					) : (
						<a
							href={songUrl}
							target="_blank"
							rel="noreferrer"
							className="p-2 rounded-full hover:bg-slate-500 w-8 h-8 grid place-items-center transition opacity-40 hover:opacity-100">
							<FontAwesomeIcon icon={faPlay} />
						</a>
					))}
			</div>
			<span></span>
		</motion.div>
	);
};

SpotifyPop.propTypes = {
	data: PropTypes.object.isRequired,
};
