import { APP_NAME, members } from "../utils/constants";
import botLogo from "../assets/illustrations/blue-robot.png";
import { Footer } from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Contributors = () => {
	return (
		<div className="w-full p-5">
			<div className="mx-auto w-full max-w-2xl">
				<div className="flex items-center gap-2 justify-center">
					<div className="w-10 h-10">
						<img
							src={botLogo}
							alt="bot logo"
							className="w-full h-full object-contain"
						/>
					</div>
					<h1 className="text-3xl font-bold text-primary-300">
						{APP_NAME}
					</h1>
				</div>
				<h1 className="text-2xl font-bold text-center mt-5">
					Contributors
				</h1>
				<small className="max-w-md">
					{APP_NAME} was developed by Group 5 as a project for the
					Project Management course at the University of Cape Coast.
				</small>
				<h3 className="text-xl font-bold mt-5">Members</h3>
				<div className="w-full p-3 bg-primary-100/10 mt-3 rounded-lg">
					{members.map(({ id, name }) => (
						<div
							key={id}
							className="p-2 bg-primary-100/30 rounded-md mb-5">
							<h3 className="text-lg font-bold">{name}</h3>
						</div>
					))}
				</div>
				<Link
					to="/chat"
					className="px-7 py-2 rounded-md bg-primary-500 hover:bg-primary-600 text-slate-50 mt-3 inline-block">
					Start Chatting
					<FontAwesomeIcon
						icon={faArrowRight}
						className="ml-2"
					/>
				</Link>
			</div>

			<Footer />
		</div>
	);
};
