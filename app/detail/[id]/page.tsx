// import { axiosInstance, credits } from "@/lib/utils";
// import { MovieDetail } from "@/components/MovieDetail";

// const DetailsPage = async ({ params: { id } }: { params: { id: string } }) => {
//   const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
//   const movie = response.data;

//   const response2 = await credits.get(`/movie/${id}/credits?language=en-US`);
//   const creditsData = response2.data;

//   const director =
//     creditsData.crew.find((c: any) => c.job === "Director")?.name || "Unknown";
//   const writers = creditsData.crew
//     .filter((c: any) => c.department === "Writing")
//     .map((c: any) => c.name)
//     .join(", ");
//   const stars = creditsData.cast.slice(0, 3).map((c: any) => c.name);

//   return <MovieDetail movie={movie} credits={{ director, writers, stars }} />;
// };

// export default DetailsPage;
import { axiosInstance, credits } from "@/lib/utils";
import { MovieDetail } from "@/components/MovieDetail";
import { CardlistTwo } from "@/components/Cardlist2";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
const DetailsPage = async ({ params: { id } }: { params: { id: string } }) => {
  const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
  const movie = response.data;

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
