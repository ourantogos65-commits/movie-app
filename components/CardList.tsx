import { MovieType } from "@/lib/types";
import { Card } from "./Card";

import Link from "next/link";

type Props = {
  movies: MovieType[];
  text: string;
};

export const CardList = ({ movies, text }: Props) => {
  return (
    <div className=" w-full    p-10">
      <div className="flex  ml-5 justify-between w-full">
        <p className="text-black   text-2xl">{text}</p>
        <Link href="/page2">See more</Link>
      </div>

      <div className="flex flex-wrap ml-10  gap-6 w-full  p-[8px] ">
        {movies?.splice(0, 10).map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            className1="w-full h-[340px]"
            className="w-[229px] h-[439px]"
          />
        ))}
      </div>
    </div>
  );
};
