const express = require('express');
const movieRoutes = express.Router();
const fs = require('fs');


movieRoutes.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
movieRoutes.get('/movieList',(req, res, next) => {

    const jsonString = fs.readFileSync("./movie.json");
      
      const movie = JSON.parse(jsonString);
      
      if (movie) {

                res.status(200).json({
                    status: 'true',
                    data: {
                        movie
                    }
                });



            } else {
                res.status(200).json({
                    status: 'false',
                    data: '',
                    error: "Data Not Found"
                });
            }


});


  
module.exports = movieRoutes;






