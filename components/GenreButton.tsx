type Props = {
  text: string;
};
export const GenreButton = ({ text }: Props) => {
  return (
    <div>
      <button className="w-fit h-[20px]  flex gap-2 border border-gray-200 ">
        <p>{text}</p>
        <img src="chevron-right.svg" alt="" />
      </button>
    </div>
  );
};
