"use client";
import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export const TrailerModals = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-[145px] h-[40px] rounded-2xl text-black bg-white">
        watch trailer
      </DialogTrigger>
      <DialogContent className="w-full h-[500px]">
        <ReactPlayer />
      </DialogContent>
    </Dialog>
  );
};
