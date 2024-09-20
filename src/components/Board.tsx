import  { List } from "./List";
import { useAppSelector, useAppDispatch } from "../store";
import { deleteList } from "./slices/listsSlice";


export const Board: React.FC = () => {
  const dispatch = useAppDispatch();
  const lists = useAppSelector((state) => state.lists.lists);
  const cards = useAppSelector((state) => state.lists.cards);

  const handleDeleteList = (id: string) => {
    dispatch(deleteList({ id }));
  };

  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        {lists.map((list) => {
          const filteredCards = Object.keys(cards)
            .filter((cardId) => cards[cardId].listId === list.id)
            .map((cardId) => cards[cardId]);

          return (
            <List
              key={list.id}
              id={list.id}
              title={list.title}
              cards={filteredCards}
              onDelete={handleDeleteList}
            />
          );
        })}
      </div>
    </div>
  );
};
