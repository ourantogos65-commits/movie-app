"use client";
import { Navbar } from "@/components/navbar";
import { CarouselContainer } from "@/components/CarouselContainer";
import { Footer } from "@/components/Footer";
import { CardList } from "@/components/CardList";
import { axiosInstance } from "@/lib/utils";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton";

function Home() {
  const getMovies = async (category: string) => {
    const response = await axiosInstance.get(
      `/movie/${category}?language=en-US`
    );

    return response.data.results;
  };
  const { data, isLoading, error } = useSWR(
    `now_playing?language=en-US`,
    getMovies
  );
  console.log(data, "data");
  const {
    data: upcoming,
    isLoading: upcomingLoading,
    error: upcomingerror,
  } = useSWR(`upcoming?language=en-US`, getMovies);
  const {
    data: popular,
    isLoading: popularLoading,
    error: popularerror,
  } = useSWR(`popular?language=en-US`, getMovies);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="justify-center w-full  flex items-center">
          <Navbar />
        </div>
        <div className="mt-10 w-full flex flex-col ">
          {isLoading ? (
            <Skeleton className="h-[700px] w-full bg-gray-300" />
          ) : (
            <CarouselContainer movies={data} />
          )}
        </div>
        <div className="overflow-auto flex mt-10 flex-col  w-full">
          {upcomingLoading ? (
            <Skeleton className="w-[229px] h-[439px] bg-gray-300" />
          ) : (
            <CardList movies={upcoming} text="Upcoming" />
          )}
          {popularLoading ? (
            <Skeleton className="w-[229px] h-[439px] bg-gray-300" />
          ) : (
            <CardList movies={popular} text="Popular" />
          )}
          {/*
          <CardList movies={upcomingMovieData} text="Popular" />
          <CardList movies={topRatedMovieData} text="Top Rated" /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
