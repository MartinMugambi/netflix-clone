import React from 'react';
import { request } from '../../types';
import MovieSection from '../section/movie_section';


const Movie = () =>{

    return(
        <div className= "movie">
           <MovieSection title="Trending Now" fetchUrl= {request.fetchTrendingMovies} isLarge = {true}     />
           <MovieSection title="NETFLIX ORIGINALS" fetchUrl= {request.fetchNetflixOriginals}   />
           <MovieSection title="Top Rated" fetchUrl= {request.fetchTopRatedMovies}  />
           <MovieSection title="Action Movies" fetchUrl= {request.fecthActionMovies}  />
           <MovieSection title="Comedy Movies" fetchUrl= {request.fetchComedyMovies} />
           <MovieSection title="Horror Movies" fetchUrl= {request.fecthHororMovies} />
           <MovieSection title="Romance Movies" fetchUrl= {request.fetchRomance}  />
           <MovieSection title="Documentaries" fetchUrl= {request.fecthDocumentariesMovies}   />
        </div>
    
    );
}

export default Movie;