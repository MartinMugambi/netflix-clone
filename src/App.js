 import './App.css';
import Banner from './components/banner';
import Movie from './components/movies';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
       <Movie />
    </div>
  );
}

export default App;
