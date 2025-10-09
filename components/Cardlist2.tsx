import { MovieType } from "@/lib/types";
import { Card } from "./Card";
import Link from "next/link";

type Props = {
  movies: MovieType[];
  text: string;
};

export const CardlistTwo = ({ movies, text }: Props) => {
  return (
    <div className="w-full  items-center flex flex-col  p-10">
      <div className="flex flex-wrap  justify-center gap-7 w-full  p-[9px] ">
        {movies?.splice(0, 5).map((movie) => (
          <Card
            className3="w-[190px]  h-[372px]"
            isLoading={false}
            key={movie.id}
            movie={movie}
            className1="w-full h-[281px]"
            className="w-[190px] h-[372px]"
          />
        ))}
      </div>
    </div>
  );
};
