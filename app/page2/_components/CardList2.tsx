"use client";

import { MovieType } from "@/lib/types";
import { Cards } from "@/components/Cards";

type Props = {
  movies: MovieType[];
  text: string;
};
export const CardList2 = ({ movies, text }: Props) => {
  return (
    <div className=" w-full  ">
      <div className="mr-[80px]  ml-[80px] gap-[32px]  flex flex-col ">
        <div className="mt-10 justify-between w-full">
          <p className="text-black  text-2xl">{text}</p>
        </div>

        <div className="gap-[8px] grid grid-cols-5 ">
          {movies.map((movie) => (
            <Cards
              className1="w-[229px] h-340px "
              className="w-[229px] h-[439px]"
              movie={movie}
            ></Cards>
          ))}
        </div>
        <div className="flex "></div>
      </div>
    </div>
  );
};
