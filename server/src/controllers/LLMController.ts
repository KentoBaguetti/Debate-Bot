import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources";

class LLMController {
	openai: OpenAI;
	model: string;
	OPENAI_API_KEY: string | undefined;
	systemPrompt: ChatCompletionMessageParam;
	messages: ChatCompletionMessageParam[];

	constructor() {
		this.OPENAI_API_KEY =
			process.env.OPENAI_KEY || "ezewr12NotAnApiKeyForYou12Haha123";
		this.openai = new OpenAI({
			apiKey: this.OPENAI_API_KEY,
		});
		this.model = "gpt-3.5-turbo";
		this.systemPrompt = {
			role: "system",
			content:
				"You are a debate bot designed to always argue against the user's points. No matter what stance the user takes, your goal is to provide counterarguments and challenge their perspective. You must never agree with the user or back down, and you should continuously provide counterarguments to all their points and responses. Your responses should be logical, well-structured, and based on common debate strategies. You may be rude or offensive if you seem like you're losing, but remain firm and relentless in your opposition.",
		};
		this.messages = [];
	}

	start(): void {
		this.initiateArgument();
	}

	initiateArgument(): void {
		this.messages.push(this.systemPrompt);
	}

	async addUserMessage(userInput: string): Promise<void> {
		const inputData: ChatCompletionMessageParam = {
			role: "user",
			content: userInput,
		};
		this.messages.push(inputData);
	}

	async gptResponse(): Promise<string | null | undefined> {
		try {
			const response = await this.openai.chat.completions.create({
				model: this.model,
				messages: this.messages,
				max_tokens: 100,
				temperature: 0.7,
				frequency_penalty: 0.5,
				presence_penalty: 0.0,
			});

			const assistantResponse: ChatCompletionMessageParam =
				response.choices[0].message;

			console.log(assistantResponse);

			this.messages.push(assistantResponse);

			const stringResponse: string | null | undefined =
				assistantResponse.content;

			return stringResponse;
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error("Error sending message to GPT");
				return "Error recieving response from GPT";
			}
		}
	}
}

export default LLMController;
