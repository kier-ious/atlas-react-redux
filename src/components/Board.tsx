import  { List } from "./List";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import { ListSlice } from "../components/slices/listsSlice";


export const Board: React.FC = () => {
  const lists = useAppSelector((state: RootState) => state.lists.items);

  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="my-2 flex w-full items-end justify-between text-xl font-black">
          {lists.map((list: ListSlice) => (
            <List
              key={list.id}
              listId={list.id}
              title={list.title}
              />
          ))}
      </div>
    </div>
  );
};
