import { DeleteCardButton } from "../components/DeleteCardButton";

interface CardProps {
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  console.log('Card:', { title, description });
  return (
    <div className="card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
        <div className="my-2 flex w-full items-end justify-between text-xl font-black">
          <span>{title}</span>
            <DeleteCardButton />
        </div>
      <p className="mt-2 text-left">{description}</p>
    </div>
  );
};
