import React from 'react';

const ClassComponent = (props) => {    // props ini adalah kiriman dari App.js
    const movies = props.movies.map((movie, index) => {      // ini adalah looping di gabung dengan props dari App.js
        
      return <li key={index}>{movie.Title} - {movie.Year}</li>
    //   return console.log(movie.Title); // ini adalah array loopingan namun bukan sampai disini menampilkan data
    });

    return <div>{movies}</div>; // kita butuh ini untuk menampilkan looping
}


export default ClassComponent;


