import express, { Express, Request, Response } from "express";
import axios from "axios";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const OPENAI_API_KEY: string | undefined = process.env.OPENAI_KEY;

const router = express.Router();

export default router;
