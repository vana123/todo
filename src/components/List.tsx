import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Ttodo } from "../types/todoTypes";
import {
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { useAppDispatch } from "../hooks/reducer";
import { remuveTodo } from "../store/reducers/todos";

function List({ data }: { data: Ttodo[] }) {
	const dispatch = useAppDispatch();
	return (
		<div className="List">
			{data.map((todo) => {
				return (
					<div className="todo" key={todo.id}>
						<Card sx={{ marginY: 2 }}>
							<CardContent>
								<Grid container spacing={2}>
									<Grid item>
										<Typography variant="h6">
											{todo.title}
										</Typography>
									</Grid>
									<Grid item>
										<Typography>{todo.body}</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography>
											User ID: {todo.userId}
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<Button
											variant="outlined"
											startIcon={<DeleteForeverIcon />}
											onClick={() => {
												dispatch(remuveTodo(todo.id));
											}}
										>
											Delete
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</div>
				);
			})}
		</div>
	);
}

export default List;
