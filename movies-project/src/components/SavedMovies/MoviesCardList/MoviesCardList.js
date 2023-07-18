import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <div className='movies'>
            <div className='movies__save-card'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
        </div>
    )
}

export default MoviesCardList;