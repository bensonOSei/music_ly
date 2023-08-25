import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PropTypes from "prop-types";
import axios from "axios";
import { BACKEND_URL } from "../../utils/constants";
import { getAuth, removeAuth, setAuth } from "../../utils/helpers";
import { UserContext } from "../contexts/UserContext";
export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(() => getAuth() !== null);
	const [token, setToken] = useState(() => getAuth());
	const [authError, setAuthError] = useState(null);
	const { setUser } = useContext(UserContext)

	const login = useCallback((inputs) => {
		setAuthError(null)
		// console.log(inputs)
		// return
		axios
			.post(`${BACKEND_URL}/auth/login`, inputs, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				setToken(res.data.token);
				setIsLoggedIn(true);
				setAuthError(null);
				setAuth(res.data.token);
				setUser(res.data.data)
			})
			.catch((err) => {
				if (err.status === 500) {
					setAuthError('Something happened on our side. Please again later')
					return
				}
				if (err.message === 'Network error') {
					setAuthError('Server is unresponsive')
					return
				}
				if (err.status === 422) {
					setAuthError("Invalid email or password")
					return
				}
				setAuthError(err.response.data.message);
			});
	}, [setUser]);

	const signup = useCallback((inputs) => {
		axios
			.post(`${BACKEND_URL}/users/register`, inputs, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				setToken(res.data.token);
				setIsLoggedIn(true);
				setAuthError(null);
				setAuth(res.data.token);
				setUser(res.data.data)
			})
			.catch((err) => {
				if (err.response.status === 422) {
					setAuthError('Invalid inputs. Please check your inputs and try again.')
					return
				}

				setAuthError(err.response.data.message);
			});
	}, [setUser]);

	const logout = () => {
		setUser(null)
		setToken(null)
		setIsLoggedIn(false)
		setAuthError(null)
		removeAuth()
	}

	const fetchUser = useCallback(async () => {
		if (token === 'null') {
			// setIsLoggedIn(false)
			// setUser(null)
			return
		}

		axios.get(`${BACKEND_URL}/auth/user`, {
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': token
			}
		})
			.then((res) => {
				setUser(res.data.data)
			})
			.catch((err) => {
				if (err.response.status === 403) {
					setUser(null)
					removeAuth()
					setIsLoggedIn(false)
				}
				setFetchUserError(err.response.data.message)
			})
	}, [])


	// useEffect(() => {
	// 	// setAuth(null)

	// 	console.log(typeof getAuth(), getAuth())
	// }, [])

	return (
		<AuthContext.Provider
			value={{ token, isLoggedIn, login, authError, signup, logout, setToken, fetchUser }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
