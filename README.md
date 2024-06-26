# Debate-Bot

This bot is made with the OpenAI API and all it does will argue against you given a topic

### Current Build
The current build only contains the backend. <br>
To run this:
- create a dotenv file containing your openAI api key with the key name of "OPENAI_API_KEY"
- run ```npm start```
- post /chat with a body of { userMessage: "Your argument" }
- get /chat to get the response

