import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <section className='movies'>
            <div className='movies__card'>
                <MoviesCard nameMovie='33 слова о дизайне'/>
                <MoviesCard nameMovie='33 слова о дизайне'/>
                <MoviesCard nameMovie='33 слова о дизайне'/>
                <MoviesCard nameMovie='33 слова о дизайне'/>
                <MoviesCard nameMovie='33 слова о дизайне'/>
                <MoviesCard nameMovie='33 слова о дизайне'/>
                <MoviesCard nameMovie='33 слова о дизайне'/>
                <MoviesCard nameMovie='33 слова о дизайне'/>
            </div>
            <button type='button' className='movies__button'>
            Ёще
            </button>
        </section>
    )
}

export default MoviesCardList;