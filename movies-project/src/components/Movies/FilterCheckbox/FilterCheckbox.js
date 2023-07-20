import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className='filter'>
            <p className='filter__name'>
                Короткометражки
            </p>
            <label className='checkbox'>
                <input type='checkbox'></input>
                <span className='checkbox__on'></span>
            </label>
        </div>
    )
}
export default FilterCheckbox;