import type React from "react";
import Typewriter from "typewriter-effect";
import "../styles/DebateBotResponse.css";
import botImg from "../assets/botlawyer.jpg";

interface DebateBotResponseProps {
	gptResponse: string;
}

const DebateBotResponse: React.FC<DebateBotResponseProps> = ({
	gptResponse,
}) => {
	return (
		<div className="debateBotResponse">
			<img
				src={botImg}
				alt="Bot Response Background"
				className="background-image"
			/>
			<Typewriter
				key={gptResponse}
				onInit={(typewriter) => {
					typewriter.changeDelay(20).typeString(gptResponse).start();
				}}
			/>
		</div>
	);
};

export default DebateBotResponse;
