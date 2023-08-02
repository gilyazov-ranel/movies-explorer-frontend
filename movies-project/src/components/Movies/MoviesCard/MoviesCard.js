import './MoviesCard.css';

function MoviesCard({
    movie,
    onCreateMovies,
    saveButton

}) {

    function durationMovie(duration) {
        const hour = Math.floor(duration / 60);
        const minute = duration % 60;
        return `${hour} ч ${minute} м`
    }

    function saveMovie(movie) {
        onCreateMovies(movie)
    }

    return (
        <section className='movie'>
            <h2 className='movie__name'>
                {movie.nameRU}
            </h2>
            <button type='button' className={ saveButton ?
                'movie__save-active' : 'movie__save'
            }
            onClick={() => saveMovie(movie)}
            disabled={saveButton}/>
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