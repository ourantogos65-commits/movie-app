export type MovieType = {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type GenreType = {
  text: string;
};

export type Postertype = {
  title: string;
  releaseDate: string;
  ratingCode: string;
  duration: string;
  rating: number;
  votes: string;
  p: string;
  director: string;
  writes: string;
  stars: string;
};
