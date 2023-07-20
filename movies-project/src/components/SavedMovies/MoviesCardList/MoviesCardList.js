import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <section className='movies'>
            <div className='movies__save-card'>
                <MoviesCard nameMovie='33 слова о дизайне'/>
                <MoviesCard nameMovie='33 слова о дизайне'/>
                <MoviesCard nameMovie='33 слова о дизайне'/>
            </div>
        </section>
    )
}

export default MoviesCardList;