
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
export const CarouselContainer=()=>{
return(
    <Carousel >
    <CarouselContent className="w-full  h-[600px]  bg-cover  bg-center bg-red-100 p ">
      <CarouselItem className="bg-[url(/movie2.avif)]  text-white "/>
      <CarouselItem className="bg-green-500 text-white ">
        Slide 2
      </CarouselItem>
      <CarouselItem className="bg-blue-500 text-white ">
        Slide 3
      </CarouselItem>
    </CarouselContent>
  
    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
      Previous
    </CarouselPrevious>
  
    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
      Next
    </CarouselNext>
  </Carousel>
  
)
}
