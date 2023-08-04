import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader'
import {CONSTANT} from '../../../config/constant'

function MoviesCardList({
    movies,
    searchingResults,
    onCreateMovies,
    saveMovies,
    resultRequestServer,
    preloader,
    search,
    onDeleteMovies
}) {
    let [isIndex, setIndex] = useState(window.innerWidth >= CONSTANT.COMPUTER_SCREEN_SIZE ?
        CONSTANT.FILMS_SCREEN_COMPUTER :
         window.innerWidth >= CONSTANT.TABLET_SCREEN_SIZE ?
         CONSTANT.FILMS_SCREEN_TABLET :
         CONSTANT.FILMS_SCREEN_SMARTPHON);

    let filterMovies = movies.slice(0, isIndex).map((movie) => {
        const isLiked = saveMovies.some(i => i.movieId === movie.id);
        const saveMovieId = saveMovies.filter(i => i.movieId === movie.id);
        return (
            <MoviesCard key={movie.id}
                movie={movie}
                onCreateMovies={onCreateMovies}
                saveButton={isLiked}
                onDeleteMovies={onDeleteMovies}
                saveMovieId={saveMovieId}
            />
        )
    })

    useEffect(() => {
        if (filterMovies.length === 0) {
            setIndex(window.innerWidth >= CONSTANT.COMPUTER_SCREEN_SIZE ?
                CONSTANT.FILMS_SCREEN_COMPUTER :
                 window.innerWidth >= CONSTANT.TABLET_SCREEN_SIZE ?
                 CONSTANT.FILMS_SCREEN_TABLET :
                 CONSTANT.FILMS_SCREEN_SMARTPHON)
        }
    }, [filterMovies])

    function showMore() {
        if (window.innerWidth > CONSTANT.COMPUTER_SCREEN_SIZE) {
            setIndex(isIndex += CONSTANT.ADDING_SCREEN_COMPUTER)
        } else {
            setIndex(isIndex += CONSTANT.ADDING_SCREEN_TABLE)
        }
    }
    return (
        <section className='movies'>
            {
                preloader ? <Preloader /> :
                    (movies.length !== 0) ?
                        search.length === 0 ?
                            'Нужно ввести ключевое слово'
                            :
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