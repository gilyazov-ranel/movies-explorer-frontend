import './Profile.css';

function Profile() {
    return (
        <div className='profile'>
            <h2 className='profile__name'>
                Привет, Виталий!
            </h2>
            <form className='profile__form'>

                <p className='profile__title'>
                    Имя
                </p>
                <input className='profile__input' type='text' value='Виталий' required
/>
                <p className='profile__title'>
                    E-mail
                </p>
                <input className='profile__input' type='email' value='pochta@yandex.ru' required
/>

                <button className='profile__edit' >
                    Редактировать
                </button>
                <button className='profile__exit'>
                    Выйти из аккаунта
                </button>
            </form>
        </div>

    )
}

export default Profile;