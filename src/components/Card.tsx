import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteCardButton } from "../components/DeleteCardButton";
import { deleteCard } from "./slices/cardsSlice";



interface CardProps {
  id: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ id, title, description }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(id));
  };

  return (
    <div className="card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue shadow-md">
      <div className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span>{title}</span>
        <button
          onClick={handleDelete}
          className="h-[30px] w-[30px] cursor-pointer"
          aria-label="Delete card"
        >
          <img src="/path/to/delete-icon.svg" alt="Delete Button" />
        </button>
      </div>
      <p className="mt-2 text-left">{description}</p>
    </div>
  );
};
