import './MoviesCard.css';
function MoviesCard() {
    return (
        <div className='movie'>
            <h3 className='movie__name'>
                33 слова о дизайне
            </h3>
            <button className='movie__delete' />
            <p className='movie__time'>
                1 ч 47 м
            </p>

            <img className='movie__image' src='https://w.forfun.com/fetch/b0/b029ca34284a080eb5c509994966d6f1.jpeg' alt='абложка фильма' />
        </div>
    )
}
export default MoviesCard;