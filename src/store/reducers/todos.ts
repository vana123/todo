import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ttodo } from "../../types/todoTypes";

type TinitialState = {
	todos: Ttodo[];
	maxId: number;
};

const initialState: TinitialState = {
	todos: [
		{
			userId: 1,
			id: 1,
			title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
		},
	],
	maxId: 1,
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<Ttodo>) {
			state.todos.push(action.payload);
			state.maxId++;
		},
		remuveTodo(state, action: PayloadAction<number>) {
			state.todos = state.todos.filter(
				(todo) => todo.id != action.payload
			);
		},
		setTodo(state, action: PayloadAction<Ttodo[]>) {
			state.todos = action.payload;
			state.maxId = action.payload.length;
		},
	},
});

export const { setTodo, addTodo, remuveTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
