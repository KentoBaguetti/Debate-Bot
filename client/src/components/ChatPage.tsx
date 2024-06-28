import type React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DebateBotResponse from "./DebateBotResponse";
import UserInput from "./UserInput";
import "../styles/ChatPage.css";

const ChatPage: React.FC = () => {
	const [botResponse, setBotResponse] = useState<string>(
		"Welcome to my den where you can argue all you want but will never win",
	);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const sendMessageToBot = async (userInput: string): Promise<void> => {
		setIsLoading(true);
		try {
			await axios.post("/chat", {
				userMessage: userInput,
			});
			console.log("User argument sent to gpt");

			await recieveBotResponse();
		} catch (error: unknown) {
			if (error instanceof Error) {
				setBotResponse("Apologies, I did not recieve your foolish argument");
				console.log(`Error sending message to gpt: ${error.message}`);
				return;
			}
			console.log("Unknown error when sending message to gpt");
			setBotResponse("Unknown error when sending message to gpt");
		} finally {
			setIsLoading(false);
		}
	};

	const recieveBotResponse = async (): Promise<void> => {
		try {
			const response = await axios.get("/chat");
			const botReply = response.data.response;
			setBotResponse(botReply);
			console.log("successfully recieved bot reply");
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log(`Error recieving response from gpt: ${error.message}`);
				return;
			}
			console.log(`Unknown error when recieving response: ${error}`);
		}
	};

	useEffect(() => {}, []);

	return (
		<div className="chatPage">
			<h1>DebateBot</h1>
			<div className="gptKing">
				<DebateBotResponse gptResponse={botResponse} />
			</div>
			<div className="user-input">
				<UserInput onSubmit={sendMessageToBot} isLoading={isLoading} />
			</div>
		</div>
	);
};

export default ChatPage;
