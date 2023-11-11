//import { OpenAI } from "langchain/llms/openai";
const { OpenAI } = require("langchain/llms/openai");

const { ChatOpenAI }= require("langchain/chat_models/openai");
require('dotenv').config();
const apiKey = process.env.API_KEY
const llm = new OpenAI({
    openAIApiKey:apiKey,
    temperature: 0.9,

});

const chatModel = new ChatOpenAI();

const text =
  "What would be a good company name for a company that makes colorful socks?";
async function aobt(){
    const llmResult = await llm.predict(text);
    const chatModelResult = await chatModel.predict(text);

}
//const llmResult = await llm.predict(text);


//const chatModelResult = await chatModel.predict(text);
