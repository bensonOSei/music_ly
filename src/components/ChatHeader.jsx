import { Link } from "react-router-dom";
import botLogo from "../assets/illustrations/blue-robot.png";
import { APP_NAME } from "../utils/constants";

export const ChatHeader = () => {
	return (
		<div className="px-5 py-2 flex items-center justify-between">
			<div className="flex items-center">
				<div className="w-7 h-7">
					<Link to={"/"}>
						<img
							src={botLogo}
							alt="Music.ly logo"
							className="w-full h-full object-contain"
						/>
					</Link>
				</div>
				<Link to={"/"}>
					<h1 className="font-bold text-lg text-primary-300">
						{APP_NAME}
					</h1>
				</Link>

				<div className="ml-4 flex items-center gap-1">
					<span className="relative w-2 h-2 rounded-full bg-green-700 after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-green-700/50 after:animate-ping after:rounded-full "></span>
					<span className="text-green-700">online</span>
				</div>
			</div>
		</div>
	);
};
