import axios from "../axios";
import React, { useEffect, useState, forwardRef, useContext } from "react";
import { BannerId } from "../../App";
import { request, Movie } from "../../types";
import "./banner.css";
import TextTruncate from "react-text-truncate";
import { useMovie } from "../../context/contextProvider";

const Banner = forwardRef(({}, ref: any) => {
  const [movies, setMovies] = useState<Movie>();
  const [seconds, setSeconds] = useState<number>(0);
 
  const {movieId} = useMovie();


  useEffect(() => {
    axios.get(request.fetchNetflixOriginals).then((response) => {
      setMovies(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    });

    const interval = setInterval(() => {
      if (seconds === 2) setSeconds((seconds) => (seconds = 0));
      else setSeconds((seconds) => seconds + 1);
      setMovies((movies) => movies);
    }, 6000);
    return () => clearInterval(interval);
  }, [seconds]);

 

  const imageBaseUrl: string = `https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`;

  if (movieId === 0) {
  }

  return (
    <>
      {movieId === 0 ? (
        <header
          className="banner"
          ref={ref}
          style={{
            backgroundImage: `linear-gradient(to right, hsl(180, 70%, 70%), rgba(17, 2, 2, 0.158)70%),url(${imageBaseUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="banner__title">
            {movies?.title ||
              movies?.name ||
              movies?.original_name ||
              movies?.original_title}
          </h1>

          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <div className="banner__decription">
            <TextTruncate
              line={2}
              element="h4"
              truncateText="…"
              text={movies?.overview}
            />
          </div>
        </header>
      ) : (
        <header
          className="banner"
          ref={ref}
          style={{
            backgroundImage: `linear-gradient(to right, hsl(180, 70%, 70%), rgba(17, 2, 2, 0.158)70%),url(${imageBaseUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="banner__title">
            {movies?.title ||
              movies?.name ||
              movies?.original_name ||
              movies?.original_title}
          </h1>

          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <div className="banner__decription">
            <TextTruncate
              line={2}
              element="h4"
              truncateText="…"
              text={movies?.overview}
            />
          </div>
        </header>
      )}
    </>
  );
});

export default Banner;
