import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BookType } from "@/utils/types";

interface InitialStateProps {
  value: BookType[];
}

const initialState: InitialStateProps = {
  value: [],
};

export const books = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const fetchedBooks: BookType[] = await fetch(
    "https://anapioficeandfire.com/api/books"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });

  return fetchedBooks;
});

export default books.reducer;
