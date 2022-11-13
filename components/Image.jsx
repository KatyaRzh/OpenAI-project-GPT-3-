import { useState } from "react";

export default function Image() {
	const [nameInput, setNameInput] = useState("");
	const [result, setResult] = useState();

	const [isLoading, setIsLoading] = useState(false);

	async function onSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		const response = await fetch("/api/image", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt: nameInput }),
		});
		const data = await response.json();
		setIsLoading(false);
		setResult(data.result);
		setNameInput("");
	}

	return (
		<div>
			<h3>🤡 Last: Generate your company meme</h3>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="company tagline"
					placeholder="Just Do It."
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
				/>
				<input
					type="submit"
					value={isLoading ? "Loading..." : "Generate Image"}
					disabled={isLoading}
				/>
			</form>
			<div className="result">
				<img src={result} />
			</div>
		</div>
	);
}
