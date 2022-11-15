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
				<h1>
					{" "}
					🦄🎉 Congrats on your decision to become a founder 🎉🦄{" "}
				</h1>
				<h2>
					{" "}
					Fasten your seatbelt! You'll need to a name, a tagline and a
					meme for your new startup.
				</h2>
				<Name />
				<Tagline />
				<Image />
			</main>
		</div>
	);
}
