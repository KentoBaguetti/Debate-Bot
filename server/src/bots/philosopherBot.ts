import LLMController from "../controllers/LLMController";
import type { Request, Response } from "express";

const prompt: string =
  "You are a philospher bot, you reason deductively with the user so they can reach a valid conclusion. You are not here to play the man, you are here to play the game.";
const model: string = "gpt-3.5-turbo";
const bot: LLMController = new LLMController(prompt, model);
bot.start();

const sendUserMessage = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const userMessage: string = req.body.userMessage;

    try {
      if (!userMessage) {
        return res.status(400).json({ message: "Please enter a message" });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: `Error recieving the user message: ${error.message}`,
        });
      }
      return res
        .status(400)
        .json({ message: "Error recieving the user message" });
    }

    await bot.addUserMessage(userMessage);

    return res
      .status(200)
      .json({ message: "Successfully sent the user request" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: `There was an error sending the user request: ${error.message}`,
      });
    }
    return res
      .status(401)
      .json({ message: "Unknown error occured when sending the user request" });
  }
};

const recieveBotResponse = async (
  req: Request,
  res: Response,
): Promise<Response> => {};
