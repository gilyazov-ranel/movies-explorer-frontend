import './Header.css';
import { NavLink } from "react-router-dom";
function Header({
    films,
    saveFilm,
    buttonRegister,
    buttonLogin,
    buttonStyle,
    buttonProfile,
    pathToPage,
    wayToEnter,
    isOpenBurgerMenu,
    isCloseBurgerMenu,
    isBurgerMenu
}) {

    return (
        <header className='header'>
            <a href='/' className='header__logo'> </a>
            <nav className='header__nav'>
                <a href='/movies' className='header__movie'>{films}</a>
                <a href='/saved-movies' className='header__movie'>{saveFilm}</a>
            </nav>
            <div className={'burger-menu' + (isBurgerMenu ? ' open' : ' ')}>
                <button type='button' className='burger-menu__close' onClick={isCloseBurgerMenu}>
                </button>
                <nav className='burger-menu__nav'>
                    <ul>
                        <li ><NavLink to='/' className='burger-menu__title' >Главная</NavLink></li>
                        <li ><NavLink to='/movies' className='burger-menu__title' onClick={isCloseBurgerMenu}>Фильмы</NavLink></li>
                        <li ><NavLink to='/saved-movies' className='burger-menu__title' onClick={isCloseBurgerMenu}>Сохранённые фильмы</NavLink></li>
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
            <div className='header__block'>
                <a href={pathToPage} className={'header' + buttonProfile}>
                    {buttonRegister}
                </a>
                <a href={wayToEnter} className={'header' + buttonStyle}>
                    {buttonLogin}
                </a>
                <div className={(buttonProfile === '__profile' ? 'header__burger' : '')
                }
                    onClick={isOpenBurgerMenu} >
                </div>
            </div>

        </header>
    )
}
export default Header;