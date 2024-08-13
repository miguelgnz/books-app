"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import booksReducer from "@/redux/features/books-slice";

export const store = configureStore({
  reducer: { booksReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>()
