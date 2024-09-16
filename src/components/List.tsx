import { useState } from "react";
import { Card } from "./Card";
import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";
import "../../mockup/output.css";

interface ListProps {
  title: string;
}


export const List: React.FC<ListProps> = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="list"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="To Do">{title}</h2>
      <div className="card-container">
        <Card />
        <Card />
      </div>
      { isHovered && <DeleteListButton /> }
      <NewCardForm />
    </div>
  );
};
