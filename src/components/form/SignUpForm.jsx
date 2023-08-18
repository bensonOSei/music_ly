import { InputField } from "./form-elements/InputField";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext, useEffect } from "react";
import FormButton from "./form-elements/FormButton";
import { AuthContext } from "../../serviceProviders/contexts/AuthContext";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { checkPasswordStrength } from "../../utils/helpers";

export const SignUpForm = () => {
	const [formData, setFormData] = useState({});
	const { signup, authError } = useContext(AuthContext);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [passwordMatch, setPasswordMatch] = useState(true);
	const [passwordStrength, setPasswordStrength] = useState(null);


	const handleChange = (e) => {
		e.preventDefault();

		// console.log(formData);

		setFormData({ ...formData, [e.target.name]: e.target.value });

	};

	useEffect(() => {
		if(formData.password) {
			// console.log(passwordStrength)
			setPasswordStrength(checkPasswordStrength(formData.password))
		}
		if(formData.password && formData.confirmPassword) {
			setPasswordMatch(formData.password === formData.confirmPassword)
		}
	},[formData,passwordStrength])

	const handleSubmit = (e) => {
		e.preventDefault();

		setError(false)
		setErrorMsg("")

		if (passwordStrength < 5) {
			setError(true)
			setErrorMsg('Password is weak. Please set a stronger password')
		}

		if(!passwordMatch) {
			setError(true)
			setErrorMsg('Passwords do not match')
			return
		}
		setSubmitting(true);

		signup(formData);
	};

	useEffect(() => {
		if(authError) {
			setError(true)
			setSubmitting(false)
		}
	}, [authError])



	return (
		<motion.form
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			className="flex flex-col gap-5 w-full max-w-md ring-1 ring-slate-100 p-5 rounded-lg shadow-xl shadow-slate-300/40"
			onSubmit={handleSubmit}
			action="#">
			<h2 className="text-center text-2xl md:text-3xl font-bold text-primary-700">
				Sign Up
			</h2>
			<AnimatePresence>
				{error && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="text-red-500 p-2 text-center bg-red-100 w-full font-semibold">
						{errorMsg === "" ? authError : errorMsg}
					</motion.div>
				)}
			</AnimatePresence>

			{/* Name fields */}
			<InputField
				label="First Name"
				icon={faUser}
				id="firstName"
				type="text"
				placeholder="Enter your first name"
				onChange={handleChange}
				required
			/>
			<InputField
				label="Last Name"
				icon={faUser}
				id="lastName"
				type="text"
				placeholder="Enter your last name"
				onChange={handleChange}
				required
			/>

			{/* Email field */}
			<InputField
				label="Email"
				icon={faEnvelope}
				id="email"
				type="email"
				placeholder="Enter your email"
				onChange={handleChange}
			/>

			{/* Password fields */}
			<InputField
				label="Password"
				icon={faLock}
				id="password"
				type="password"
				placeholder="Enter your password"
				onChange={handleChange}
			/>
			{
				passwordStrength && (
					<p className="text-sm font-semibold p-2 rounded-md bg-primary-100/20">
						Password strength: {passwordStrength}
					</p>
				)
			}
			<InputField
				label="Password"
				icon={faLock}
				id="confirmPassword"
				type="password"
				placeholder="Enter your password again"
				onChange={handleChange}
			/>
			{
				!passwordMatch && (
					<p className="text-red-500 text-sm font-semibold p-2 bg-red-100/10">
						Passwords do not match
					</p>
				)
			}

			{/* Submit button */}
			<FormButton text="Sign Up" loading={submitting} />

			<p>
				Have an account already?
				<Link
					to="/start/login"
					className="text-primary-500 hover:text-primary-600 font-semibold">
					Sign In
				</Link>
			</p>
		</motion.form>
	);
};
