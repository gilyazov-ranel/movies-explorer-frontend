import './Movies.css'
import './SearchForm/SearchForm';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader'

function Movies({
    isBurgerMenu,
    movies,
    onSearch,
    search,
    onDuration,
    duration,
    moviesButton,
    searchingResults,
    onSearchingResults,
    onFilterMovies,
    onCreateMovies,
    saveMovies,
    preloader,
    resultRequestServer
}) {

    return (
        <main className={isBurgerMenu ? 'opacity' : ''}>
            <SearchForm
                onSearch={onSearch}
                onDuration={onDuration}
                duration={duration}
                moviesButton={moviesButton}
                onSearchingResults={onSearchingResults}
                onFilterMovies={onFilterMovies}
                search={search}
                chekboxActivion={search}
            />
            {
                preloader ? <Preloader /> :

                    <MoviesCardList
                        movies={movies}
                        search={search}
                        searchingResults={searchingResults}
                        onCreateMovies={onCreateMovies}
                        saveMovies={saveMovies}
                        resultRequestServer={resultRequestServer}
                    />
            }
        </main>

    );
}

export default Movies;