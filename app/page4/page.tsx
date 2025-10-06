import { genre1 } from "@/lib/moviecard";
import { Genrelist } from "@/components/Genrelist";
export const Page = () => {
  return (
    <div>
      <Genrelist
        classname=" w-[500px] h-[600px] "
        classname1="grid grid-cols-4   gap-2   p-[8px]"
        genres={genre1}
        text="hus"
      />
    </div>
  );
};
export default Page;
