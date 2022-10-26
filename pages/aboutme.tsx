import React, { useEffect, useRef, useState } from "react";

import github from "./components/imgs/socmedia/github.png";
import twitter from "./components/imgs/socmedia/twitter.png";
import youtube from "./components/imgs/socmedia/youtube.png";
import Image from "next/image";
import Meta from "./components/Meta";
import emailjs from "@emailjs/browser";

const socials = [
	[github, "https://github.com/lukascobit", "lukascobit"],
	[twitter, "https://twitter.com/divear0", "divear0"],
	[
		youtube,
		"https://www.youtube.com/channel/UCwWXZqqwhdVq50W3vZ4aDSg",
		"divear",
	],
];

function Aboutme() {
	const [lang, setLang] = useState(false);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const form: any = useRef();
	const emailenv: any = {
		id: process.env.NEXT_PUBLIC_EMAIL_ID,
		tempid: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
		userid: process.env.NEXT_PUBLIC_EMAIL_USER_ID,
	};

	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm(
				emailenv.id,
				emailenv.tempid,
				form.current,
				emailenv.userid
			)
			.then(
				(result: any) => {
					console.log(result.text);
					console.log("success");
				},
				(error: any) => {
					console.log(error.text);
				}
			);
	};

	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
	}, []);
	return (
		<div className="content">
			<Meta title="About me" />
			<div className="headerText center">
				{lang ? "O mně" : "About me"}
			</div>
			<article>
				<p>
					{lang
						? "Já jsem diveár, ale taky mě mužeš znát jako:"
						: "I'm divear but you may also know me as:"}
				</p>
				<ul>
					<li>lukascobit</li>
					<li>lukas_getout</li>
					<li>divear0</li>
				</ul>
			</article>
			<h1 className="headerText">
				{lang ? "Najdeš mě taky tady:" : "Find me here"}
			</h1>
			<div className="socials">
				{socials.map((s, i) => {
					return (
						<button
							key={i}
							onClick={() => open(s[1].toString(), "_blank")}
							className="social"
						>
							<Image width={100} height={100} src={s[0]}></Image>
							<h4 className="usernameSpeci">{s[2].toString()}</h4>
						</button>
					);
				})}
			</div>
			<h1 className="">
				{lang ? "Máš otázku? Tady je náš " : "Have a question? Ask on "}
				<a
					className="headerText"
					target="_blank"
					href="https://discord.gg/yv8thy2PKz"
					rel="noreferrer"
				>
					discord
				</a>
			</h1>
			<form
				ref={form}
				onSubmit={(e) => sendEmail(e)}
				className="contactme"
			>
				<h1 className="center headerText">Contact me</h1>
				<label htmlFor="name">Name</label>
				<input
					onChange={(e) => setUsername(e.target.value)}
					value={username}
					type="text"
					id="name"
				/>
				<label htmlFor="email">Email address</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email"
					id="email"
				/>
				<label htmlFor="message">Your message</label>
				<textarea
					name="message"
					id="message"
					onChange={(e) => setMessage(e.target.value)}
					value={message}
					cols={20}
					rows={5}
				></textarea>
				<button type="submit" className="sendButton">
					send
				</button>
			</form>
		</div>
	);
}

export default Aboutme;
