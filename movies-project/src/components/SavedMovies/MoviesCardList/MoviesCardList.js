import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
    userId,
    saveMovies,
    onDeleteMovies,
    searchingResults,
}) {

    let filterMovies = saveMovies.filter((i => i.owner === userId)).map((movie, id) => {
        return (
            <MoviesCard key={id} movie={movie} onDeleteMovies={onDeleteMovies} />
        )
    })

    return (
        <section className='movies'>
            {(searchingResults && filterMovies.length === 0) ?
                'Ничего не найдено':
                <div className='movies__card'>
                    {filterMovies}
                </div>
            }
        </section >
    )
}

export default MoviesCardList;