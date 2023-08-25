import { useCallback, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { BACKEND_URL } from "../../utils/constants";
import PropTypes from 'prop-types'
import { removeAuth } from "../../utils/helpers";

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


	return(
         <UserContext.Provider value={{ user, setUser, fetchUserError, updateUser}} >
            {children}
        </UserContext.Provider>);
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}
