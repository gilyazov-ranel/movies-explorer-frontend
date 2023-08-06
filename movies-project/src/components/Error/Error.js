import './Error.css';

function Error({ navigate, location, loggedIn }) {
    function toBack() {
        if (['/saved-movies', '/movies', '/', '/profile'].includes(location.pathname)) {
            navigate(location.pathname)
        } else if (['/signin', '/signup'].includes(location.pathname) && loggedIn) {
            navigate('/');
        } else {
            navigate(-1);
        }
    }
    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__subtitle'>Страница не найдена</p>
            <button type='button' className='error__button' onClick={toBack}>
                Назад
            </button>
        </div >
    )
}

export default Error;