import Head from "next/head";
import Name from "../components/Name";
import Tagline from "../components/Tagline";
import Image from "../components/Image";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Generate Startup Names</title>
			</Head>
			<main className="main">
				<Name />
				<Tagline />
				<Image />
			</main>
		</div>
	);
}
