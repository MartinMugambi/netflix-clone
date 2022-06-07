import { useState, createContext, useContext } from "react";

export const StateContext = createContext<number | any>(0);
const ContextProvider = ({ children }: any) => {
  const [movieId, setMovieId] = useState(0);
  return (
    <StateContext.Provider value={{movieId, setMovieId}}>{children}</StateContext.Provider>
  );
};

export const useMovie = () => useContext(StateContext);

export default ContextProvider;
