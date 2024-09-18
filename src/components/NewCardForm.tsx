import NewCard from "../assets/images/new-card-form.png";

interface NewCardProps {
  listId: string;
}

export const NewCardForm: React.FC<NewCardProps> = ({ listId }) => {
  return (
    <div className="group/new-card m-3 flex h-44 w-full justify-center">
      <img src={NewCard} alt="New Card" />
    </div>
  );
};
