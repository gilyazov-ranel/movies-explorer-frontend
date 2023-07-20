import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
    return (
        <section className='search'>
            <form className='search__form'>
                <input
                    id='movies' name='movies' type='search'
                    className='search__input'
                    required
                    placeholder='Фильм'>
                </input>
                <button type='submit' className='search__button'>
                </button>
            </form>
            <FilterCheckbox />
        </section>

    )
}

export default SearchForm;