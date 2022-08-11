import { Button, TextField, Container } from "@mui/material";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { TFormAddTodo } from "../types/formAddTodotypes";
import { useAppDispatch, useAppSelector } from "../hooks/reducer";
import { addTodo } from "../store/reducers/todos";

const schema = yup.object().shape({
	userId: yup.number().required("It is required field"),
	title: yup.string().required("It is required field"),
	body: yup.string().required("It is required field"),
});

function MainPage() {
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});

	const { todos, maxId } = useAppSelector((state) => state.todoReducer);

	const [userId, setUserId] = useState(0);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const onSubmit: SubmitHandler<TFormAddTodo> = (data) => {
		dispatch(
			addTodo({
				userId: userId,
				id: maxId + 1,
				title: title,
				body: body,
			})
		);
		setUserId(Number(""));
		setTitle("");
		setBody("");
		console.log(data);
	};
	return (
		<Container maxWidth="xs">
			<div className="MainPage">
				<div className="FormMain">
					<h1>FORM</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							{...register("userId")}
							value={userId}
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							) => {
								setUserId(Number(event.target.value));
							}}
							margin="normal"
							id="userId"
							type="number"
							label="userId"
							name="userId"
						/>
						<TextField
							{...register("title")}
							value={title}
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							) => {
								setTitle(event.target.value);
							}}
							fullWidth
							margin="normal"
							id="title"
							type="text"
							label="Title"
						/>
						<TextField
							{...register("body")}
							value={body}
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							) => {
								setBody(event.target.value);
							}}
							fullWidth
							id="outlined-multiline-static"
							label="Text"
							multiline
							rows={5}
						/>
						<Button type="submit">Add</Button>
					</form>
				</div>
			</div>
		</Container>
	);
}

export default MainPage;
