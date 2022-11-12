import Head from "next/head";
import Name from "../components/name";
import Tagline from "../components/tagline";
import "./index.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Generate Startup Names</title>
			</Head>
			<main>
				<Name />
				<Tagline />
			</main>
		</div>
	);
}
