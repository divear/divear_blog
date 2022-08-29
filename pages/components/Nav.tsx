import React, { useEffect, useState } from "react";
import pfp from "./imgs/pfp.png";
import Image from "next/image";

function Nav() {
	// false - english
	// true - czech
	const [language, setLanguage] = useState(true);
	useEffect(() => {
		localStorage.setItem("language", language ? "CZ" : "EN");
	}, [language]);

	return (
		<div className="nav">
			<h1
				className="logoText"
				onClick={() => (window.location.href = "/")}
			>
				<Image width={50} height={50} src={pfp} alt="i" />
				divear
			</h1>

			<h1 onClick={() => setLanguage(!language)} className="language">
				{!language ? "🇬🇧" : "🇨🇿"}
			</h1>
			
			<div className="redirs">
				<a href="/projects">Projects </a>
				<a href="/blogs">Blogs</a>
			</div>
		</div>
	);
}

export default Nav;
