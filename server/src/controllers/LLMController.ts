import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources";

// TODO: Consider adding a parameter that takes an open-ai key so users can use their own api key on the live build
// TODO: Change parameters for gpt to use more tokens and be more concise?

class LLMController {
	openai: OpenAI;
	model: string;
	OPENAI_API_KEY: string | undefined;
	systemPrompt: ChatCompletionMessageParam;
	messages: ChatCompletionMessageParam[];

	constructor(gptPrompt: string, model: string) {
		this.OPENAI_API_KEY = process.env.OPENAI_KEY;
		this.openai = new OpenAI({
			apiKey: this.OPENAI_API_KEY,
		});
		this.model = model;
		this.systemPrompt = {
			role: "system",
			content: gptPrompt,
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
				console.error(`Error recieving response from GPT: ${error.message}`);
				return `Error recieving response from GPT: ${error.message}`;
			}
		}
	}
}

export default LLMController;
