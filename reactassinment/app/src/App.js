import React from 'react';  
import ReactDOM from 'react-dom'; 

import { BrowserRouter, NavLink } from 'react-router-dom'; 
import { Routes, Route } from "react-router";


import MovieListing from './components/movie';
import Home from './components/home';

import './App.css';
const App = () => {
    return <BrowserRouter>
    <ul className='nav-bar'>  
        <li>  
          <NavLink to="/" end>Home</NavLink>  
        </li>  
        
        <li>  
          <NavLink to="/movies">Movies</NavLink>  
        </li>  
      </ul>  
      <Routes>  
         <Route exact path="/" element={<Home />} />  
         <Route exact path="/movies" element={<MovieListing />} />           
      </Routes>  
    </BrowserRouter>
}

export default App;
