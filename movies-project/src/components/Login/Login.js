import './Login.css';
import { useState } from 'react';

function Login({ onLogin,
    errorMessageEmail,
    errorMessagePassword,
    emailUser,
    passwordUser,
    onChangeEmail,
    onChangePassword,
    validationField,
    errorMessage
}) {

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(formValue)
    }

    return (
        <main className='data'>
            <a href='/' className='data__logo'> </a>
            <h2 className='data__welcome'>
                Рады видеть!
            </h2>
            <form onSubmit={handleSubmit} className='data__form'>
                <label className='data__title' >
                    E-mail
                </label>
                <input
                    onChange={handleChange}
                    className='data__input'
                    placeholder='Email'
                    name='email'
                    type='email'
                    required
                    onInput={onChangeEmail}
                    onFocus={e => emailUser.onFocus(e)}
                />
                <span className={`data__input-error ` + validationField && `data__input-error__open`}>
                    {errorMessageEmail}
                </span>
                <label className='data__title'>
                    Пароль
                </label>
                <input
                    onChange={handleChange}
                    className='data__input'
                    placeholder='Пароль'
                    type='password'
                    required
                    name='password'
                    onFocus={e => passwordUser.onFocus(e)}
                    onInput={onChangePassword}
                    minLength='8'
                />
                <span className={`data__input-error ` + validationField && `data__input-error__open`}>
                    {errorMessagePassword}
                </span>
                <span className='data__error'>
                    {errorMessage}
                </span>
                <button type='submit'
                    className='data__button-login'
                    onSubmit={handleSubmit}
                    disabled={validationField || !passwordUser.inputValid || !emailUser.inputValid}
                >
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