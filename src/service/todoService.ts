import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../consts/api";
import { Ttodo } from "../types/todoTypes";

export const todoAPI = createApi({
	reducerPath: "todoAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getTodos: build.query<Ttodo[], string>({
			query: (endpoint) => ({
				url: `${endpoint}`,
			}),
		}),
	}),
});

export const { useGetTodosQuery } = todoAPI;
