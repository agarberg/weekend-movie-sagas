import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";



function Details() {
    const dispatch = useDispatch();
    const selectedMovie = useSelector((store) => store.selectedMovie);
    const genres = useSelector((store) => store.genres);
    console.log(genres)
    console.log(selectedMovie)
  
  return(
      <>
      <h1>Movie Details</h1>
        <div key={selectedMovie.movie.id}> 
        <img src={selectedMovie.movie.poster}/>
        <h2>{selectedMovie.movie.title}</h2>
        <h4>{selectedMovie.movie.description}</h4>
        </div>
        <h2>Genres:</h2>
        {genres.map((genres, id) => {
            return(
                <div key={id}>
                <h4>{genres.name}</h4>
                </div>
            )
        })}
  </>
  )
  
  }
  
  export default Details;
  