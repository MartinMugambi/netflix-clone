import {useEffect, useContext, useState} from "react"
import Banner from "../../banner/banner"
import { BannerId } from "../../../App"
import './details.css'
import Movie from "../../movie/movies"
import axios from "axios"
import { API_KEY } from "../../../types"
import Card from "../../card/card"
import { useMovie } from "../../../context/contextProvider"



interface Actor{
  id: number,
  name: string,
  original_name: string,
  profile_path: string,
  character: string
}
const Details = () =>{

 
   const [data, setData] = useState<any>({})
   const [actor, setActor] = useState<Actor[]>([])

   const {movieId, setMovieId} = useMovie();

   useEffect(()=>{

    const fetchActor  = async (url:string) =>{

      const response  = await fetch(url)

      const responseData = await response.json()

      return responseData;
  }

  fetchActor(`https://api.themoviedb.org/3/movie/${movieId}/casts?api_key=${API_KEY}`).then(response =>{
   setActor(response.cast)
    
    
  }).catch(error =>{
    console.log(error);
    
  })

  },[movieId])
   
    useEffect(()=>{
      
    const fetchMovie  = async (url:string) =>{

        const response  = await fetch(url)

        const responseData = await response.json()

        return responseData;
    }

    fetchMovie(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5d657d365f93f31013f78d331be5420e&language=en-US&page=1&include_adult=false`).then(response =>{
      setData(response)
      
    }).catch(error =>{
      console.log(error);
      
    })

    },[movieId])


    const {overview, backdrop_path,original_title} = data

    console.log(overview,backdrop_path, original_title);
    
    const imageBaseUrl:string = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
    

    const actorList = actor.slice(0, 20).map(act => <Card key={act.id}  id= {act.id} name = {act.name} original_name ={act.original_name} character = {act.character} profile_path ={act.profile_path} />)
    return (
      <div>
      <header className="banner"  style= {{
        backgroundImage: `linear-gradient(to right, hsl(180, 70%, 70%), rgba(17, 2, 2, 0.158)70%),url(${imageBaseUrl})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        opacity: "0.9",
    }}>
        <h1 className= "banner__title">{original_title }</h1>
        
        <div className= "banner__buttons">
        <button className= "banner__button">Play</button>
      <button className= "banner__button">My List</button>
        </div>
       <div  className= "banner__decription">
      
      <p>{overview}</p>
     </div>

    </header>
     
    <h3>Series/Movie Actors</h3>
     <div className="details__actor">
       {actorList}
     </div>

    </div>
    );
    
}

export default Details