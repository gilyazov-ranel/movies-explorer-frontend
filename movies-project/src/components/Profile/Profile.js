import './Profile.css';

function Profile({
    isBurgerMenu,
    onSignOut,
    onEditProfile,
    nameUser,
    emailUser,
    onChangeName,
    onChangeEmail,
    validationField,
    errorMessageForm,
    onSaveProfile,
    isSaveProfile,
    name,
    setName,
    nameGreeting,
    setNameGreeting,
    setEmail,
    email,
}
) {

    function handleSaveProfile() {
        if (isSaveProfile) {
            onSaveProfile(!isSaveProfile)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        onEditProfile({
            name: name,
            email: email,
        })
        setNameGreeting(name);
    }

    function handleChangeName(e) {
        setName(e.target.value);
        nameUser.onFocus(e);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        emailUser.onFocus(e);
    }

    return (
        <main className={'profile ' + (isBurgerMenu ? 'opacity' : '')}>
            <h1 className='profile__name'>
                Привет, {nameGreeting ?? ''}!
            </h1>
            <form
                className='profile__form'
            >

                <label className='profile__title'>
                    Имя
                </label>
                <input
                    className='profile__input'
                    type='text'
                    value={name ?? ''}
                    required
                    disabled={isSaveProfile}
                    placeholder='Имя'
                    onChange={handleChangeName}
                    onInput={onChangeName}
                    minLength='2'
                />
                <label className='profile__title'>
                    E-mail
                </label>
                <input
                    className='profile__input'
                    type='email'
                    value={email ?? ''}
                    required
                    disabled={isSaveProfile}
                    placeholder='E-mail'
                    onChange={handleChangeEmail}
                    onInput={onChangeEmail}
                />

                <span className={`profile__input-error`}>
                    {validationField && 'Что-то не так...'}
                </span>
                <p className='profile__error'>
                    {errorMessageForm && 'При обновлении профиля произошла ошибка.'}
                </p>
                {
                    isSaveProfile ? <>
                        <button type='button' className='profile__edit' onClick={handleSaveProfile} >
                            Редактировать
                        </button>
                        <button className='profile__exit' to='/' onClick={onSignOut}>
                            Выйти из аккаунта
                        </button>
                    </> :
                        <button type='submit'
                            disabled={validationField}
                            className='profile__save'
                            onClick={handleSubmit}
                        >
                            Сохранить
                        </button>
                }
            </form>

        </main>

    )
}

export default Profile;