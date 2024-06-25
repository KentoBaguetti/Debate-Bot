import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

class LLMController {
	openai: OpenAI;
	model: string;
	OPENAI_API_KEY: string | undefined;
	systemPrompt: object;
	messages: object[];

	constructor() {
		this.openai = new OpenAI();
		this.model = "gpt-3.5-turbo";
		this.OPENAI_API_KEY =
			process.env.OPENAI_KEY || "ezewr12NotAnApiKeyForYou12Haha123";
		this.systemPrompt = {
			role: "system",
			content:
				"You are a debate bot designed to always argue against the user's points. No matter what stance the user takes, your goal is to provide counterarguments and challenge their perspective. You must never agree with the user or back down, and you should continuously provide counterarguments to all their points and responses. Your responses should be logical, well-structured, and based on common debate strategies. You may be rude or offensive if you seem like you're losing, but remain firm and relentless in your opposition.",
		};
		this.messages = [];
	}

	start() {
		this.initiateArgument();
	}

	initiateArgument() {
		this.messages.push(this.systemPrompt);
	}

	async addUserMessage(userInput: string) {}
}
