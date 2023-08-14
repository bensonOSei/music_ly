import { useCallback, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { BACKEND_URL } from "../../utils/constants";
import PropTypes from 'prop-types'

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
    const [fetchUserError, setFetchUserError] = useState(null)

	const updateUser = useCallback((newUserData) => {
        // console.log(newUserData)
        // return
        setUser((prevUser) => {
            return { ...prevUser, ...newUserData };
        });
	}, []);

    const fetchUser = useCallback(async (token) =>{
        // console.log(token)
        if(!token) return

        axios.get(`${BACKEND_URL}/auth/user`, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
        .then((res) => {
            // console.log(res)
            setUser(res.data.data)
        })
        .catch((err) => {
            console.log(err.response.data.message)
            setFetchUserError(err.response.data.message)
        })
    },[])
	return(
         <UserContext.Provider value={{ user, setUser, fetchUserError, fetchUser, updateUser}} >
            {children}
        </UserContext.Provider>);
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}
