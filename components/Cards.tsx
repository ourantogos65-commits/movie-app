

import { MovieType } from "@/lib/types";
export const Cards =(props:{movie:MovieType})=>{
const {movie}=props

return (

    <div className=" w-[295px] overflow-hidden rounded-2xl  h-[439px]">
      <img 
      
      src={movie.image[0]} 
      alt={`Photo by ${movie.text}`} 
     className=" w-[295px] h-[340px]" 
/>
 <div className="bg-gray-200 h-40 p-3">
 <div  className="flex bg-cover text-black shrink-0 gap-2">
   <img src="./star.svg" alt="" /> 
     <p>6.9/10</p>
 </div>
 <p className=" text-black font-semibold">
   {movie.text}
 </p>
     </div>
      </div>
   
)
}
