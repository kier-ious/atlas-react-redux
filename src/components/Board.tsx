import  { List } from "./List";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import { NewCardForm } from "./NewCardForm";


export const Board: React.FC = () => {
  const lists = useAppSelector((state: RootState) => state.lists);

  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
    <NewCardForm listId={lists.lists[0]?.id || ''} />

    <div className="my-2 flex w-full items-end justify-between text-xl font-black">
      {lists.lists.length === 0 ? (
        <p>No lists yet. Add a list!</p>
      ) : (
        lists.lists.map((list) => (
          <List key={list.id} id={list.id} title={list.title} />
        ))
      )}
    </div>
  </div>
  );
};
