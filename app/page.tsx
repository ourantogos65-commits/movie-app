import { Navbar } from "@/components/navbar";
import { CarouselContainer } from "@/components/CarouselContainer";
import { Footer } from "@/components/Footer";
import { CardList } from "@/components/CardList";
import { axiosInstance } from "@/lib/utils";

async function Home() {
  const getMovies = async (category: string) => {
    const response = await axiosInstance.get(
      `/movie/${category}?language=en-US`
    );
    console.log(response.data);
    return response.data;
  };
  const now_playingData = await getMovies("now_playing");
  const popularMovieData = await getMovies("popular");
  const upcomingMovieData = await getMovies("upcoming");
  const topRatedMovieData = await getMovies("top_rated");
  // const { data, isLoading, error } = useSWR(`now_playing?language=en-US`, () =>
  //   getMovies("now_playing")
  // );
  // console.log(data, "data");
  // const {
  //   data: upcoming,
  //   isLoading: upcomingLoading,
  //   error: upcomingerror,
  // } = useSWR(`upcoming?language=en-US`, () => getMovies("upcoming"));
  // console.log(upcoming);
  // const {
  //   data: popular,
  //   isLoading: popularLoading,
  //   error: popularerror,
  // } = useSWR(`popular?language=en-US`, () => getMovies("popular"));

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="justify-center w-full  flex items-center">
          <Navbar />
        </div>
        <div className="mt-10 w-full flex flex-col ">
          <CarouselContainer movies={now_playingData.results} />
          {/* {isLoading ? (
            <Skeleton className="h-[700px] w-full bg-gray-300" />
          ) : (
            <CarouselContainer movies={data} />
          )} */}
        </div>
        <div className="overflow-auto flex mt-10 flex-col  w-full">
          <CardList movies={popularMovieData.results} text="Upcoming" />
          <CardList movies={upcomingMovieData.results} text="Popular" />
          <CardList movies={topRatedMovieData.results} text="Top Rated" />
          {/* {upcomingLoading ? (
            <Skeleton className="w-[229px] h-[439px] bg-gray-300" />
          ) : (
            <CardList movies={upcoming} text="Upcoming" />
          )}
          {popularLoading ? (
            <Skeletonpage />
          ) : (
            <CardList movies={popular} text="Popular" />
          )} */}

          {/* <CardList movies={upcomingMovieData} text="Popular" />
          <CardList movies={topRatedMovieData} text="Top Rated" /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
