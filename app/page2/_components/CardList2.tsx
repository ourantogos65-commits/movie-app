"use client";

import { MovieType } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  movies: MovieType[];
  text: string;
  className: string;
  className1: string;
};
export const CardList = ({ movies, text, className, className1 }: Props) => {
  return (
    <div className=" w-full    p-10">
      <div className="flex  ml-5 justify-between w-full">
        <p className="text-black   text-2xl">{text}</p>
        <button>See more</button>
      </div>

      <div className="flex flex-wrap ml-10  gap-6 w-full  p-[8px] ">
        {movies?.map((movie) => (
          <div className={cn(" overflow-hidden rounded-2xl ", className)}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`Photo by ${movie.title}`}
              className={cn(className1)}
            />
            <div className="bg-gray-300 h-40 p-3">
              <div className="flex bg-cover text-black shrink-0 gap-2">
                <img src="./star.svg" alt="" className="w-5" />
                <p>6.9/10</p>
              </div>
              <p className=" text-black font-semibold">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
