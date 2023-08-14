import { Navigate, Outlet } from "react-router-dom";
import welcomeImg from "../assets/illustrations/dancing-lady.png";
import { AuthContext } from "../serviceProviders/contexts/AuthContext";
import { useContext } from "react";

export const Start = () => {
	const { isLoggedIn } = useContext(AuthContext);

	if (isLoggedIn) return <Navigate to="/" />;

	console.log(isLoggedIn)
	return (
		<div className="flex flex-col-reverse md:flex-row h-screen">
			<div className="flex-1 grid md:place-items-center p-5 ">
				<Outlet />
			</div>

			<div className="flex-1 md:p-10 h-10 md:h-full">
				<div className="w-full h-full bg-primary-500 rounded-lg flex flex-row md:flex-col items-center md:justify-center p-5">
					<h1 className="text-xl md:text-3xl  font-bold md:text-center text-white">
						Where words fail, music speaks
					</h1>
					<div className="flex flex-col items-center h-full w-full max-w-sm md:mt-5">
						<img
							src={welcomeImg}
							alt="Welcome"
							className="w-full h-full object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
