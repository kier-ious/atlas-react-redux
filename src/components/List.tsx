import React from "react";
import { Card } from "./Card";
import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";


interface ListProps {
  title: string;
  id: string;
  cards: { id: string; title: string; description: string }[];
  onDelete: (id: string) => void;
}

export const List: React.FC<ListProps> = ({ title, id, cards, onDelete }) => {
  const handleDeleteList = () => {
    onDelete(id);
  };


  return (
    <div className="list flex flex-col items-center h-full min-w-96 max-w-[27.5rem] p-4">
      <h3 className="justify-center">{title}</h3>
      <DeleteListButton listId={id} onClick={handleDeleteList} />
        <div className="flex flex-col space-y-4 w-full">
          {cards.map((card) => (
            <Card key={card.id}
            id={card.id}
            title={card.title}
            description={card.description} listId={""} />
            ))}
        </div>
      <NewCardForm listId={id}/>
    </div>
  );
};
