import { GenreType } from "@/lib/types";
import { cn } from "@/lib/utils";
type Props = {
  className: string;

  genre: GenreType;
};
export const Genre = ({ genre }: Props) => {
  return (
    <div className="grid-cols-5 ">
      <button className="bg-gray-200 flex gap-1  rounded-lg text-black px-2 font-semibold">
        <p>{genre.text}</p>
        <img src="/chevron-right.svg" alt="" />
      </button>
    </div>
  );
};
