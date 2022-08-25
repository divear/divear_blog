import React from "react";

function Blogs() {
	return (
		<div>
			<div className="blogs">
				<h1 className="center headerText">Recent blogs</h1>
				<div className="center">
					<ul>
						<li>
							<a href="/a/morava">My new site: morava.lol</a>
							<h5>Find out how much of a moravian you are</h5>
						</li>
						<li>
							<a href="/a/is-linux-that-hard">
								Is linux that hard?
							</a>
							<h5>not really</h5>
						</li>
						<li>
							<a href="/a/sewer-run">
								How I got my profile picture
							</a>
							<h5>not really</h5>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Blogs;
