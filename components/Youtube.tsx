"use client";
import ReactPlayer from "react-player";
export const YoutubeComponents = ({ key }: { key: string }) => {
  return <ReactPlayer src={`https://www.youtube.com/watch?v=${key}`} />;
};
