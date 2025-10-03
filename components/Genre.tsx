import { GenreType } from "@/lib/types";
type Props = {
  genre: GenreType;
};
export const Genre = ({ genre }: Props) => {
  return (
    <div className="grid-cols-5 pb-2 ">
      <button className="border  flex gap-0.5  justify-center px-1.5 rounded-lg text-black  font-semibold">
        <p>{genre.text}</p>
        <img src="/chevron-right.svg" alt="" />
      </button>
    </div>
  );
};
