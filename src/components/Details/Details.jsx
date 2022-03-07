import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import './Details.css'

function Details() {
    const history = useHistory()
    const selectedMovie = useSelector((store) => store.selectedMovie);
    const genres = useSelector((store) => store.genres);
//go back to home when button is clicked 
    function handleClick (){
        history.push('/')
    }
  return(
      <>
      <h1>Movie Details</h1>
      <div className="tile">
      {/* display photo, title and description */}
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
        </div>
        {/* //button for GO BACK */}
        <button onClick={handleClick}>back to list...</button>
  </>
  )
  }
  export default Details;
  