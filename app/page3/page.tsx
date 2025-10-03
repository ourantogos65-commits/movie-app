import { Navbar } from "@/components/navbar";
import { MoviePoster } from "./_components/MoviePoster";
const Page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <MoviePoster />
      </div>
    </div>
  );
};
export default Page;
