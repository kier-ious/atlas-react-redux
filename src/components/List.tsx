import React from "react";
import { Card } from "./Card";
import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import "../../mockup/output.css";

interface ListProps {
  title: string;
  listId: string;
}


export const List: React.FC<ListProps> = ({ title, listId }) => {
  const cards = useAppSelector((state: RootState) =>
    state.cards.items.filter((card) => card.id === listId)
  );

  return (
    <div className="group/list flex flex-col items-center h-full min-w-96 max-w-[27.5rem] p-4">
      <h3 className="justify-center">{title}</h3>
      <DeleteListButton listId={listId} />
        <div className="flex flex-col space-y-4 w-full">
          {cards.map((card) => (
              <Card key={card.id} title={card.title} description={card.description} />
            ))}
        </div>
      <NewCardForm listId={listId}/>
    </div>
  );
};
