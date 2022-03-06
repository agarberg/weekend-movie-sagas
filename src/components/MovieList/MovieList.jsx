import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom'

function MovieList() {
    const history = useHistory()
    const dispatch = useDispatch();
    //pull movies array from the store in index.jsx
    const movies = useSelector(store => store.movies);

    //on page load, dispatch fetch movies
    useEffect(() => {
        dispatch({type: 'FETCH_MOVIES'});
    }, []);
//send dispatch stating id and set movie
    function  getMovie(movie){
        console.log("clicked", movie.id)
        dispatch({
            type: 'SET_MOVIE',
            payload: {
                movie
            }
        })
        history.push('/Details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => getMovie(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;