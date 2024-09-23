import { describe, it, expect, vi } from 'vitest';
import cardsReducer, { addCard, deleteCard, clearBoard } from '../components/slices/cardsSlice';
// import { nanoid } from '@reduxjs/toolkit';

vi.mock('@reduxjs/toolkit', async (importOriginal) => {
  const actual = await importOriginal();
  if (typeof actual === 'object' && actual !== null) {
    return {
      ...actual,
      nanoid: () => '1',
    };
  }
  throw new Error('Expected @reduxjs/toolkit to import an object');
});

describe('cardsSlice', () => {
  const card = {
    id: '1',
    title: 'Card Title',
    listId: 'list-001',
    description: '',
    text: ''
  };

  it('Should allow user to add card (addCard)', () => {
    const initialState = { cards: {} };
    const userAction = addCard({
      listId: 'list-001',
      title: 'Card Title',
      text: '',
      description: ''
    });
    const newState = cardsReducer(initialState, userAction);
      expect(newState.cards[card.id]).toEqual(card);
  });



  it('Should delete selected card (deleteCard)', () => {
    const initialState = {
      cards: { '1': { id: '1', title: 'Card Title', listId: 'list-001', description: '', text: '' } },
    };
    const userAction = deleteCard('1');
    const newState = cardsReducer(initialState, userAction);
      expect(newState.cards['1']).toBeUndefined();
  });



  it('Should clear board of all cards and lists (clearBoard)', () => {
    const initialState = { cards: { '6': card } };
    const userAction = clearBoard();
    const newState = cardsReducer(initialState, userAction);
      expect(newState.cards).toEqual({});
  });
});
