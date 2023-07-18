import './Register.css';

function Register() {
    return (
        <div className='data'>
            <a href='/' className='data__logo'> </a>
            <h2 className='data__welcome'>
                Добро пожаловать!
            </h2>
            <form className='data__form'>
                <p className='data__title'>
                    Имя
                </p>
                <input className='data__input' placeholder='Имя' type='text' required
/>
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
                <button className='data__button'>
                    Зарегистрироваться
                </button>
            </form>
            <p className='data__text'>
                Уже зарегистрированы?
                <a href='/signin' className='data__link'>
                    Войти
                </a>
            </p>

        </div>
    )
}
export default Register;