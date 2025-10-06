import { DescriptionBox } from "./DescriptionBox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const CarouselContainer = () => {
  return (
    <Carousel>
      <CarouselContent className="w-full  h-[700px]    bg-center  p ">
        <CarouselItem className="bg-[url(/movie1.jpg)] bg-cover text-white ">
          <DescriptionBox
            texth1="Wicked"
            texth2="Now Playing:"
            textp="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
          ></DescriptionBox>
        </CarouselItem>
        <CarouselItem className="bg-green-500 text-white ">
          <DescriptionBox
            texth1="Wicked"
            texth2="Now Playing:"
            textp="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
          ></DescriptionBox>
        </CarouselItem>
        <CarouselItem className="bg-blue-500 text-white ">
          <DescriptionBox
            texth1="Wicked"
            texth2="Now Playing:"
            textp="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
          ></DescriptionBox>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        Previous
      </CarouselPrevious>

      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        Next
      </CarouselNext>
    </Carousel>
  );
};
