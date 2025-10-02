"use client";

import { GenreType } from "@/lib/types";
import { Genre } from "./Genre";

type Props = {
  genres: GenreType[];
  text: string;
};
export const Genrelist = ({ genres }: Props) => {
  return (
    <div className=" w-full  p-10">
      <div className="flex  ml-5 justify-between w-full">
        <p className="text-black  text-2xl">dbh</p>
      </div>

      <div className="grid grid-cols-6   gap-6 w-full  p-[8px] ">
        {genres.map((genre) => (
          <Genre className="w-[300px] h-[439px]" genre={genre}></Genre>
        ))}
      </div>
    </div>
  );
};
