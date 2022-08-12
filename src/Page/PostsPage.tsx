import React, { useEffect, useState } from "react";
import List from "../components/List";
import { useGetTodosQuery } from "../service/todoService";
import { useAppDispatch, useAppSelector } from "../hooks/reducer";
import { setTodo, sortAbc } from "../store/reducers/todos";
import { Button, Container } from "@mui/material";

function PostsPage() {
	const dispatch = useAppDispatch();
	const { todos } = useAppSelector((state) => state.todoReducer);
	const [isAbc, setIsAbc] = useState(true);
	return (
		<div className="PostsPage">
			<Container maxWidth="xs">
				<Button
					variant="outlined"
					onClick={() => {
						dispatch(sortAbc(isAbc));
						setIsAbc(isAbc);
					}}
				>
					Sort {isAbc ? "a-z" : "z-a"}
				</Button>
				<List data={todos} />
			</Container>
		</div>
	);
}

export default PostsPage;
