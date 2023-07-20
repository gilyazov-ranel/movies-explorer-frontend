import './Register.css';

function Register() {
    return (
        <main className='data'>
            <a href='/' className='data__logo'> </a>
            <h1 className='data__welcome'>
                Добро пожаловать!
            </h1>
            <form className='data__form'>
                <label className='data__title'>
                    Имя
                </label>
                <input className='data__input' placeholder='Имя' type='text' required
/>
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
                <button type='submit' className='data__button'>
                    Зарегистрироваться
                </button>
            </form>
            <p className='data__text'>
                Уже зарегистрированы?
                <a href='/signin' className='data__link'>
                    Войти
                </a>
            </p>

        </main>
    )
}
export default Register;