import './FilterCheckbox.css';

function FilterCheckbox({ onDuration, duration, moviesButton, search }) {

    return (
        <div className='filter'>
            <p className='filter__name'>
                Короткометражки
            </p>
            <label className='checkbox' onChange={moviesButton} disabled={search.length === 0}>
                <input type='checkbox' disabled={search.length === 0}/>
                <span className='checkbox__on' type="checkbox" id='checkbox__on' checked={duration} onChange={() => { onDuration(!duration)}} disabled={search.length === 0}></span>
            </label>
        </div>
    )
}
export default FilterCheckbox;