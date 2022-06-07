import React, { useEffect, useState } from "react";
import axios from  "../axios"
import './moviesection.css';
import {Movie} from '../../types'
import {useNavigate} from "react-router-dom"
import { useMovie } from "../../context/contextProvider";

interface Props{
  title: string,
  fetchUrl: string,
  isLarge?: boolean,
}


const MovieSection = (props: Props) =>{
    const [movies, setMovies] = useState<Movie[]>([]);
   
    useEffect(()=>{
      axios.get(props.fetchUrl).then(response => {
        setMovies(response.data.results);
        console.log(response.data.results);
        
      }).catch(error =>{
         console.log(error);
      });


    },[props.fetchUrl])


    const {movieId, setMovieId} = useMovie()

    const imageBaseUrl:string = 'https://image.tmdb.org/t/p/w500/';
  
     const navigate = useNavigate();   
    
    const findMovie = (id: number | undefined) =>{
         setMovieId(id)   
       navigate('/movie')
    }

   return(
       <div className= 'moviesection '>
         <h4 data-testid="heading">{props.title}</h4>

         <div className= {`moviesection__poster ${props.isLarge && "moviesection_large"}`}>
           {
               movies.map(movie => <img src= {` ${imageBaseUrl}${props.isLarge ? movie.poster_path : movie.backdrop_path}` } alt ={movie.name} key= {movie.id} onClick={()=>findMovie(movie.id)} />)
           }
         </div>

       </div>
   );
}


export default MovieSection;