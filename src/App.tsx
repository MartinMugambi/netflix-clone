import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/home";
import Details from "./components/pages/details/details";

const LazyHome = React.lazy(()=> import('./components/pages/home/home'));

export const BannerId = React.createContext<number | undefined>(undefined);

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback = "loading...">
                  <Home />
                </React.Suspense>
              }
            ></Route>
            <Route path="/movie" element={<Details />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
