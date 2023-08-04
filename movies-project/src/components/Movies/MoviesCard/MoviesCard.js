import './MoviesCard.css';
import {CONSTANT} from '../../../config/constant'

function MoviesCard({
    movie,
    onCreateMovies,
    saveButton,
    onDeleteMovies,
    saveMovieId
}) {

    function durationMovie(duration) {
        const hour = Math.floor(duration / CONSTANT.TIME);
        const minute = duration % CONSTANT.TIME;
        return `${hour} ч ${minute} м`
    }

    function saveMovie(movie) {
        if (!saveButton) {
            onCreateMovies(movie);
        } else {
            onDeleteMovies(saveMovieId[0]?._id);
        }
    }

    return (
        <section className='movie'>
            <h2 className='movie__name'>
                {movie.nameRU}
            </h2>
            <button type='button' className={saveButton ?
                'movie__save-active' : 'movie__save'
            }
                onClick={() => saveMovie(movie) }
            />
            <p className='movie__time'>
                {durationMovie(movie.duration)}
            </p>

            <a href={movie.trailerLink} target='blank'><img className='movie__image'
                src={'https://api.nomoreparties.co/' + movie.image.url}
                alt={'Обложка фильма: ' + movie.nameRU} /></a>
        </section>
    )
}
export default MoviesCard;