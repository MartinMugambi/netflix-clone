 import './App.css';
import Banner from './components/banner';
import Movie from './components/movies';
import NavBar from './components/navbar';
import FlipMove from 'react-flip-move';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FlipMove>
      <Banner />
      </FlipMove>
       <Movie />
    </div>
  );
}

export default App;
