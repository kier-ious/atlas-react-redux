import deleteListBtn from "../assets/deleteListBtn.svg";
import { useDispatch } from "react-redux";
import { deleteList } from "./slices/listsSlice";


interface DeleteProps {
  listId: string;
}

export const DeleteListButton: React.FC<DeleteProps> = ({ listId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteList({ id: listId }));
  };

  return (
    <div className="h-[30px]">
        <button
          className="h-[30px] w-[30px] cursor-pointer group-hover/list:block"
          onClick={handleDelete}
          aria-label="Delete list">
          <img src={deleteListBtn} alt="Delete Button"></img>
        </button>
    </div>
  );
};
