// import { PageNation } from "./PageNation";
// import { postertype } from "@/lib/moviecard";
// import { Postertype } from "@/lib/types";
// export const MoviePoster=()=>{
//     return(
//         <div>
//             <PageNation
//             description={postertype}
//             >fdb</PageNation>
//         </div>
//     )
// }
import { PageNation } from "./PageNation";
import { postertype } from "@/lib/moviecard";

export const MoviePoster = () => {
  return (
    <div>
      <PageNation children="sfrbrs" description={postertype}></PageNation>
    </div>
  );
};
