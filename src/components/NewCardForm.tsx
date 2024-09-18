import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../components/slices/cardsSlice";
import { nanoid } from "@reduxjs/toolkit";

interface NewCardProps {
  listId: string;
}

export const NewCardForm: React.FC<NewCardProps> = ({ listId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addCard({
        id: nanoid(),
        title,
        description,
        listId,
      })
    );
    setTitle("");
    setDescription("");
    setIsVisible(false);
  }
  return (
    <div className="group/new-card m-3 flex h-44 w-full justify-center">
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="px-4 py-2 text-blue-600 be-gray-200 rounded"
        >
        </button>
      )}

      {isVisible && (
        <form onSubmit={handleAddCard} className="flex flex-col space--3 w-full">
          <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Card Title"
          className="p-2 border rounded"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Card description"
            className="p-2 border rounded"
          />
        <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded"></button>
        </form>
      )}
    </div>
  );
};
