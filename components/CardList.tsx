import { MovieType } from "@/lib/types";
import { Card } from "./Card";
import Link from "next/link";

type Props = {
  movies: MovieType[];
  text: string;
};

export const CardList = ({ movies, text }: Props) => {
  return (
    <div className="w-full  items-center flex flex-col  p-10">
      <div className="w-full  flex p-2 justify-between">
        <p className="font-bold text-2xl">{text}</p>
        <Link href={"/page2"}>see more</Link>
      </div>
      <div className="flex flex-wrap  justify-center gap-7 w-full  p-[9px] ">
        {movies?.splice(0, 10).map((movie) => (
          <Card
            className3="w-[229px] h-[439px]"
            key={movie.id}
            movie={movie}
            className1="w-full  h-[340px]"
            className="w-[229px] h-[439px]"
          />
        ))}
      </div>
    </div>
  );
};
