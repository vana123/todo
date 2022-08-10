import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./Page/MainPage";
import PostsPage from "./Page/PostsPage";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/posts" element={<PostsPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
