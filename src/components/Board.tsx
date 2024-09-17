import { List } from "./List";
import { ListItem } from "../components/slices/listsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";


export const Board: React.FC = () => {
  const lists = useSelector((state: RootState) => state.list.items);
  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="my-2 flex w-full items-end justify-between text-xl font-black">
        {lists.map((list: ListItem) => (
          <List key={list.id} listId={list.id}  title={list.title} />
        ))}
      </div>
    </div>
  );
};
