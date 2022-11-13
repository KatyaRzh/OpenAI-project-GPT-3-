import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
	try {
		const image = await openai.createImage({
			prompt: req.body.prompt,
			n: 1,
			size: "512x512",
		});

		console.log(image.data.data[0].url);
		res.status(200).json({ result: image.data.data[0].url });
	} catch (error) {
		res.status(500).json(error);
	}
}
