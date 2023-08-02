import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm({
    onSearch,
    onDuration,
    duration,
    moviesButton,
    onSearchingResults,
    onFilterMovies,
    search,
    saveMovies,
    chekboxActivion
 }) {

    return (
        <section className='search'>
            <form className='search__form'>
                <input
                    id='movies' name='movies' type='search'
                    className='search__input'
                    required
                    placeholder='Фильм'
                    value={search}
                    onChange={(event) => {
                        onSearch(event.target.value);
                        if (event.target.value.length === 0) {
                            onSearchingResults(false);
                            onFilterMovies(saveMovies || []);
                        }
                    }}>
                </input>
                <button type='button' className='search__button' onClick={moviesButton} disabled={chekboxActivion.length === 0}>
                </button>
            </form>
            <FilterCheckbox
                onDuration={onDuration}
                duration={duration}
                moviesButton={moviesButton}
                chekboxActivion={chekboxActivion}
            />
        </section>

    )
}

export default SearchForm;