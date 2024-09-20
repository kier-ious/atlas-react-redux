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
  // console.log("Rendering List:", title, cards);
  const handleDeleteList = () => {
    onDelete(id);
  };


  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton listId={id} onClick={handleDeleteList} />
      <h3 className="justify-center">{title}</h3>
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
