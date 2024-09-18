import deleteCardBtn from "../assets/deleteListBtn.svg";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { deleteCard } from "./slices/cardsSlice";

interface DeleteProps {
  listId: string;
}

export const DeleteCardButton: React.FC<DeleteProps> = ({ listId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(listId));
  };

  return (
    <button className="hidden group-hover/card:block"
      onClick={handleDelete}
      aria-label="Delete card">
        <img src={deleteCardBtn}></img>
    </button>
  );
};
