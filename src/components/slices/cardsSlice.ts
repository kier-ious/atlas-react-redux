import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
  id: string;
  title: string;
  description: string;
}

interface CardsState {
  items: Card[];
}

const initialState: CardsState = {
  items: [],
}

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.items.push(action.payload);
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(card => card.id !== action.payload);
    }
  },
});

export const { addCard, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;
