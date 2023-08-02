import './FilterCheckbox.css';

function FilterCheckbox({
    onDuration,
    duration,
    moviesButton,
    chekboxActivion }) {

    return (
        <div className='filter'>
            <p className='filter__name'>
                Короткометражки
            </p>
            <label className='checkbox'>
                <input type='checkbox'
                    checked={duration}
                    onChange={() => moviesButton()}
                    disabled={chekboxActivion.length === 0}
                />
                <span
                    className='checkbox__on'
                    type="checkbox"
                    id='checkbox__on'
                    onClick={() => {
                        onDuration(!duration)
                    }}


                ></span>
            </label>
        </div>
    )
}
export default FilterCheckbox;