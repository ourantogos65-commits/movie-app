"use client";

import { ModeToggle } from "./Mode-toggle";
import { Input } from "./ui/input";
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
    <nav className="mt-5 h-[52px] rounded-lg flex border shadow-lg justify-center items-center">
      <div className="flex  w-[1280px]  justify-between items-center  ">
        <div className="flex  items-center gap-3">
          <img src="./film.svg" alt="Logo" className="w-8 h-8" />
          <p className="text-indigo-700 text-lg font-bold">Movie Z</p>
        </div>

        <div className="flex items-center  gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-1 bg-white rounded-md shadow hover:bg-gray-100 transition">
              Genre
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[577px] p-5 mt-2">
              <DropdownMenuLabel className="flex gap-4 items-center">
                <img
                  src="./genre1.png"
                  alt="Genre"
                  className="w-12 h-12 rounded-md"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Wicked</h3>
                  <p className="text-gray-500 text-sm">2024</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Input className="w-60" />
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
};
