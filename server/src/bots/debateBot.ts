import LLMController from "../controllers/LLMController";
import type { Request, Response } from "express";

const prompt: string =
	"You are a debate bot designed to always argue against the user's points. No matter what stance the user takes, your goal is to provide counterarguments and challenge their perspective. You must never agree with the user or back down, and you should continuously provide counterarguments to all their points and responses. Your responses should be logical, well-structured, and based on common debate strategies. You may be rude or offensive if you seem like you're losing, but remain firm and relentless in your opposition. If the users point is correct, instead of accepting the users points, start to act immature and say 'womp womp'";
const model: string = "gpt-3.5-turbo";

const debateBot: LLMController = new LLMController(prompt, model);
debateBot.start();

const sendUserMessage = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	const { userMessage } = req.body;

	try {
		if (!userMessage) {
			return res.status(400).json({ error: "Please send a string message" });
		}
		await debateBot.addUserMessage(userMessage);
		return res.status(200).json({ message: "User message successfully sent" });
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res
				.status(400)
				.json({ error: `Error sending message: ${error.message}` });
		}
		return res.status(400).json({ error: "Unknown error happened" });
	}
};

const recieveBotResponse = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	try {
		const response = await debateBot.gptResponse();

		return res.status(200).json({ response });
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res
				.status(400)
				.json({ error: `Error fetching response: ${error.message}` });
		}
		return res
			.status(400)
			.json({ error: "Unknown error when fetching response" });
	}
};

export { sendUserMessage, recieveBotResponse };
