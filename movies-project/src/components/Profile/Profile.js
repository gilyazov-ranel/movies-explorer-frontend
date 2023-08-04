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
    validationFieldEmail,
    currentUser,
    successfulUpdate,
    onSuccessfulUpdate
}
) {

    function handleSaveProfile() {
        if (isSaveProfile) {
            onSaveProfile(!isSaveProfile)
        }
        onSuccessfulUpdate(false);
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
                    // disabled={!isSaveProfile}
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
                    // disabled={!isSaveProfile}
                    placeholder='E-mail'
                    onChange={handleChangeEmail}
                    onInput={onChangeEmail}
                />

                <span className={`profile__input-error`}>
                    {(validationField || validationFieldEmail) && 'Что-то не так...'}
                </span>
                <p className='profile__error'>
                    {errorMessageForm ? 'При обновлении профиля произошла ошибка.' : successfulUpdate ? 'Вы успешно обновили данные в профиле' : ''}
                </p>
                {
                    isSaveProfile ? <>
                        <button type='button' className='profile__edit' onClick={handleSaveProfile} disabled={validationField || validationFieldEmail}>
                            Редактировать
                        </button>
                        <button className='profile__exit' to='/' onClick={onSignOut} >
                            Выйти из аккаунта
                        </button>
                    </> :
                    <>
                    <p className='profile__error'>
                            {(currentUser.user?.name === name && currentUser.user?.email === email) ?
                            'Данные на сервере совпадают c полями Имя и Email' :
                            currentUser.user?.email === email ?
                            'Данные на сервере совпадают c полем Email' :
                            currentUser.user?.name === name ?
                            'Данные на сервере совпадают c полем Имя' :
                            ''}
                        </p><button type='submit'
                            className='profile__save'
                            disabled={currentUser.user?.name === name || currentUser.user?.email === email}
                            onClick={handleSubmit}
                        >
                                Сохранить
                            </button></>
                }
            </form>

        </main>

    )
}

export default Profile;