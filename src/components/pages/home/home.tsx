import NavBar from "../../navbar/navbar";
import FlipMove from "react-flip-move";
import Banner from "../../banner/banner";
import Movie from "../../movie/movies"
interface Props{
    setId: (id: number | undefined) => void
}
const Home = (props: Props) =>{

    return (
        <>
        <NavBar />
        <FlipMove />
        <Banner />
        <FlipMove />
        <Movie  setId= {props.setId}/>
        </>
    )
}

export default Home;