import './Error.css';

function Error() {
    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__subtitle'>Страница не найдена</p>
            <button className='error__button'>
                Назад
            </button>
        </div>
    )
}

export default Error;