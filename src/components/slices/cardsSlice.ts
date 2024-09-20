import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface Card {
  id: string;
  title: string;
  description: string;
  listId: string;
  text: string;
}

interface CardsSlice {
  cards: Record<string, Card>;
}

const initialState: CardsSlice = {
  cards: {},
}

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<{ listId: string; title: string; text: string }>) => {
      const newCard = {
        id: nanoid(),
        listId: action.payload.listId,
        title: action.payload.title,
        description: '',
        text: action.payload.text,
      };
      state.cards[newCard.id] = newCard;
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      const cardIdsToDelete = [action.payload];
      state.cards = Object.fromEntries(
        Object.entries(state.cards).filter(([_, card]) => !cardIdsToDelete.includes(card.id))
      );
    },
  },
});

export const { addCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;
