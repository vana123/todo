import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todos";
import { todoAPI } from "../service/todoService";

const rootReducer = combineReducers({
	todoReducer,
	[todoAPI.reducerPath]: todoAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,

		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(todoAPI.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
