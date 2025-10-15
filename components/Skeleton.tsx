import React from "react";

import { Skeleton } from "./ui/skeleton";

export const Skeletonpage = () => {
  const items = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
  ];

  return (
    <div className="flex gap-3">
      {items.map((item) => (
        <Skeleton key={item.id} className="w-[229px] h-[439px] bg-gray-300">
          {item.text}
        </Skeleton>
      ))}
    </div>
  );
};
