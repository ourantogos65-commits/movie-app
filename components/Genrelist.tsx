"use client";

import { GenreType } from "@/lib/types";

type Props = {
  genres: GenreType[];
  text: string;
};
export const Genrelist = ({ genres }: Props) => {
  return (
    <div className="w-[577px]  h-[250px]">
      <div className="flex  ml-5 justify-between w-full">
        <p className="text-black  text-2xl">dbh</p>
      </div>
      <div className="gap-2 w-full flex-wrap flex p-[8px]">
        {genres.map((genre) => (
          <div className="pb-2">
            <button className="border  border-gray-200 flex gap-0.5  justify-center px-1.5 rounded-lg text-black  font-semibold">
              <p>{genre.text}</p>
              <img src="/chevron-right.svg" alt="" />
            </button>
          </div>
          // <Genre genre={genre}></Genre>
        ))}
      </div>
    </div>
  );
};
//  w-[577px] h-[250px]className="grid grid-cols-5   gap-2 w-full  p-[8px] "
