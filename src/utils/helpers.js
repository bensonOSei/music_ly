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
