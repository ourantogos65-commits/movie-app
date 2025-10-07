"use client";

import { ModeToggle } from "./Mode-toggle";
import { Input } from "./ui/input";
import { Genrelist } from "./Genrelist";
import { genre1 } from "@/lib/moviecard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  return (
    <nav className="mt-5 w-full h-[52px] rounded-lg flex border shadow-lg justify-center items-center">
      <div className="flex  w-[1600px]  justify-between items-center  ">
        <div className="flex  items-center gap-3">
          <img src="./film.svg" alt="Logo" className="w-8 h-8" />
          <p className="text-indigo-700 text-lg font-bold">Movie Z</p>
        </div>

        <div className="flex items-center  gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-1 bg-white rounded-md shadow hover:bg-gray-100 transition">
              Genre
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-80 mt-4">
              <DropdownMenuLabel>
                <h1 className="text-2xl">Genres</h1>
                <p className="text-gray-600 text-lg">
                  See list of movies by genre
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem>
                <Genrelist text="jdfk" genres={genre1} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Input className="w-80" />
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
};
