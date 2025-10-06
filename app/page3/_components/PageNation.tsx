import { Badge } from "@/components/ui/badge";
import { Postertype } from "@/lib/types";

type Props = {
  children: string;
  description: Postertype;
};

export const PageNation = ({ description, children }: Props) => {
  return (
    <div className="flex mt-20  flex-col gap-6 justify-center items-center">
      <div className="flex w-[1070px] justify-between h-[72px]">
        <div>
          <h1 className="text-2xl font-bold">{description.title}</h1>
          <p>
            {description.releaseDate} · {description.ratingCode} ·{" "}
            {description.duration}
          </p>
        </div>
        <div className="text-right">
          <h2 className="font-semibold">Rating</h2>
          <div className="flex items-center gap-1">
            <img src="/star.svg" alt="star" />
            <p>{description.rating}/10</p>
          </div>
          <p className="text-sm text-gray-500">{description.votes} votes</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="bg-[url(/movie3.png)] w-[290px] h-[428px] bg-cover rounded-lg"></div>
        <div className="bg-[url(/movie3.png)] w-[760px] h-[428px] bg-cover bg-center shrink-0 rounded-lg"></div>
      </div>

      <div className="flex mr-160 flex-col gap-3 max-w-[1070px]">
        <Badge>{children}</Badge>
        <p>{description.p}</p>

        <div className="flex flex-col gap-1 ">
          <div className="flex gap-2">
            <span className="font-semibold">Director:</span>
            <span>{description.director}</span>
          </div>
          <div className="flex gap-5">
            <span className="font-semibold">Writer:</span>
            <span>{description.writes}</span>
          </div>
          <div className="flex gap-7">
            <span className="font-semibold">Stars:</span>
            <span>{description.stars}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
