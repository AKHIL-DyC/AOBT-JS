//import { OpenAI } from "langchain/llms/openai";
const { OpenAI } = require("langchain/llms/openai");

const { ChatOpenAI }= require("langchain/chat_models/openai");

const llm = new OpenAI({
    openAIApiKey:"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",
    temperature: 0.9,

});

const chatModel = new ChatOpenAI();

const text =
  "What would be a good company name for a company that makes colorful socks?";
async function aobt(){
    const llmResult = await llm.predict(text);
}
//const llmResult = await llm.predict(text);


const chatModelResult = await chatModel.predict(text);
