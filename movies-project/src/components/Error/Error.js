import './Error.css';


function Error({navigate}) {

    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__subtitle'>Страница не найдена</p>
            <button type='button' className='error__button' onClick={() => navigate(-1)}>
            Назад
        </button>
        </div >
    )
}

export default Error;