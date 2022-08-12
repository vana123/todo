import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	return (
		<div className="Header">
			<header className="App-header">
				<Button
					sx={{ margin: 1 }}
					variant="contained"
					onClick={() => {
						navigate("/");
					}}
				>
					Main
				</Button>
				<Button
					sx={{ margin: 1 }}
					variant="contained"
					onClick={() => {
						navigate("/posts");
					}}
				>
					Posts
				</Button>
			</header>
		</div>
	);
}

export default Header;
