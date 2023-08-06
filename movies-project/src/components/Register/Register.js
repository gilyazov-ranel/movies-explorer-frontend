import './Register.css';
import { useState } from 'react';

function Register({ onRegister,
    errorMessageName,
    errorMessageEmail,
    errorMessagePassword,
    errorMessage,
    nameUser,
    emailUser,
    passwordUser,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    validationField,
    validationFieldEmail
}) {

    const [formValue, setFormValue] = useState({
        name: '',
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
        onRegister(formValue);
    }

    return (
        <main className='data'>
            <a href='/' className='data__logo'> </a>
            <h1 className='data__welcome'>
                Добро пожаловать!
            </h1>
            <form onSubmit={handleSubmit} className='data__form'>
                <label className='data__title'>
                    Имя
                </label>
                <input
                    onFocus={e => nameUser.onFocus(e)}
                    onChange={handleChange}
                    className='data__input'
                    name='name'
                    placeholder='Имя'
                    type='text'
                    required
                    value={formValue.name}
                    onInput={onChangeName}
                    minLength='2'
                />

                <label className='data__title' >
                    E-mail
                </label>
                <input
                    onFocus={e => emailUser.onFocus(e)}
                    onChange={handleChange}
                    name="email"
                    className='data__input'
                    placeholder='Email'
                    type='email'
                    required
                    value={formValue.email}
                    onInput={onChangeEmail}
                />

                <label className='data__title'>
                    Пароль
                </label>
                <input
                    onFocus={e => passwordUser.onFocus(e)}
                    onChange={handleChange}
                    name="password"
                    className='data__input'
                    placeholder='Пароль'
                    type='password'
                    required
                    value={formValue.password}
                    onInput={onChangePassword}
                    minLength='8'
                />
                <span className={`data__input-error ` + validationField && `data__input-error__open`}>
                    {(errorMessageName && validationField) && 'Ошибка в поле Имя: ' + errorMessageName.toLowerCase()}
                </span>
                <span className={`data__input-error ` + validationFieldEmail && `data__input-error__open`}>
                    {((formValue.email && validationFieldEmail) || errorMessageEmail ) && 'Ошибка в поле E-mail: ' + (errorMessageEmail.toLowerCase() || 'допишите доменное имя')}
                </span>
                <span className={`data__input-error ` + validationField && `data__input-error__open`}>
                {(errorMessagePassword && validationField) && 'Ошибка в поле Пароль: ' +  errorMessagePassword.toLowerCase()  }
                </span>
                <span className='data__error'>
                    {errorMessage}
                </span>
                <button type='submit'
                    disabled={validationField || validationFieldEmail || !nameUser.inputValid || !passwordUser.inputValid || !emailUser.inputValid}
                    className='data__button'
                    onSubmit={handleSubmit}
                >
                    Зарегистрироваться
                </button>
            </form>
            <p className='data__text'>
                Уже зарегистрированы?
                <a href='/signin' className='data__link'>
                    Войти
                </a>
            </p>

        </main >
    )
}
export default Register;