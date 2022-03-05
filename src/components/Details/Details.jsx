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
        <img src={selectedMovie.movie.poster}/>
        <h2>{selectedMovie.movie.title}</h2>
        <h4>{selectedMovie.movie.description}</h4>
        <h4>Genres:</h4>
        {genres.map(genres => {
            return(
                <div key={genres.id}>
                <h4>{genres.name}</h4>
                </div>
            )
        })}
  </>
  )
  
  }
  
  export default Details;
  