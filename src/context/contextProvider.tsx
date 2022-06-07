import { useState, createContext, useContext } from "react";
import { Movie } from "../types";

export const StateContext = createContext<number | any>(0);
const ContextProvider = ({ children }: any) => {
  const [movieId, setMovieId] = useState(0);
  const [movies, setMovies] = useState<Movie>();
  const [seconds, setSeconds] = useState<number>(0);
  const [movieSection, setMovieSection] = useState<Movie[]>([]);
  return (
    <StateContext.Provider
      value={{
        movieId,
        setMovieId,
        movies,
        setMovies,
        seconds,
        setSeconds,
        movieSection,
        setMovieSection,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useMovie = () => useContext(StateContext);

export default ContextProvider;
