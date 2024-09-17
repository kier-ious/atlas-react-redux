import Delete from "../assets/images/delete-card-button.png";


export const DeleteCardButton: React.FC = () => {
  return (
    <button className="hidden group-hover/card:block">
      <img className="h-[20px] w-[20px]" src={Delete}></img>
    </button>
  );
};
