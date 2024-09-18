import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface ListSlice {
  title: string;
  id: string;
}

interface CardsState {
  id: string;
  listId: string;
  title: string;
  description: string;
}

interface ListsState {
  items: ListSlice[];
  cards: CardsState[];
}

const initialState: ListsState = {
  items: [
    { id: "1", title: "To Do" },
    { id: "2", title: "Urgent" },
    { id: "2", title: "On Fire" },
  ],
  cards: [],
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
    deleteList: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((list) => list.id !== action.payload.id);
      state.cards = state.cards.filter((card) => card.listId !== action.payload.id);
    },

    clearBoard: (state) => {
      state.items = [];
      state.cards = [];
    },
    deleteCard: (state, action: PayloadAction<{id: string}>) => {
      const deleteCard = {
        id: nanoid(),
        title: action.payload.id
      }
      state.items.push(deleteCard);
    },
    addCard: (state, action: PayloadAction<CardsState>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addList, deleteList, clearBoard, deleteCard, addCard } = listsSlice.actions;
export default listsSlice.reducer;
