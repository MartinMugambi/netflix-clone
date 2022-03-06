import React from 'react';
import { request } from '../../types';
import MovieSection from '../section/movie_section';

interface Props{
    
    setId: (id: number | undefined) =>void
}

const Movie = (props: Props) =>{

    return(
        <div className= "movie">
           <MovieSection title="NETFLIX ORIGINALS" fetchUrl= {request.fetchNetflixOriginals} isLarge = {true}  setId= {props.setId} />
           <MovieSection title="Trending Now" fetchUrl= {request.fetchTrendingMovies} setId= {props.setId}    />
           <MovieSection title="Top Rated" fetchUrl= {request.fetchTopRatedMovies} setId= {props.setId}   />
           <MovieSection title="Action Movies" fetchUrl= {request.fecthActionMovies} setId= {props.setId}   />
           <MovieSection title="Comedy Movies" fetchUrl= {request.fetchComedyMovies} setId= {props.setId}   />
           <MovieSection title="Horror Movies" fetchUrl= {request.fecthHororMovies} setId= {props.setId}   />
           <MovieSection title="Romance Movies" fetchUrl= {request.fetchRomance} setId= {props.setId}   />
           <MovieSection title="Documentaries" fetchUrl= {request.fecthDocumentariesMovies} setId= {props.setId}   />
        </div>
    
    );
}

export default Movie;