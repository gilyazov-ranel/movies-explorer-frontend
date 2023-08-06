import './SavedMovies.css'
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
function SavedMovies({
    isBurgerMenu,
    userId,
    saveMovies,
    onDeleteMovies,
    moviesButton,
    duration,
    onSearchingResults,
    onSearch,
    search,
    onFilterMovies,
    onDuration,
    filterSaveMovies,
    searchingResults
}) {
    return (

        <main className={isBurgerMenu ? 'opacity' : ''}>
            <SearchForm
                moviesButton={moviesButton}
                duration={duration}
                onSearch={onSearch}
                onSearchingResults={onSearchingResults}
                onFilterMovies={onFilterMovies}
                onDuration={onDuration}
                search={search}
                saveMovies={saveMovies}
                filterSaveMovies={filterSaveMovies}
                chekboxActivion ={saveMovies}
            />
            <MoviesCardList
                userId={userId}
                saveMovies={filterSaveMovies}
                onDeleteMovies={onDeleteMovies}
                searchingResults={searchingResults}
            />
        </main>
    )
}

export default SavedMovies;