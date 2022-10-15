import {useEffect, useState} from 'react';

 

import MovieCard from './movieCard';
import './movie.css';
const MovieListing = () => {
    const [moviesList, setmoviesList] = useState('');
    useEffect(() => {
        fetch('http://localhost:3018/movieList').then((response) => {
            return response.json();      
        }).then((res) => {
            let movies = res.data.movie.map((movie, index) => {                
                return <MovieCard {...movie} key={index}></MovieCard>
            });            
            setmoviesList(movies);
        }).catch(e => {
            console.log(e);
        })
        
    },[]);
    return <>    
    <h2>Movie List</h2>
    <ul className="moviecard">{moviesList}</ul>
    </>;
}

export default MovieListing;