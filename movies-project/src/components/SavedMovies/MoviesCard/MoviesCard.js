import './MoviesCard.css';
function MoviesCard({
    movie,
    onDeleteMovies
}) {
    function durationMovie(duration) {
        const hour = Math.floor(duration / 60);
        const minute = duration % 60;
        return `${hour} ч ${minute} м`
    }

    function deleteMovies(movieId) {
        onDeleteMovies(movieId)
    }

    return (
        <section className='movie'>
            <h2 className='movie__name'>
                {movie.nameRU}
            </h2>
            <button type='button' className='movie__delete'  onClick={() => deleteMovies(movie._id)}/>
            <p className='movie__time'>
                {durationMovie(movie.duration)}
            </p>

            <a href={movie.trailerLink} target='blank'>
                <img className='movie__image'
                src={movie.image}
                alt={'Обложка фильма: ' + movie.nameRU} /></a>
        </section>
    )

}
export default MoviesCard;