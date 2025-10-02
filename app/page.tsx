"use client";
import { Navbar } from "@/components/navbar";
import { CarouselContainer } from "@/components/CarouselContainer";
import { Footer } from "@/components/Footer";
import { CardList } from "@/components/CardList";
import { ScrollArea } from "@/components/ui/scroll-area";
import { card1, card2, card3 } from "@/lib/moviecard";
import { MovieType } from "@/lib/types";
import { useState } from "react";
const Home = () => {
  const [movies, setMovies] = useState<MovieType[]>();
  return (
    <ScrollArea className="flex flex-col justify-center items-center w-full">
      <div className="justify-center  flex items-center">
        <Navbar />
      </div>
      <div className="mt-10 w-[2050px] flex flex-col ">
        <CarouselContainer />
      </div>
      <div className="flex mt-10 flex-col gap-12 w-full">
        <CardList text="Upcoming" movies={card1} />
        <CardList text="Popular" movies={card2} />
        <CardList text="Top Rated" movies={card3} />
      </div>
      <Footer />
    </ScrollArea>
  );
};
export default Home;
