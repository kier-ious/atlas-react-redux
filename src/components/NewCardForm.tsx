import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "./slices/listsSlice";
import { nanoid } from "@reduxjs/toolkit";

interface NewCardFormProps {
  listId: string;
}

export const NewCardForm: React.FC<NewCardFormProps> = ({ listId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      dispatch(
        addCard({
          id: nanoid(), // Generate a unique ID for the card
          listId,
          title,
          description,
        })
      );
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="group/new-card m-3 flex h-44 w-full justify-center">
      <form
        onSubmit={handleSubmit}
          className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="border p-2"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="border p-2"
            />
          <div className="w-full">
            <button type="submit" className="bg-off-white-light text-black p-2">Save</button>
          </div>
      </form>
    </div>
  );
};
