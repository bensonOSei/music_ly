import { ChatInput } from "./ChatInput"

export const ChatArea = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-5/6 bg-primary-100/50 rounded-xl">
    {/* chat area */}
    <div className="absolute bottom-5 left-0 w-full h-11 px-2">
        {/* input field */}
        <ChatInput />
    </div>
</div>
)
}
