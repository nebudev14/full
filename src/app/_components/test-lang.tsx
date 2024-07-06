import { ChatOpenAI } from "@langchain/openai";

const chatModel = new ChatOpenAI({
    apiKey: process.env.OPENAI_KEY
})

// const test = await chatModel.invoke("How do i do a backflip?!")
// 
export default async function TestAI() {
    return (
        <div className="h-screen flex items-center justify-center">
            {/* <h1 className="text-xl">{test.content}</h1> */}
        </div>
    );
}