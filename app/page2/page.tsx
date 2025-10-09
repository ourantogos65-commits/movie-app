// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/Footer";
// import { CardList } from "@/components/CardList";
// import { axiosInstance } from "@/lib/utils";

// async function Page() {
//   const getMovies = async (category: string) => {
//     const response = await axiosInstance.get(
//       `/movie/${category}?language=en-US`
//     );

//     return response.data;
//   };
//   const topRatedMovieData = await getMovies("top rated");
//   return (
//     <>
//       <div className="flex flex-col justify-center items-center w-full">
//         <div className="justify-center  flex items-center">
//           <Navbar />
//         </div>
//         <div className="overflow-auto flex mt-10 flex-col  w-full">
//           <CardList movies={topRatedMovieData.results} text="Top Rated" />
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }
// export default Page;

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

    return response.data;
  };

  const upcomingMovieData = await getMovies("upcoming");

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="justify-center  flex items-center">
          <Navbar />
        </div>

        <div className="overflow-auto flex mt-10 flex-col  w-full">
          <CardList
            isLoad={true}
            movies={upcomingMovieData.results}
            text="Upcoming"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
