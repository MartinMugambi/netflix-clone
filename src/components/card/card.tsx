import './card.css'

interface Props{
id: number,
name: string,
original_name: string,
profile_path: string,
character: string
}

const Card = (props: Props) =>{
    const imageBaseUrl:string = `https://image.tmdb.org/t/p/w500/${props.profile_path}`;
    return (
        <div className="car">
         <img src= {imageBaseUrl}  alt ="actor_photo"/>
         <div className='actor__details'>
         <h2>{props.name || props.original_name}</h2>
          <h5>{props.character}</h5>
         </div>
        </div>
    );
}

export default Card;