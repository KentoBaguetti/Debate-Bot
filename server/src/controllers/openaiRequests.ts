import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

class LMController {
	openai: OpenAI;
	model: string;
	OPENAI_API_KEY: string | undefined;

	constructor() {
		this.openai = new OpenAI();
		this.model = "gpt-3.5-turbo";
		this.OPENAI_API_KEY =
			process.env.OPENAI_KEY || "ezewr12NotAnApiKeyForYou12Haha123";
	}
}
