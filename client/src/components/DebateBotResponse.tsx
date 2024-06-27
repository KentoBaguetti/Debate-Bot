const DebateBotResponse = (props: { gptResponse: string }) => {
	const gptMessage = props.gptResponse;

	return (
		<div className="BotResponse">
			<div className="message">
				<p>{gptMessage}</p>
			</div>
		</div>
	);
};

export default DebateBotResponse;
