"use client";

import { GenreType } from "@/lib/types";
import { Genre } from "./Genre";

type Props = {
  genres: GenreType[];
  text: string;
};
export const Genrelist = ({ genres }: Props) => {
  return (
    <div className=" w-[577px] h-[250px]  ">
      <div className="flex  ml-5 justify-between w-full">
        <p className="text-black  text-2xl">dbh</p>
      </div>

      <div className="grid grid-cols-5   gap-2 w-full  p-[8px] ">
        {genres.map((genre) => (
          <Genre genre={genre}></Genre>
        ))}
      </div>
    </div>
  );
};
