import './Movies.css'
import './SearchForm/SearchForm';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({isBurgerMenu}) {
    return (
        <main className={isBurgerMenu ? 'opacity': ''}>
            <SearchForm />
            <MoviesCardList />
        </main>

    );
}

export default Movies;