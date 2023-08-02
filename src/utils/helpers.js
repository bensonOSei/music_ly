import { RECOMMENDATION_ENDPOINT } from "./constants";

export const fetchRecommendation = async (queryToSend, errorCallback) => {

    try {
        const response = fetch(RECOMMENDATION_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(queryToSend),
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        if(!response.ok) {
            return errorCallback
        }
    
        return (await response).json();
    } catch (error) {
        return errorCallback
    }
};


export function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export const checkOnlineStatus = (callback) => {

    // check if the user is connected to the internet every 5 seconds
    setInterval(() => {
        if (navigator.onLine) {
            callback(true);
        } else {
            callback(false);
        }
    }, 5000);
}
