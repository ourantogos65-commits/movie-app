import { axiosInstance, credits } from "@/lib/utils";
import { MovieDetail } from "@/components/MovieDetail";
import { CardlistTwo } from "@/components/Cardlist2";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import ReactPlayer from "react-player";

const DetailsPage = async ({ params: { id } }: { params: { id: string } }) => {
  let movie: any = null;
  try {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    movie = response.data;
  } catch (error) {
    console.error("movie fetch error:", error);
  }

  const getMovies = async (category: string) => {
    const response = await axiosInstance.get(
      `/movie/${id}/similar?language=en-US&page=1`
    );

    return response.data;
  };
  const SimilarMovieData = await getMovies("Similar");
  return (
    <div className="w-full ">
      <Navbar />
      <MovieDetail movie={movie} />
      <CardlistTwo movies={SimilarMovieData.results} text="More Like This" />
      <Footer />
    </div>
  );
};

export default DetailsPage;

// import { axiosInstance, credits } from "@/lib/utils";
// import { MovieDetail } from "@/components/MovieDetail";
// import { CardlistTwo } from "@/components/Cardlist2";
// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/Footer";
// import { MovieType } from "@/lib/types";
// import ReactPlayer from "react-player";

// const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id } = await params;

//   const movie = await axiosInstance.get<MovieType>(
//     `/movie/${id}/language=en-US`
//   );

//   console.log(movie.data);

//   // const getMovies = async (category: string) => {
//   //   const response = await axiosInstance.get(
//   //     `/movie/${id}/videos?language=en-US&page=1`
//   //   );

//   //   return response.data;
//   // };
//   // const SimilarMovieData = await getMovies("Similar");
//   return (
//     <div className="w-full ">
//       {movie &&
//         movie.data.result.map((result) => {
//           <div key={result.key}>
//             <ReactPlayer
//               src={`https://www.youtube.com/watch?v=${result.key}`}
//             />
//           </div>;
//         })}
//     </div>
//   );
// };

// export default DetailsPage;
