import deleteListButtonImage from "../assets/images/delete-list-button.png";
import { useDispatch } from "react-redux";

interface DeleteProps {
  listId: string;
}

export const DeleteListButton: React.FC<DeleteProps> = ({ listId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({
      type: 'DELETE_LIST',
      payload: listId,
    });
  };

  return (
    <div className="h-[30px]">
        <button className="hidden h-[30px] w-[30px] cursor-pointer group-hover/list:block"
          onClick={handleDelete}>
          <img src={deleteListButtonImage} alt="Delete Button"></img>
        </button>
    </div>
  );
};
