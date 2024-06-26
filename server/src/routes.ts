import express, { type Request, type Response } from "express";
import axios from "axios";
import LLMController from "./controllers/LLMController";

const router = express.Router();

const debateBot = new LLMController();

debateBot.start();

router.post(
	"/sendMessage",
	async (req: Request, res: Response): Promise<Response> => {
		const { userMessage }: { userMessage: string } = req.body;
		try {
			if (!userMessage) {
				return res.status(400).json({ error: "Please send a string message" });
			}
			await debateBot.addUserMessage(userMessage);
			return res
				.status(200)
				.json({ message: "User message successfully sent" });
		} catch (error: unknown) {
			if (error instanceof Error) {
				return res
					.status(400)
					.json({ error: `Error sending message: ${error.message}` });
			}
			return res.status(400).json({ error: "Unknown error happened" });
		}
	},
);

router.get(
	"/getGPTResponse",
	async (req: Request, res: Response): Promise<Response> => {
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
	},
);

export default router;
