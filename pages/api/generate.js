import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
	try {
		const completion = await openai.createCompletion({
			model: "text-davinci-002",
			prompt: generatePrompt(req.body.animal),
			temperature: 0.6,
		});
		res.status(200).json({ result: completion.data.choices[0].text });
	} catch (error) {
		res.status(500).json(error);
	}
}

console.log("fr");

function generatePrompt(description) {
	return `Suggest a new and unique startup name based on a description.
          Description: Homes Rent
          Names: Homify, Homefront, Rentall
          Description: Food Delivery
          Names: Foodfast, Dashly, Doordash
          Description: ${description}
          Names:`;
}
