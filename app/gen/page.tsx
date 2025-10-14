import { axiosInstance, credits } from "@/lib/utils";
import { Card } from "@/components/Card";
import { MovieType } from "@/lib/types";
type GenrePageProps = {
  searchParams: Promise<{ genreId: string; genreName: string; page?: string }>;
};
const page = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const { genreId, genreName, page = 1 } = params;

  const getMovies = async () => {
    const response = await axiosInstance.get(
      `/discover/movie?language=en&with_genres=${genreId}&page=${page}`
    );

    return response.data;
  };
  const movies = await getMovies();
  return (
    <div className="w-full  items-center flex flex-col  p-10">
      <div className="flex flex-wrap  justify-center gap-7 w-full  p-[9px] ">
        genre page {genreId} {genreName}
        {movies.results?.map((movie: MovieType) => (
          <Card
            className3="w-[190px]  h-[372px]"
            key={movie.id}
            movie={movie}
            className1="w-full h-[281px]"
            className="w-[190px] h-[372px]"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
