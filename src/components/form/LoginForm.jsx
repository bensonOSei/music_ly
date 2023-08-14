import { InputField } from "./form-elements/InputField";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext, useEffect, useRef } from "react";
import FormButton from "./form-elements/FormButton";
import { AuthContext } from "../../serviceProviders/contexts/AuthContext";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const LoginForm = () => {
	const [formData, setFormData] = useState({});
	const { login, authError } = useContext(AuthContext);
	const [error, setError] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const formRef = useRef(null);

	const handleChange = (e) => {
		e.preventDefault();

		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// check if form data is empty
		setError(false);
		setSubmitting(true);

		login(formData);
	};

	useEffect(() => {
		if (authError) {
			console.log(authError);
			setError(true);
			setSubmitting(false);
		}
	}, [authError]);

	return (
		<motion.form
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			className="flex flex-col gap-5 w-full max-w-md ring-1 ring-slate-100 p-5 rounded-lg shadow-xl shadow-slate-300/40"
			onSubmit={handleSubmit}
			ref={formRef}>
			<h2 className="text-center text-2xl md:text-3xl font-bold text-primary-700">
				Sign In
			</h2>

			<AnimatePresence>
				{error && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="text-red-500 p-2 text-center bg-red-100 w-full font-semibold">
						{authError}
					</motion.div>
				)}
			</AnimatePresence>

			<InputField
				label="Email"
				icon={faEnvelope}
				id="email"
				type="email"
				placeholder="Enter your email"
				onChange={handleChange}
				required
			/>

			<InputField
				label="Password"
				icon={faLock}
				id="password"
				type="password"
				placeholder="Enter your password"
				onChange={handleChange}
				required
			/>

			<FormButton
				text="Sign In"
				loading={submitting}
			/>

			<p>
				Don&apos;t have an account?
				<Link
					to="/start/signup"
					relative="route"
					className="text-primary-500 hover:text-primary-600 font-semibold">
					{" "}
					Sign Up
				</Link>
			</p>
		</motion.form>
	);
};
