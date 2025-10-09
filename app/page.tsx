import { Navbar } from "@/components/navbar";
import { CarouselContainer } from "@/components/CarouselContainer";
import { Footer } from "@/components/Footer";
import { CardList } from "@/components/CardList";
import { axiosInstance } from "@/lib/utils";
import { MovieType } from "@/lib/types";
async function Home() {
  const getMovies = async (category: string) => {
    const response = await axiosInstance.get(
      `/movie/${category}?language=en-US`
    );

    return response.data;
  };
  const nowplayingMovieData = await getMovies("now_playing");
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
          <CarouselContainer movies={nowplayingMovieData.results} />
        </div>
        <div className="overflow-auto flex mt-10 flex-col  w-full">
          <CardList
            isLoading={false}
            movies={popularMovieData.results}
            text="Upcoming"
          />
          <CardList
            isLoading={false}
            movies={upcomingMovieData.results}
            text="Popular"
          />
          <CardList
            isLoading={false}
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
