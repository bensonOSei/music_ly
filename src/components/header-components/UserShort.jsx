import {
	faEdit,
	faSignOutAlt,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../serviceProviders/contexts/UserContext";
import { AuthContext } from "../../serviceProviders/contexts/AuthContext";
import { Modal } from "../modals/Modal";
import { ConfirmPrompt } from "../modals/prompts/ConfirmPrompt";
import { ChooseAvatar } from "../modals/prompts/ChooseAvatar";
import { Link } from "react-router-dom";

export const UserShort = () => {
	const [showUserMenu, setShowUserMenu] = useState(false);
	const { user, fetchUser } = useContext(UserContext);
	const { token, logout } = useContext(AuthContext);
	const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);
	const [showAvatarPrompt, setShowAvatarPrompt] = useState(false);

	const toggleUserMenu = () => {
		setShowUserMenu(!showUserMenu);
	};

	useEffect(() => {
		console.log(user);

		if (!user) {
			fetchUser(token);
		}
	}, [token, user, fetchUser]);

	if (user === null)
		return (
			<div className="w-8 h-8 rounded-full bg-primary-10 animate-pulse"></div>
		);

	return (
		<div className="flex items-center gap-1 px-3 hover:bg-primary-100/20 p-1 rounded-md transition relative ">
			<div
				onClick={toggleUserMenu}
				className="w-8 h-8 rounded-full bg-primary-100 cursor-pointer">
				{user.imagePath !== null ? (
					<img
						src={user.imagePath}
						alt="User"
						className="w-full h-full object-cover rounded-full"
					/>
				) : null}
			</div>
			<div className="font-semibold">{user.firstName}</div>
			<AnimatePresence>
				{showLogoutPrompt && (
					<Modal
						element={
							<ConfirmPrompt
								message="Are you sure you want to sign out?"
								onAccept={logout}
								onDecline={() => setShowLogoutPrompt(false)}
							/>
						}
					/>
				)}

				{showAvatarPrompt && (
					<Modal
						closeModal={() => setShowAvatarPrompt(false)}
						element={<ChooseAvatar />}
					/>
				)}

				{showUserMenu && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="absolute top-14 right-0 bg-white z-50 w-56 h-fit rounded-md flex flex-col gap-1 items-center p-2 shadow-2xl">
						<button
							onClick={() => setShowUserMenu(false)}
							className="absolute top-2 right-5 p-2 rounded-xl opacity-50 hover:opacity-100">
							<FontAwesomeIcon icon={faTimes} />
						</button>
						<div className="flex flex-col items-center gap-2 ">
							<div className="w-16 h-16 rounded-full bg-primary-100 relative">
								{user.imagePath !== null && (
									<img
										src={user.imagePath}
										alt="User"
										className="w-full h-full object-cover rounded-full"
									/>
								)}

								<div
									onClick={() => {
										setShowAvatarPrompt(true);
										setShowUserMenu(false);
									}}
									className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-black opacity-20 hover:opacity-80 z-50 transition grid place-items-center">
									<FontAwesomeIcon
										icon={faEdit}
										className="text-white text-xs cursor-pointer"
									/>
								</div>
							</div>
							<div className="text-sm text-gray-500 font-semibold">
								Hi, {user.firstName}!
							</div>
						</div>

						<div className="p-2 rounded-lg bg-primary-100/20 w-full">
							<button
								onClick={() => {
									setShowLogoutPrompt(true);
									setShowUserMenu(false);
								}}
								className="w-full flex items-center justify-between text-left text-sm font-semibold hover:bg-primary-100/20 p-1 rounded-md transition">
								<span>Logout</span>
								<span>
									<FontAwesomeIcon icon={faSignOutAlt} />
								</span>
							</button>
						</div>
						<div className="font-bold flex items-center text-xs  my-2" >
							<Link className="text-gray-500 hover:text-primary-900" to="">Privacy Policy</Link>
							<div className="mx-1 w-1 h-1 rounded-full bg-gray-500"></div>
							<Link className="text-gray-500 hover:text-primary-900" to="/contributors">Contributors</Link>

						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
