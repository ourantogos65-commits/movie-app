// // import { Badge } from "@/components/ui/badge";
// // import { Postertype } from "@/lib/types";
// // type Props = {
// //   children: string;
// //   description:Postertype
// // };
// // export const PageNation = ({ description, children }: Props) => {
// //   return (
// //     <div className="flex flex-col gap-2.5">
// //     <div className="flex gap-1.5">
// //      <Badge>{children}</Badge>
// //     </div>
// //     <p>{description.p}</p>
// //   </div>

// //   );
// // };
// import { Badge } from "@/components/ui/badge";
// import { Postertype } from "@/lib/types";
// type Props = {
//   children: string;
//   description: Postertype;
// };
// export const PageNation = ({ description, children }: Props) => {
//   return (
//     <div className="flex  mt-20 flex-col gap-3 justify-center items-center">
//       <div className="flex w-[1070px] justify-between  h-[72px]">
//         <div>
//           <h1 className="text-2xl">Wicked</h1>
//           <p>2024.11.26.PG.2h 40m</p>
//         </div>
//         <div>
//           <h2>rating</h2>
//           <div className="flex">
//             <img src="/star.svg" alt="" />
//             <p>6.9/10</p>
//           </div>

//           <p className="text-sm">37k</p>
//         </div>
//       </div>
//       <div className="flex gap-4 ">
//         <div className="bg-[url(/movie3.png)] w-[290px] h-[428px] bg-cover"></div>
//         <div className="bg-[url(/movie3.png)] w-[760px] h-[428px] bg-cover bg-center shrink-0"></div>
//       </div>

//       <div className="flex flex-col gap-2.5">
//         <div className="flex gap-1.5">
//           <Badge>{children}</Badge>
//         </div>
//         <p>{description.p}</p>
//         <div className="flex flex-col gap-0.5">
//           <div>
//             <span>Director</span>
//             <span>{description.director}</span>
//           </div>
//           <div>
//             <span>Writes</span>
//             <span>{description.writes}</span>
//           </div>
//           <div>
//             <span>Stars</span>
//             <span>{description.stars}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { Badge } from "@/components/ui/badge";
import { Postertype } from "@/lib/types";

type Props = {
  children: string;
  description: Postertype;
};

export const PageNation = ({ description, children }: Props) => {
  return (
    <div className="flex mt-20 flex-col gap-6 justify-center items-center">
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

      <div className="flex flex-col gap-3 max-w-[1070px]">
        <Badge>{children}</Badge>
        <p>{description.p}</p>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <span className="font-semibold">Director:</span>
            <span>{description.director}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Writer:</span>
            <span>{description.writes}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Stars:</span>
            <span>{description.stars}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
