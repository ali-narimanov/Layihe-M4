import React  from 'react';

import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
const Movies = () => {
    const { loading, movies, error } = useSelector(state => state.movies)
    if(loading){
    return <>loading.....</>
    }
    return (
        <>

            {
                <ul className="movies">
                    {movies?.length > 0 ? movies.map((item) => (
                        <li className="movies__item" key={item.imdbID}>
                            <MovieItem {...item} />
                        </li>
                    )) : error ?    <h1>Неполадки с  интернет подключением</h1> : <></>}
                </ul>

            }

        </>
    );

}

export default Movies;