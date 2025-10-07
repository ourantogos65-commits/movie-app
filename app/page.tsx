import { Navbar } from "@/components/navbar";
import { CarouselContainer } from "@/components/CarouselContainer";
import { Footer } from "@/components/Footer";
import { CardList } from "@/components/CardList";
import axios from "axios";

async function Home() {
  const getMovies = async (category: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTdmMmY2MDI0MTM0MzNhMjdkNzE2OTAzYjNlZDZjMSIsIm5iZiI6MTc1OTQ2NDI2NS40ODQsInN1YiI6IjY4ZGY0YjQ5ZWFhMzdmMGY0ZDk3Mjg2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNVDXRNk4j36GyMSTAcR9f7RbhkxwDDyPhRvZ30ySyA",
        },
      }
    );
    return response.data;
  };

  const popularMovieData = await getMovies("popular");
  const upcomingMovieData = await getMovies("upcoming");
  const topRatedMovieData = await getMovies("top_rated");

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="justify-center  flex items-center">
          <Navbar />
        </div>
        <div className="mt-10 w-full flex flex-col ">
          <CarouselContainer />
        </div>
        <div className="overflow-auto flex mt-10 flex-col  w-full">
          <CardList
            className1="w-full h-[340px]"
            className="w-[230px] h-[439px]"
            movies={popularMovieData.results}
            text="Upcoming"
          />
          <CardList
            className1="w-full h-[340px]"
            className="w-[230px] h-[439px]"
            movies={upcomingMovieData.results}
            text="Popular"
          />
          <CardList
            className1="w-full h-[340px]"
            className="w-[230px] h-[439px]"
            movies={topRatedMovieData.results}
            text="Top Rated"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
