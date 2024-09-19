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
  lists: ListSlice[];
  cards: CardsState[];
}

const initialState: ListsState = {
  lists: [],
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
      state.lists.push(newList);
    },
    deleteList: (state, action: PayloadAction<{ id: string }>) => {
      const listId = action.payload.id;
      state.lists = state.lists.filter((list) => list.id !== listId);
      state.cards = state.cards.filter((card) => card.listId !== listId);
    },

    clearBoard: (state) => {
      state.lists = [];
      state.cards = [];
    },
    deleteCard: (state, action: PayloadAction<{ id: string }>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },

    addCard: (state, action: PayloadAction<CardsState>) => {
      const newCard = action.payload;
      state.cards.push(newCard);
    },
  },
});

export const { addList, deleteList, clearBoard, deleteCard, addCard } = listsSlice.actions;
export default listsSlice.reducer;
