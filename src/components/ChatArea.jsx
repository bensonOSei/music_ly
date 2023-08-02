// import { ChatInput } from "./ChatInput";
import { UserBubble } from "./bubbles/UserBubble";
import { ChatNotice } from "./ChatNotice";
import { AiBubble } from "./bubbles/AiBubble";
// import { data } from "../utils/dummyData";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { fetchRecommendation } from "../utils/helpers";
import { RECOMMENDATION_ENDPOINT } from "../utils/constants";

export const ChatArea = () => {
	const [messages, setMessages] = useState([]);
	const userInput = useRef(null);
	const [userInputData, setUSerInputData] = useState({});

	const setUserMessage = (e) => {
		e.preventDefault();
		setMessages((msg) => [...msg, userInputData]);

		userInput.current.value = "";
	};


	useEffect(() => {
		if(messages.length > 0 && messages[messages.length - 1].role === 'user') {
			fetch(RECOMMENDATION_ENDPOINT, {
				method: "POST",
				body: JSON.stringify(messages),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(res => res.json())
			.then(aiResponse => {
				setMessages([...messages, {
					role: 'assistant',
					content:aiResponse.data.naturalResponse
				}])
				console.log(aiResponse.data.naturalResponse)
			})
			.catch(error => {
				console.log(error)
			})
		}
		// console.log(messages);
	}, [messages]);

	return (
		<div className="relative w-full max-w-7xl mx-auto h-5/6 bg-primary-100/50 rounded-xl p-5  pb-20">
			<div id="chat-box"  className="w-full h-full flex flex-col relative overflow-x-hidden">
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
