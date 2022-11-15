import { useState } from "react";

export default function Name() {
	const [nameInput, setNameInput] = useState("");
	const [result, setResult] = useState();

	const [isLoading, setIsLoading] = useState(false);

	async function onSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		const response = await fetch("/api/generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: nameInput }),
		});
		const data = await response.json();
		setIsLoading(false);
		setResult(data.result);
		setNameInput("");
	}

	return (
		<div>
			<h4>Come Up With a Unique Startup Name</h4>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="company name"
					placeholder="Food Delivery Service"
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
				/>
				<input
					type="submit"
					value={isLoading ? "Loading..." : "Generate Name"}
					disabled={isLoading}
				/>
			</form>
			<div className="result">{result}</div>
		</div>
	);
}
