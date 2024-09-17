import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface List {
  id: string;
  title: string;
}

interface ListsState {
  items: List[];
}

const initialState: ListsState = {
  items: [],
};

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<List>) => {
      state.items.push(action.payload);
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((list) => list.id !== action.payload);
    },
  },
});

export const { addList, deleteList } = listsSlice.actions;
export default listsSlice.reducer;
