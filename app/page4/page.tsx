import { movieGenres } from "@/lib/moviecard";
import { Genrelist } from "@/components/Genrelist";
import { MovieType } from "@/lib/types";
export const Page = () => {
  return (
    <div>
      <Genrelist
        // classname=" w-[500px] h-[600px] "
        // classname1="grid grid-cols-4   gap-2   p-[8px]"
        genres={movieGenres}
        text="hus"
      />
    </div>
  );
};
export default Page;
