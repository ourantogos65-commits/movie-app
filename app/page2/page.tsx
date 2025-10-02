import { Navbar } from "@/components/navbar";
import { CardList2 } from "./_components/CardList2";
import { card1 } from "@/lib/moviecard";
import { GenreButton } from "@/components/GenreButton";
import { CarouselContainer2 } from "./_components/CarouselContainer2";
const Page = () => {
  return (
    <div>
      <div className="justify-center  flex items-center">
        <Navbar />
      </div>
      <div>
        <CarouselContainer2 />
      </div>
    </div>
  );
};
export default Page;
