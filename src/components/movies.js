import React from 'react';
import request from './api_requests';
import MovieSection from './movie_section';

const Movie = () =>{

    return(
        <div className= "movie">
           <MovieSection title="NETFLIX ORIGINALS" fetchUrl= {request.fetchNetflixOriginals} isLarge = {true} />
           <MovieSection title="Trending Now" fetchUrl= {request.fetchTrendingMovies} />
           <MovieSection title="Top Rated" fetchUrl= {request.fetchTopRatedMovies} />
           <MovieSection title="Action Movies" fetchUrl= {request.fecthActionMovies} />
           <MovieSection title="Comedy Movies" fetchUrl= {request.fetchComedyMovies} />
           <MovieSection title="Horror Movies" fetchUrl= {request.fecthHororMovies} />
           <MovieSection title="Romance Movies" fetchUrl= {request.fetchRomance} />
           <MovieSection title="Documentaries" fetchUrl= {request.fecthDocumentariesMovies} />
        </div>
    
    );
}

export default Movie;