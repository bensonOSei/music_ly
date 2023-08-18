import { avatars } from "../../../utils/avatars";
import { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UserContext } from "../../../serviceProviders/contexts/UserContext";
import { getAuth, setAuth } from "../../../utils/helpers";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { Spinner } from "../../Loaders/Spinner";
import { SuccessPrompt } from "./SuccessPrompt";
import { AuthContext } from "../../../serviceProviders/contexts/AuthContext";

export const ChooseAvatar = () => {
	const [selectedAvatar, setSelectedAvatar] = useState(null);
	const { setUser, user } = useContext(UserContext);
	const { setToken } = useContext(AuthContext)
	const { imagePath } = user;
	const [sending, setSending] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const saveAvatar = () => {
		const token = getAuth();

		setError(null);
		if(token === null) return;

		if(imagePath === selectedAvatar) {
			setError("You are already using this avatar");
			return;
		}
		setSending(true);
		setSuccess(false);

		axios
			.patch(
				`${BACKEND_URL}/users/image`,
				{
					imagePath: selectedAvatar,
				},
				{
					headers: {
						"Content-Type": "application/json",
						"x-access-token": token,
					},
				}
			)
			.then((res) => {
				setUser(res.data.data)
				setAuth(res.data.token)
				setToken(res.data.token)
				setSelectedAvatar(null);
				setSuccess(true);
				// console.log(user);
			})
			.catch((err) => {
				console.log(err);
				setError(err.response.data.message);
			})
			.finally(() => setSending(false));
	};

	if (success) return <SuccessPrompt message="Avatar changed successfully" />;

	return (
		<div className="relative">
			<AnimatePresence>
				{!selectedAvatar ? (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}>
						<h1 className="text-3xl font-bold text-center">
							Choose an Avatar
						</h1>

						<div className="w-full flex flex-wrap gap-2 items-center justify-evenly  p-3">
							{avatars.map((avatar, index) => (
								<div
									key={index}
									className="w-24 h-24 bg-primary-100 rounded-full overflow-hidden cursor-pointer">
									<img
										onClick={() =>{
											setError(null)
											setSelectedAvatar(avatar)
										}
										}
										src={avatar}
										alt="Avatar"
										className="w-full h-full object-cover hover:scale-110 transition"
									/>
								</div>
							))}

							<p
							className="text-sm text-center w-full text-primary-300 bg-primary-100/30 p-2 rounded-md mt-2"
							>
								Click on an avatar to select it as your profile
							</p>
						</div>
					</motion.div>
				) : (
					<div className="flex flex-col items-center gap-2">
						<h1 className="text-3xl font-bold">Selected Avatar</h1>

						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							className="w-36 h-36 bg-primary-100 rounded-full overflow-hidden cursor-pointer">
							<img
								src={selectedAvatar}
								alt="Avatar"
								className="w-full h-full object-cover hover:scale-110 transition"
							/>
						</motion.div>

						{error && (
							<p className="text-red-500 text-sm">{error}</p>
						)}

						<button
							onClick={saveAvatar}
							className={`w-full bg-primary-500 hover:bg-primary-600 text-white p-3 font-semibold rounded-md ${
								sending && "cursor-not-allowed opacity-30"
							}`}>
							{sending ? <Spinner /> : "Save"}
						</button>
						{!sending && (
							<button
								onClick={() => setSelectedAvatar(null)}
								className="p-2 bg-primary-100/30 hover:bg-primary-100/50 font-bold rounded-md">
								Change avatar
							</button>
						)}
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};
