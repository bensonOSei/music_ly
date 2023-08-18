import { Link } from "react-router-dom";
import botLogo from "../assets/illustrations/blue-robot.png";
import { APP_NAME } from "../utils/constants";
import { OnlineContext } from "../serviceProviders/OnlineContext";
import { useContext } from "react";
import { UserShort } from "./header-components/UserShort";
import { AuthContext } from "../serviceProviders/contexts/AuthContext";

export const ChatHeader = () => {
	const { isOnline } = useContext(OnlineContext);
	const { isLoggedIn } = useContext(AuthContext);
	return (
		<div className="px-8 py-1 flex items-center justify-between">
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
					{isOnline ? (
						<>
							<span className="relative w-2 h-2 rounded-full bg-green-700 after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-green-700/50 after:animate-ping after:rounded-full "></span>
							<span className="text-green-700">online</span>
						</>
					) : (
						<>
							<span className="relative w-2 h-2 rounded-full bg-red-700 "></span>
							<span className="text-red-700">offline</span>
						</>
					)}
				</div>
			</div>

			{isLoggedIn ? (
				<UserShort />
			) : (
				<>
					<div className="p-1 text-sm flex flex-col md:flex-row items-end md:items-center">
						<span>Do more with {APP_NAME}.</span>
						<Link
							to={"/start/signup"}
							className="p-2 rounded-md bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs ml-1 ">
							Sing up
						</Link>
					</div>
				</>
			)}
		</div>
	);
};
