
import React from  'react';


const MovieCard = (props) => {
    console.log(props);
   return (<li>
       <h3>{props.movie_name}</h3>
       <div>Rating: {props.rating}</div>
       <div>Released On: {props.released_date}</div>
   </li>);
}

export default MovieCard;