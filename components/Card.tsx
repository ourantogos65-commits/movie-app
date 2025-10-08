"use client";

import { MovieType } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  movie: MovieType;
  className: string;
  className1: string;
};

export const Card = ({ movie, className, className1 }: Props) => {
  const { title, poster_path, vote_average, id } = movie;
  const router = useRouter();

  const HandleClick = () => {
    router.push(`/detail/${id}`);
  };
  console.log(router);
  return (
    <div
      onClick={HandleClick}
      className={cn("overflow-hidden rounded-2xl", className)}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`Poster of ${title}`}
        width={500}
        height={750}
        className={cn(className1)}
      />
      <div className="bg-gray-300 h-40 p-3">
        <div className="flex items-center text-black gap-2">
          <img src="/star.svg" alt="Star" className="w-5" />
          <p>
            <span>{vote_average}</span>/10
          </p>
        </div>
        <p className="text-black font-semibold">{title}</p>
      </div>
    </div>
  );
};
