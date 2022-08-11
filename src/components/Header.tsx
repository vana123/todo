import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="Header">
			<header className="App-header">
				<Link to={"/"}>Main</Link>
				<Link to={"/posts"}>Posts</Link>
			</header>
		</div>
	);
}

export default Header;
