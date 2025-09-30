"use client"

import { MovieType } from "@/lib/types"
import { Cards } from "./Cards"

export const CardContainer=(props:{movies:MovieType[]} )=> {
const {movies}=props
  return (
    <div className=" w-full  p-10">
      <div className="grid grid-cols-5   gap-6 w-full  p-[8px] ">
        {movies.map((movie) => (
          <Cards movie={movie}></Cards>
            
        ))}
      </div>
    
    </div>
  )
}

