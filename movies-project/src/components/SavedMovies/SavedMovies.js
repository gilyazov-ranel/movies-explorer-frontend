import './SavedMovies.css'
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
function SavedMovies({
    isBurgerMenu
}) {
    return (
        <main className={isBurgerMenu ? 'opacity': ''}>
        <SearchForm />
        <MoviesCardList />
        </main>
    )
}

export default SavedMovies;