"use client";

import { MovieType } from "@/lib/types";
import { Cards } from "./Cards";

type Props = {
  movies: MovieType[];
  text: string;
};
export const CardList = ({ movies, text }: Props) => {
  return (
    <div className=" w-full  p-10">
      <div className="flex  ml-5 justify-between w-full">
        <p className="text-black  text-2xl">{text}</p>
      </div>

      <div className="grid grid-cols-6   gap-6 w-full  p-[8px] ">
        {movies.map((movie) => (
          <Cards className="w-[300px] h-[439px]" movie={movie}></Cards>
        ))}
      </div>
    </div>
  );
};
