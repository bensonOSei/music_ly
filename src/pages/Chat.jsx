import { ChatArea } from "../components/ChatArea";
import { ChatHeader } from "../components/ChatHeader";
import { Footer } from "../components/Footer";

export const Chat = () => {
	return (
		<div className="p-2 md:p-3 w-full h-screen">
			<ChatHeader />
			<ChatArea />
			{/* footer */}
			<Footer />
		</div>
	);
};
