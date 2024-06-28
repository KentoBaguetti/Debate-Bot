import type React from "react";
import Typewriter from "typewriter-effect";

interface DebateBotResponseProps {
	gptResponse: string;
}

const DebateBotResponse: React.FC<DebateBotResponseProps> = ({
	gptResponse,
}) => {
	return (
		<div className="debateBotResponse">
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
