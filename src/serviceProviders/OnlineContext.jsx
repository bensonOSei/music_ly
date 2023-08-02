import { useState, useEffect, createContext } from "react";
import { checkOnlineStatus } from "../utils/helpers";
import PropTypes from "prop-types";

export const OnlineContext = createContext();

export const OnlineProvider = ({ children }) => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        checkOnlineStatus(setIsOnline);
    }, []);

    return (
        <OnlineContext.Provider value={{ isOnline }}>
            {children}
        </OnlineContext.Provider>
    );
}

OnlineProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

