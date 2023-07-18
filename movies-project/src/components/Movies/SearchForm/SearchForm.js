import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
    return (
        <div className='search'>
            <form className='search__form'>
                <input
                    id='movies' name='movies' type='search'
                    className='search__input'
                    placeholder='Фильм'>
                </input>
                <button className='search__button'>
                </button>
            </form>
            <FilterCheckbox />
        </div>

    )
}

export default SearchForm;