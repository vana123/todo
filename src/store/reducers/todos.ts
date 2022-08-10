import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Ttodo = {
	date: Date;
	title: string;
};

const initialState: Ttodo[] = [
	{
		date: new Date(),
		title: "",
	},
];

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		setTodo(state, action: PayloadAction<Ttodo[]>) {},
	},
});

export const {} = todoSlice.actions;
export const formReducer = todoSlice.reducer;
