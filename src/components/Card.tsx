import { DeleteCardButton } from "../components/DeleteCardButton";

interface CardProps {
  content: string;
}

export const Card: React.FC<CardProps> = ({ content }) => {
  return (
    <div className="card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
      <div className="my-2 flex w-full items-end justify-between text-xl font-black">
        <DeleteCardButton />
      </div>
      <p className="mt-0 text-start">{content}</p>
    </div>
  );
};
