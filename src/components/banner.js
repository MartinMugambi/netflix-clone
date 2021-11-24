import axios from './axios';
import React, { useEffect, useState } from 'react';
import request from './api_requests';
import './banner.css';
import TextTruncate from 'react-text-truncate';
const Banner = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
     axios.get(request.fetchNetflixOriginals).then(response =>{
          setMovies(response.data.results[Math.floor(Math.random() * response.data.results.length-1)]);
     });
    },[]);

    const imageBaseUrl = `https://image.tmdb.org/t/p/original/${movies.backdrop_path}`;
  
    console.log(movies.backdrop_path);
    
    return(
        <header className="banner" style= {{
            backgroundImage: `linear-gradient(to right, hsl(180, 70%, 70%), rgba(17, 2, 2, 0.158)70%),url(${imageBaseUrl})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        }}>
            <h1 className= "banner__title">{movies?.title || movies?.name || movies.original_name ||movies.original_title }</h1>
            
            <div className= "banner__buttons">
            <button className= "banner__button">Play</button>
          <button className= "banner__button">My List</button>
            </div>
           <div  className= "banner__decription">
           <TextTruncate
      line={2}
      element="h4"
     truncateText="…"
    text={movies.overview}
    
/>
         </div>
        </header>
    );
}

export default Banner;
