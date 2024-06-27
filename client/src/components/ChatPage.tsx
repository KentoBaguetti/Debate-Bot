import react, { useState, useEffect } from "react";
import DebateBotResponse from "./DebateBotResponse";

const ChatPage = () => {
	return (
		<div className="chatPage">
			<h1>DebateBot</h1>
			<DebateBotResponse gptResponse="test" />
		</div>
	);
};

export default ChatPage;
