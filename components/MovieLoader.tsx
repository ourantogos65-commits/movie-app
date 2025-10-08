import { Navbar } from "@/components/navbar";
import { CarouselContainer } from "@/components/CarouselContainer";
import { Footer } from "@/components/Footer";
import { CardList } from "@/components/CardList";
import { axiosInstance } from "@/lib/utils";

export const MovieLoader = () => {
  const getMovies = async (category: string) => {
    const response = await axiosInstance.get(
      `/movie/${category}?language=en-US`
    );

    return response.data;
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="justify-center  flex items-center">
          <Navbar />
        </div>
        <div className="mt-10 w-full flex flex-col "></div>
        <div className="overflow-auto flex mt-10 flex-col  w-full"></div>
        <Footer />
      </div>
    </>
  );
};
