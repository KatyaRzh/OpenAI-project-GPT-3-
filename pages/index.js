import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
	const [nameInput, setNameInput] = useState("");
	const [result, setResult] = useState();

	async function onSubmit(event) {
		event.preventDefault();
		const response = await fetch("/api/generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: nameInput }),
		});
		const data = await response.json();
		setResult(data.result);
		setNameInput("");
	}

	return (
		<div>
			<Head>
				<title>Generate Startup Names</title>
			</Head>
			<main className={styles.main}>
				<h3>Come up with a unique startup name</h3>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						name="company name"
						placeholder="Food Delivery Service"
						value={nameInput}
						onChange={(e) => setNameInput(e.target.value)}
					/>
					<input type="submit" value="Generate names" />
				</form>
				<div className={styles.result}>{result}</div>
			</main>
		</div>
	);
}
