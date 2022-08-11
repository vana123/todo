import React, { useEffect } from "react";
import List from "../components/List";
import { useGetTodosQuery } from "../service/todoService";
import { useAppDispatch, useAppSelector } from "../hooks/reducer";
import { setTodo } from "../store/reducers/todos";
import { Container } from "@mui/material";

function PostsPage() {
	const { todos } = useAppSelector((state) => state.todoReducer);

	return (
		<div className="PostsPage">
			<Container maxWidth="xs">
				<List data={todos} />
			</Container>
		</div>
	);
}

export default PostsPage;
