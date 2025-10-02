import { MovieType } from "@/lib/types";
import { cn } from "@/lib/utils";
type Props = {
  className: string;

  movie: MovieType;
};
export const Cards = ({ movie, className }: Props) => {
  return (
    <div className={cn("overflow-hidden bg-amber-200 rounded-2xl", className)}>
      <img
        src={movie.image[0]}
        alt={`Photo by ${movie.text}`}
        className="w-full "
      />
      <div className="bg-gray-300 h-40 p-3">
        <div className="flex bg-cover text-black shrink-0 gap-2">
          <img src="./star.svg" alt="" className="w-5" />
          <p>6.9/10</p>
        </div>
        <p className=" text-black font-semibold">{movie.text}</p>
      </div>
    </div>
  );
};
