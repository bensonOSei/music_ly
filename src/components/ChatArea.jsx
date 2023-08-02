// import { ChatInput } from "./ChatInput";
import { UserBubble } from "./bubbles/UserBubble";
import { ChatNotice } from "./ChatNotice";
import { AiBubble } from "./bubbles/AiBubble";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { RECOMMENDATION_ENDPOINT } from "../utils/constants";
import { ErrorPopUp } from "./pop-ups/ErrorPopUP";
import { AnimatePresence } from "framer-motion";
import { GeneratingResponsePop } from "./pop-ups/GeneratingResponsePop";
import { SpotifyPop } from "./pop-ups/SpotifyPop";
import { isObjectEmpty } from "../utils/helpers";

export const ChatArea = () => {
	const [messages, setMessages] = useState([]);
	const userInput = useRef(null);
	const chatBoxRef = useRef(null);
	const [userInputData, setUSerInputData] = useState({});
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [songDetails, setSongDetails] = useState({});
	const [showSpotifyPop, setShowSpotifyPop] = useState(false);

	const setUserMessage = (e) => {
		e.preventDefault();
		setMessages((msg) => [...msg, userInputData]);
		setIsLoading(true);
		setShowSpotifyPop(false);

		userInput.current.value = "";
	};

	const displayError = (message) => {
		setError(true);
		setErrorMsg(message);
		setTimeout(() => {
			setError(false);
			setErrorMsg(message);
		}, 3000);
	};

	const displaySpotifyPop = () => {
		setShowSpotifyPop(true);
		setTimeout(() => {
			setShowSpotifyPop(false);
		}, 78000);
	}

	useLayoutEffect(() => {
		// Scroll to the bottom of the chat div whenever new messages are added
		chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
	}, [messages]);

	useEffect(() => {
		if (
			messages.length > 0 &&
			messages[messages.length - 1].role === "user"
		) {
			fetch(RECOMMENDATION_ENDPOINT, {
				method: "POST",
				body: JSON.stringify(messages),
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => {
					if (!res.ok) {
						setError(true);
						return res.status;
					}

					return res.json();
				})
				.then((aiResponse) => {
					// setIsLoading(false);
					if (typeof aiResponse === "number") {
						displayError(
							`Failed to generate response. Error code: ${aiResponse}`
						);
						messages.pop();

						return;
					}
					if(!isObjectEmpty(aiResponse.data.songDetails)) {
						setSongDetails(aiResponse.data.songDetails);
						displaySpotifyPop();
						console.log(aiResponse.data.songDetails);
					}
					setMessages([
						...messages,
						{
							role: "assistant",
							content: aiResponse.data.naturalResponse,
						},
					]);
				})
				.catch((error) => {
					// setIsLoading(false);
					console.error(error);
					displayError("Failed to generate response");
					messages.pop();
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [messages]);

	return (
		<div className="relative w-full max-w-7xl mx-auto h-5/6 bg-primary-100/50 rounded-xl p-5  pb-20">
			<div
				ref={chatBoxRef}
				id="chat-box"
				className="w-full h-full flex flex-col relative overflow-x-hidden overflow-y-auto ">
				{messages.length > 0 ? (
					messages.map((message, index) => {
						if (message.role === "user")
							return (
								<UserBubble
									query={message.content}
									key={index}
								/>
							);

						if (message.role === "assistant")
							return (
								<AiBubble
									response={message.content}
									key={index}
								/>
							);
					})
				) : (
					<ChatNotice />
				)}
			</div>
			<AnimatePresence>
				{error && <ErrorPopUp msg={errorMsg} />}
				{isLoading && <GeneratingResponsePop />}
				{showSpotifyPop && <SpotifyPop data={songDetails} /> }
			</AnimatePresence>
			<div className="absolute bottom-5 left-0 w-full h-11 px-2">
				<div className="w-full max-w-2xl h-full bg-slate-50 mx-auto rounded-lg flex items-center justify-center overflow-hidden group chat-form transition">
					<form
						action="#"
						onSubmit={setUserMessage}
						autoComplete="false"
						className="w-full flex items-center justify-evenly px-2">
						<input
							type="text"
							id="chat-message"
							name="chat-message"
							ref={userInput}
							onChange={(e) => {
								setUSerInputData({
									role: "user",
									content: e.target.value,
								});

								// console.log(userInputData)
							}}
							placeholder="What's your mood today?"
							className="border-0 bg-inherit w-11/12 input-box focus:ring-0"
						/>
						<button className="text-primary-500/60 hover:text-primary-500 hover:bg-primary-100/50 px-2 py-1 text-center rounded-md transition">
							<FontAwesomeIcon icon={faPaperPlane} />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
