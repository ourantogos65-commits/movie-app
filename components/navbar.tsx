"use client"

import { ModeToggle } from "./Mode-toggle"
import { Input } from "./ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


export const Navbar=()=>{
    return(
        <nav className="mt-5 flex justify-center items-center text center gap-50">
        <div className="flex  h-[20px]    gap-5">
            <img src="./film.svg" alt="" />
            <p className="text-indigo-700 w-[64px]">Movie Z</p>
        </div>
         <div className="flex gap-8 ">

         <DropdownMenu>
  <DropdownMenuTrigger>Genre</DropdownMenuTrigger>
  <DropdownMenuContent className="w-[577px] p-5 ml-120 mt-5">
    <DropdownMenuLabel className="flex gap-5 ">
        <div><img src="./genre1.png" alt="" /></div>
        <div>
                <h3>Wicked</h3>
                <p>2024</p>
        </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
     <Input/>
        </div>
        <ModeToggle />
    </nav>
    )
}