import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./Page/MainPage";
import PostsPage from "./Page/PostsPage";
import { useGetTodosQuery } from "./service/todoService";
import { setTodo } from "./store/reducers/todos";
import { useAppDispatch } from "./hooks/reducer";

function App() {
	const dispatch = useAppDispatch();
	const { data, isError, isLoading } = useGetTodosQuery("posts");

	useEffect(() => {
		if (data) {
			dispatch(setTodo(data));
		}
	}, [data]);

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
