import './Profile.css';
import { useState } from 'react';

function Profile({
    isBurgerMenu
}
) {
    const [isSaveProfile, setSaveProfile] = useState(true);

    function handleSaveProfile() {
        if (isSaveProfile) {
            setSaveProfile(false)
        } else {
            setSaveProfile(true)
        }
    }

    return (
        <main className={'profile ' + (isBurgerMenu ? 'opacity' : '')}>
            <h1 className='profile__name'>
                Привет, Александр!
            </h1>
            <form className='profile__form'>

                <label className='profile__title'>
                    Имя
                </label>
                <input
                    className='profile__input'
                    type='text'
                    defaultValue='Александр'
                    required
                    disabled={isSaveProfile}
                    placeholder='Имя'
                />
                <label className='profile__title'>
                    E-mail
                </label>
                <input
                    className='profile__input'
                    type='email'
                    defaultValue='spasibo_z@_podskazki.ru'
                    required
                    disabled={isSaveProfile}
                    placeholder='E-mail'
                />
                {
                    isSaveProfile ? <>
                        <button type='button' className='profile__edit' onClick={handleSaveProfile} >
                            Редактировать
                        </button>
                        <a className='profile__exit' href='/'>
                            Выйти из аккаунта
                        </a>
                    </> : <button type='submit' className='profile__save' onClick={handleSaveProfile}>
                        Сохранить
                    </button>

                }
            </form>
        </main>

    )
}

export default Profile;