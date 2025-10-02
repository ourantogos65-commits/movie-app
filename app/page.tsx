"use client";
import { Navbar } from "@/components/navbar";
import { CarouselContainer } from "@/components/CarouselContainer";
import { Footer } from "@/components/Footer";
import { CardList } from "@/components/CardList";

import { card1, card2, card3 } from "@/lib/moviecard";
import { MovieType } from "@/lib/types";
import { useState } from "react";
const Home = () => {
  const [movies, setMovies] = useState<MovieType[]>();
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="justify-center  flex items-center">
        <Navbar />
      </div>
      <div className="mt-10 w-full flex flex-col ">
        <CarouselContainer />
      </div>
      <div className="overflow-auto flex mt-10 flex-col gap-12 w-full">
        <CardList text="Upcoming" movies={card1} />
        <CardList text="Popular" movies={card2} />
        <CardList text="Top Rated" movies={card3} />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
