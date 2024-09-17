import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Card } from "./Card";
import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";
import "../../mockup/output.css";

interface ListProps {
  title: string;
  listId: string;
}


export const List: React.FC<ListProps> = ({ title, listId }) => {
  const cards = useSelector((state: RootState) =>
    state.cards.items.filter((card) => card.listId === listId)
  );

  return (
    <div className="group/list flex flex-col items-center h-full min-w-96 max-w-[27.5rem] p-4">
      <h2 className="justify-center">{title}</h2>
      <DeleteListButton listId={listId} />
      <div className="card-container">
        {cards.map((card) => (
            <Card key={card.id} content={card.content}/>
          ))}
      </div>
      <NewCardForm listId={listId} />
    </div>
  );
};
