import Image from "next/image";
import React from "react";
import map from "../components/imgs/morava_screen.png";

function Morava() {
	return (
		<div className="content">
			<h1 className="center">the story of morava.lol</h1>
			<Image className="floatRight mapImg" src={map} alt="map image" />
			<article>
				<a href="https://morava.lol/">visit the site here</a>
				<h1>How was it born?</h1>
				<p>
					I watched a Tom Scott video and his north-o-meter, that
					inspired me to this idea... ok, i might have copied his
					exact idea and "czeched" it but that's besides the point.
				</p>
			</article>
		</div>
	);
}

export default Morava;