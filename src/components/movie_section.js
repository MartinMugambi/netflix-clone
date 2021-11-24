import React, { useEffect, useState } from "react";
import axios from "./axios";
import './moviesection.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
const MovieSection = ({title, fetchUrl, isLarge}) =>{
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailer] = useState("");

    useEffect(()=>{
      axios.get(fetchUrl).then(response => {
        setMovies(response.data.results);
      }).catch(error =>{
         console.log(error);
      });


    },[fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

    const handleClick = movie =>{
     if(trailerUrl){
         setTrailer('')
     } else{
        movieTrailer(movie?.name || movies?.title  || movies.original_name|| movies.original_title || "").then(url =>{
           const urlParams = new URLSearchParams(new URL(url).search); 
           setTrailer(urlParams.get('v'));
        }).catch(error =>{
            console.log(error);
        })
     }
    }
    
   return(
       <div className= 'moviesection '>
         <h4>{title}</h4>

         <div className= {`moviesection__poster ${isLarge && "moviesection_large"}`}>
           {
               movies.map(movie => <img src= {` ${imageBaseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}` } alt ={movie.name} key= {movie.id} onClick= {()=>handleClick(movie)} />)
           }
         </div>
         { trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}
       </div>
   );
}


export default MovieSection;