import './Login.css';

function Login() {
    return (
        <div className='data'>
            <a href='/' className='data__logo'> </a>
            <h2 className='data__welcome'>
                Рады видеть!
            </h2>
            <form className='data__form'>
                <p className='data__title' >
                    E-mail
                </p>
                <input className='data__input' placeholder='Email' type='email' required
                />
                <p className='data__title'>
                    Пароль
                </p>
                <input className='data__input' placeholder='Пароль' type='password' required
                />
                <span className='data__input-error'>
                    Что-то пошло не так...
                </span>
                <button className='data__button-login'>
                    Войти
                </button>
            </form>
            <p className='data__text'>
                Ещё не зарегистрированы?
                <a href='/signup' className='data__link'>
                    Регистрация
                </a>
            </p>

        </div>
    )
}

export default Login;