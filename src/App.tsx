import './App.css';
import React,{useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/pages/home/home';
import Details from './components/pages/details/details';

export const BannerId = React.createContext<number | undefined>(undefined); 

function App() {
  const [id, setId] = useState<number>()
  console.log("My id is", id);
  
  return (
    <BannerId.Provider value={id}>
      <Router>
    <div className="App">
      <Routes>
        <Route path ='/' element ={<Home setId= {setId} />}></Route>
        <Route path = '/movie' element = {<Details setId= {setId}/>}></Route>
      </Routes>
    </div>
    </Router>
    </BannerId.Provider>
  );
}

export default App;
