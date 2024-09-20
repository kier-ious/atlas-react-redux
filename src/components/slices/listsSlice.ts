import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface ListSlice {
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
  cards: Record<string, CardsState>;
}

const initialState: ListsState = {
  lists: [],
  cards: {},
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
      Object.keys(state.cards).forEach((cardId) => {
        if (state.cards[cardId].listId === listId) {
          delete state.cards[cardId]
        }
      });
    },

    clearBoard: (state) => {
      state.lists = [];
      state.cards = {};
    },
    deleteCard: (state, action: PayloadAction<{ id: string }>) => {
      delete state.cards[action.payload.id];
    },

    addCard: (state, action: PayloadAction<CardsState>) => {
      const newCard = action.payload;
      state.cards[newCard.id] = newCard;
    },
  },
});

export const { addList, deleteList, clearBoard, deleteCard, addCard } = listsSlice.actions;
export default listsSlice.reducer;
