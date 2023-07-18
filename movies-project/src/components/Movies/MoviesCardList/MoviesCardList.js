import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <div className='movies'>
            <div className='movies__card'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <button className='movies__button'>
            Ёще
            </button>
        </div>
    )
}

export default MoviesCardList;