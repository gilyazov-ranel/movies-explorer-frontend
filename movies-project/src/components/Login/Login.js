import './Login.css';

function Login() {
    return (
        <main className='data'>
            <a href='/' className='data__logo'> </a>
            <h2 className='data__welcome'>
                Рады видеть!
            </h2>
            <form className='data__form'>
                <label className='data__title' >
                    E-mail
                </label>
                <input className='data__input' placeholder='Email' type='email' required
                />
                <label className='data__title'>
                    Пароль
                </label>
                <input className='data__input' placeholder='Пароль' type='password' required
                />
                <span className='data__input-error'>
                    Что-то пошло не так...
                </span>
                <button type='submit' className='data__button-login'>
                    Войти
                </button>
            </form>
            <p className='data__text'>
                Ещё не зарегистрированы?
                <a href='/signup' className='data__link'>
                    Регистрация
                </a>
            </p>

        </main>
    )
}

export default Login;