import { MovieType } from "@/lib/types";
import { Card } from "./Card";

import Link from "next/link";

type Props = {
  movies: MovieType[];
  text: string;
  isLoading: Boolean;
};

export const CardList = ({ movies, text, isLoading }: Props) => {
  if (isLoading === false) {
    return (
      <div className="w-full  items-center flex flex-col  p-10">
        <div className="w-full bg-amber-300 flex justify-between">
          <p></p>
          <p></p>
        </div>
        <div className="flex flex-wrap  justify-center gap-7 w-full  p-[9px] ">
          {movies?.splice(0, 10).map((movie) => (
            <Card
              isLoading={false}
              key={movie.id}
              movie={movie}
              className1="w-full h-[340px]"
              className="w-[229px] h-[439px]"
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full  items-center flex flex-col  p-10">
        <div className="w-full  flex p-2 justify-between">
          <p className="font-bold text-2xl">{text}</p>
          <p>see more</p>
        </div>
        <div className="flex flex-wrap  justify-center gap-7 w-full  p-[9px] ">
          {movies?.splice(0, 10).map((movie) => (
            <Card
              isLoading={true}
              key={movie.id}
              movie={movie}
              className1="w-full h-[340px]"
              className="w-[229px] h-[439px]"
            />
          ))}
        </div>
      </div>
    );
  }
};
