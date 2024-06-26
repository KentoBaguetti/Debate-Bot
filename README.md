# Debate-Bot

This bot is made with the OpenAI API whose sole purpose it to argue against you

### Current Build
The current build only contains the backend. <br>
To run this:
- create a dotenv file containing your openAI api key with the key name of "OPENAI_API_KEY"
- run ```npm start```
- post /chat with a body of { userMessage: "Your argument" }
- get /chat to get the response

