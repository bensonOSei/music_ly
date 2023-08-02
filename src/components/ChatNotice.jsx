import { faBolt, faExclamationTriangle, faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChatNotice = () => {
	return (
		<div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-3 absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-slate-600">
			<div className="hidden sm:block w-full">
				<div className="flex flex-col items-center gap-3 mb-3">
					<div className="w-10 h-10 grid place-items-center rounded-full bg-primary-200/30">
						<FontAwesomeIcon
							icon={faBolt}
							className="text-primary-800/70 text-xl"
						/>
					</div>
					<h2 className="font-bold text-primary-800">Capabilities</h2>
				</div>
				<div className="text-sm p-1 bg-white rounded-md">
					Recommend a song based on your current mood
				</div>
				<div className="text-sm p-1 bg-white rounded-md my-2">
					Recommend a song based on a given genre
				</div>
				<div className="text-sm p-1 bg-white rounded-md">
					Recommend songs based your personal music taste
				</div>
			</div>

			<div className="w-full">
				<div className="flex flex-col items-center gap-3 mb-3">
					<div className="w-10 h-10 grid place-items-center rounded-full bg-primary-200/30">
						<FontAwesomeIcon
							icon={faFlask}
							className="text-primary-800/70 text-xl"
						/>
					</div>
					<h2 className="font-bold text-primary-800">Examples</h2>
				</div>

				<div className="text-sm p-1 bg-white rounded-md">
					I am feeling sad, recommend me a song to cheer me up
				</div>
				<div className="text-sm p-1 bg-white rounded-md my-2">
					Recommend a good afrobeats song for me
				</div>
				<div className="text-sm p-1 bg-white rounded-md">
					What song is best for a loner like myself?
				</div>
			</div>
			<div className=" w-full">
				<div className="flex flex-col items-center gap-3 mb-3">
					<div className="w-10 h-10 grid place-items-center rounded-full bg-primary-200/30">
						<FontAwesomeIcon
							icon={faExclamationTriangle}
							className="text-primary-800/70 text-xl"
						/>
					</div>
					<h2 className="font-bold text-primary-800">Limitations</h2>
				</div>

				<div className="text-sm p-1 bg-white rounded-md">
					May provide inaccurate information about recommended songs
				</div>
				<div className="text-sm p-1 bg-white rounded-md my-2">
					May occasionally predict or understand your mood wrongly
				</div>
				<div className="text-sm p-1 bg-white rounded-md">
					Limited source of songs. Limited to only Spotify
				</div>
			</div>
		</div>
	);
};
