import NavBar from "../../navbar/navbar";
import FlipMove from "react-flip-move";
import Banner from "../../banner/banner";
import Movie from "../../movie/movies"
 

const Home = () =>{

    return (
        <>
        <NavBar />
        <FlipMove />
        <Banner />
        <FlipMove />
        <Movie  />
        </>
    )
}

export default Home;