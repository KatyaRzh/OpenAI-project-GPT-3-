import { useState } from "react";

export default function Tagline() {
	const [nameInput, setNameInput] = useState("");
	const [result, setResult] = useState();

	const [isLoading, setIsLoading] = useState(false);

	async function onSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		const response = await fetch("/api/tagline", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ tagline: nameInput }),
		});
		const data = await response.json();
		setIsLoading(false);
		setResult(data.result);
		setNameInput("");
	}

	return (
		<div>
			<h4> Next: Let's Create Your Unique Tagline</h4>
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
					value={isLoading ? "Loading..." : "Generate Tagline"}
					disabled={isLoading}
				/>
			</form>
			<div className="result">{result}</div>
		</div>
	);
}
