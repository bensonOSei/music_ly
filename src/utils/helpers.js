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

		if (!response.ok) {
			return errorCallback;
		}

		return (await response).json();
	} catch (error) {
		return errorCallback;
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
};

export function checkPhraseInParagraph(paragraph, phrase) {
	// Convert both the paragraph and the phrase to lowercase to perform a case-insensitive check
	const lowercaseParagraph = paragraph.toLowerCase();
	const lowercasePhrase = phrase.toLowerCase();

	// Use the includes() method to check if the phrase is present in the paragraph
	return lowercaseParagraph.includes(lowercasePhrase);
}

export const getSession = (key) => localStorage.getItem(key);

export const setSession = (key) => localStorage.setItem(key);

export const getAuth = () => localStorage.getItem("auth");

export const setAuth = (auth) => localStorage.setItem("auth", auth);

export const removeAuth = () => localStorage.removeItem("auth");

export const getAuthHeader = () => {
	const auth = getAuth();
	if (auth) {
		return { "x-access-token": auth };
	}
	return {};
};

export const clearFormFields = (form) => {
	const formFields = form.querySelectorAll("input, select");
	formFields.forEach((field) => {
		field.value = "";
	});
};

export const checkPasswordStrength = (password) => {
	let strength = 0;
	// check the length of the password
	if (password.length >= 8) {
		strength += 2;
	}

	// check if the password contains a number
	if (/\d/.test(password)) {
		strength += 2;
	}

	// check if the password contains a lowercase letter
	if (/[a-z]/.test(password)) {
		strength += 2;
	}

	// check if the password contains an uppercase letter
	if (/[A-Z]/.test(password)) {
		strength += 2;
	}

	// check if the password contains a special character
	if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
		strength += 2;
	}

	return strength;
	
}