import './Header.css';
import { useState } from 'react';

function Header({
    films,
    saveFilm,
    buttonRegister,
    buttonLogin,
    buttonStyle,
    buttonProfile,
    pathToPage,
    wayToEnter
}) {

    const [isBurgerMenu, setBurgerMenu] = useState(false);

    function handleOpenBurgerMenu() {
            setBurgerMenu(true);
    }
    function handleCloseBurgerMenu() {
        setBurgerMenu(false);
    }

    return (
        <header className="header">
            <a href='/' className="header__logo"> </a>
            <div className="header__movies">
                <a href='/movies' className="header__movie">{films}</a>
                <a href='/saved-movies' className="header__movie">{saveFilm}</a>
            </div>
            <div className={`burger-menu` + (isBurgerMenu ? ` open` : ' ')}>
                <button className='burger-menu__close' onClick={handleCloseBurgerMenu}>
                </button>
                <nav className='burger-menu__nav'>
                    <ul>
                        <li ><a href='/' className='burger-menu__title'>Главная</a></li>
                        <li ><a href='/movies' className='burger-menu__title'>Фильмы</a></li>
                        <li ><a href='/saved-movies' className='burger-menu__title'>Сохранённые фильмы</a></li>
                    </ul>
                </nav>
                <div className='burger-menu__block'>
                    <a href='/profile' className='burger-menu__profile'>
                        {buttonRegister}
                    </a>
                    <a href='/profile' className='burger-menu__account'>
                    </a>
                </div>
            </div>
            <div className={'header__block'}>
                <a href={pathToPage} className={"header" + buttonProfile}>
                    {buttonRegister}
                </a>
                <a href={wayToEnter} className={"header" + buttonStyle}>
                    {buttonLogin}
                </a>
                <div class={(buttonProfile === '__profile' && `header__burger`)
                }
                    onClick={handleOpenBurgerMenu} >
                </div>
            </div>

        </header>
    )
}
export default Header;