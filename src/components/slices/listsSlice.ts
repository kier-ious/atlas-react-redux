import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface ListSlice {
  title: string;
  id: string;
}

interface ListsState {
  items: ListSlice[];
}

const initialState: ListsState = {
  items: [],
};

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{title: string}>) => {
      const newList = {
        id: nanoid(),
        title: action.payload.title,
      }
      state.items.push(newList);
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((list) => list.id !== action.payload);
    },
  },
});

export const { addList, deleteList } = listsSlice.actions;
export default listsSlice.reducer;
