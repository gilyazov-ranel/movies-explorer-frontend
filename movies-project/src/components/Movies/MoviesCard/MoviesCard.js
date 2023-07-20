import './MoviesCard.css';
function MoviesCard({
    nameMovie
}) {
    return (
        <section className='movie'>
            <h2 className='movie__name'>
                {nameMovie}
            </h2>
            <button type='button' className='movie__save' />
            <p className='movie__time'>
                1 ч 47 м
            </p>

            <img className='movie__image' src='https://w.forfun.com/fetch/b0/b029ca34284a080eb5c509994966d6f1.jpeg' alt={'Обложка фильма: ' + nameMovie} />
        </section>
    )
}
export default MoviesCard;