import { Navbar } from "@/components/navbar";
import { CarouselContainer2 } from "./_components/CarouselContainer2";
import { Genrelist } from "@/components/Genrelist";
import { genre1 } from "@/lib/moviecard";
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
