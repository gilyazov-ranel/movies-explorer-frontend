import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader'

function MoviesCardList({
    movies,
    searchingResults,
    onCreateMovies,
    saveMovies,
    resultRequestServer,
    preloader
}) {
    let [isIndex, setIndex] = useState(window.innerWidth > 768 ? 12 : window.innerWidth > 481 ? 8 : 5);

    let filterMovies = movies.slice(0, isIndex).map((movie, id) => {

        const isLiked = saveMovies.some(i => i.movieId === movie.id);

        return (
            <MoviesCard key={id}
                movie={movie}
                onCreateMovies={onCreateMovies}
                saveButton={isLiked}
            />
        )
    })

    useEffect(() => {
        if (filterMovies.length === 0) {
            setIndex(window.innerWidth > 768 ? 12 : window.innerWidth > 481 ? 8 : 5)
        }
    }, [filterMovies])

    function showMore() {
        if (window.innerWidth > 768) {
            setIndex(isIndex += 3)
        } else {
            setIndex(isIndex += 2)
        }
    }
    return (
        <section className='movies'>
            {
                preloader ? <Preloader /> :
                    (movies.length !== 0) ?
                        <>
                            <div className='movies__card'>
                                {filterMovies}
                            </div>
                            {filterMovies.length !== movies.length ?
                                < button type='button' className='movies__button' onClick={() => { showMore() }}>
                                    Ёще
                                </button>
                                : ''
                            }

                        </>
                        : (searchingResults) ? 'Ничего не найдено' : resultRequestServer
            }

        </section >
    )
}

export default MoviesCardList;