import React from "react";
import { Card } from "./Card";
import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import "../../mockup/output.css";

interface ListProps {
  title: string;
  id: string;
}

export const List: React.FC<ListProps> = ({ title, id }) => {
  const cards = useAppSelector((state: RootState) =>
    state.cards.items.filter((card) => card.listId === id)
  );

  return (
    <div className="group/list flex flex-col items-center h-full min-w-96 max-w-[27.5rem] p-4">
      <h3 className="justify-center">{title}</h3>
      <DeleteListButton listId={id} />
        <div className="flex flex-col space-y-4 w-full">
          {cards.map((card) => (
              <Card key={card.id} id={card.id} title={card.title} description={card.description} />
            ))}
        </div>
      <NewCardForm listId={id}/>
    </div>
  );
};
